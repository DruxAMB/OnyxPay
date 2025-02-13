// hooks/useDashboard.ts
import { 
    useAccount, 
    useReadContract, 
    useWriteContract, 
    useWaitForTransactionReceipt,
    usePublicClient
  } from 'wagmi';
  import { PaymentGatewayABI, YieldFarmingVaultABI, RewardsDistributorABI } from '../contracts/abis';
  import { useToast } from "../components/ui/use-toast";
  import { useState, useCallback, useEffect } from 'react';
  import { formatEther, parseEther } from 'viem';
  
  interface DashboardStats {
    totalValueLocked: bigint;
    totalYieldEarned: bigint;
    activeSubscriptions: number;
    averageYieldRate: number;
  }
  
  interface ActivityItem {
    type: 'yield' | 'subscription' | 'deposit' | 'withdrawal';
    amount: bigint;
    timestamp: number;
    description: string;
    transactionHash: string;
  }
  
  export function useDashboard() {
    const { address } = useAccount();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState<DashboardStats>({
      totalValueLocked: BigInt(0),
      totalYieldEarned: BigInt(0),
      activeSubscriptions: 0,
      averageYieldRate: 0
    });
    const [recentActivity, setRecentActivity] = useState<ActivityItem[]>([]);
    const publicClient = usePublicClient();

    const PAYMENT_GATEWAY_ADDRESS = "0x0eE6A2Cb0b572F5b398349B6249a5B194675f6EF"as const;
    const VAULT_ADDRESS = "0x3B73F81CF79e2AD2804FeBF563f55117cf986e49" as const;
    const REWARDS_ADDRESS = "0x588d5D7e32687dB64d84A7154AcDBDDF2a7DD14c" as const;
  
    // Contract reads
    const { data: vaultInfo }: { data: { shares: bigint } | undefined } = useReadContract({
      address: VAULT_ADDRESS,
      abi: YieldFarmingVaultABI,
      functionName: 'userInfo',
      args: [address!],
      query: {
        enabled: !!address,
      },
    });
  
    const { data: rewardsInfo }: { data: { claimed: bigint, pending: bigint } | undefined } = useReadContract({
      address: REWARDS_ADDRESS,
      abi: RewardsDistributorABI,
      functionName: 'userRewards',
      args: [address!],
      query: {
        enabled: !!address,
      },
    });
  
    // Fetch yield history
    const fetchYieldHistory = useCallback(async () => {
      if (!address || !publicClient) return;
  
      try {
        const yieldGeneratedEvents = await publicClient.getLogs({
          address: REWARDS_ADDRESS,
          event: {
            type: 'event',
            name: 'YieldGenerated',
            inputs: [
              { type: 'address', name: 'user', indexed: true },
              { type: 'uint256', name: 'amount' },
              { type: 'uint256', name: 'timestamp' }
            ]
          },
          args: {
            user: address
          },
          fromBlock: BigInt(0),
          toBlock: 'latest'
        });
  
        return yieldGeneratedEvents.map(event => ({
          type: 'yield' as const,
          amount: event.args.amount || BigInt(0),
          timestamp: Number(event.args.timestamp || 0),
          description: 'Yield generated',
          transactionHash: event.transactionHash
        }));
      } catch (error) {
        console.error('Error fetching yield history:', error);
        return [];
      }
    }, [address, publicClient]);
  
    // Claim rewards
    const { writeContract: writeClaimRewards, data: claimTxHash } = useWriteContract();
  
    const handleClaimRewards = useCallback(async () => {
      try {
        setIsLoading(true);
        await writeClaimRewards({
          address: REWARDS_ADDRESS,
          abi: RewardsDistributorABI,
          functionName: 'claimRewards',
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to claim rewards",
          variant: "destructive",
        });
      }
    }, [writeClaimRewards, toast]);
  
    // Watch for transaction receipt
    useWaitForTransactionReceipt({
      hash: claimTxHash,
      query: {
        enabled: !!claimTxHash,
        async onSuccess(data) {
          toast({
            title: "Success",
            description: "Successfully claimed rewards",
          });
          await fetchStats();
        },
      },
    });
  
    // Fetch all dashboard stats
    const fetchStats = useCallback(async () => {
      if (!address || !vaultInfo || !rewardsInfo) return;
  
      try {
        setIsLoading(true);
  
        // Get yield history
        const yieldHistory = await fetchYieldHistory();
  
        // Calculate average yield rate
        const averageYieldRate = yieldHistory && yieldHistory.length > 0
          ? yieldHistory.reduce((acc, curr) => acc + Number(formatEther(curr.amount)), 0) / yieldHistory.length
          : 0;
  
        setStats({
          totalValueLocked: vaultInfo.shares || BigInt(0),
          totalYieldEarned: rewardsInfo.claimed || BigInt(0),
          activeSubscriptions: 0, // Will be updated by subscription count
          averageYieldRate
        });
  
        // Update recent activity
        if (yieldHistory) {
          setRecentActivity(yieldHistory.slice(0, 10)); // Show last 10 activities
        }
  
      } catch (error) {
        console.error('Error fetching stats:', error);
        toast({
          title: "Error",
          description: "Failed to fetch dashboard statistics",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }, [address, vaultInfo, rewardsInfo, fetchYieldHistory, toast]);
  
    // Initial fetch
    useEffect(() => {
      fetchStats();
    }, [fetchStats]);
  
    return {
      stats,
      recentActivity,
      isLoading,
      handleClaimRewards,
      pendingRewards: rewardsInfo?.pending || BigInt(0)
    };
  }
  