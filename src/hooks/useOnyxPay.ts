//hooks/useOnyxPay.ts
import { 
    useAccount, 
    useReadContract, 
    useWriteContract, 
    useWatchContractEvent,
    useWaitForTransactionReceipt,
  } from 'wagmi';
  import { PaymentGatewayABI, YieldFarmingVaultABI, RewardsDistributorABI } from '../contracts/abis.ts';
  import { useToast } from "../components/ui/use-toast.tsx";
  import { useState, useCallback } from 'react';

  interface Subscription {
    id: string;
    recipient: `0x${string}`;
    amount: bigint;
    frequency: bigint;
    lastPaid: bigint;
    active: boolean;
  }
  
  const PAYMENT_GATEWAY_ADDRESS = "0x0eE6A2Cb0b572F5b398349B6249a5B194675f6EF"as const;
  const VAULT_ADDRESS = "0x3B73F81CF79e2AD2804FeBF563f55117cf986e49" as const;
  const REWARDS_ADDRESS = "0x588d5D7e32687dB64d84A7154AcDBDDF2a7DD14c" as const;
  
  export function useOnyxPay() {
    const { address } = useAccount();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
  
    // Read Contracts
    const { data: userShares } = useReadContract({
      address: VAULT_ADDRESS,
      abi: YieldFarmingVaultABI,
      functionName: 'userInfo',
      args: [address!],
      query: {
        enabled: !!address,
      },
    });
  
    const { data: pendingRewards } = useReadContract({
      address: REWARDS_ADDRESS,
      abi: RewardsDistributorABI,
      functionName: 'userRewards',
      args: [address!],
      query: {
        enabled: !!address,
      },
    });
  
    const { data: recurringPayments } = useReadContract({
      address: PAYMENT_GATEWAY_ADDRESS,
      abi: PaymentGatewayABI,
      functionName: 'recurringPayments',
      args: [address!],
      query: {
        enabled: !!address,
      },
    });
  
    // Write Contracts
    const { writeContract: writeSetupPayment, data: setupTxData } = useWriteContract();
    const { writeContract: writeCancelPayment, data: cancelTxData } = useWriteContract();
    const { writeContract: writeClaimRewards, data: claimTxData } = useWriteContract();
  
    useWaitForTransactionReceipt({
        hash: setupTxData,
        query: {
          enabled: !!setupTxData,
          onSuccess: () => {
            toast({
              title: "Success",
              description: "Subscription setup successful",
            });
          },
          onError: (error) => {
            toast({
              title: "Error",
              description: error.message,
              variant: "destructive",
            });
          },
        },
      });
    
      useWaitForTransactionReceipt({
        hash: cancelTxData,
        query: {
          enabled: !!cancelTxData,
        },
      });
    
      useWaitForTransactionReceipt({
        hash: claimTxData,
        query: {
          enabled: !!claimTxData,
        },
      });
    
  
    // Helper Functions
    const handleSetupSubscription = useCallback(async (
      recipient: Address,
      amount: bigint,
      frequency: bigint
    ) => {
      try {
        setIsLoading(true);
        await writeSetupPayment({
          address: PAYMENT_GATEWAY_ADDRESS,
          abi: PaymentGatewayABI,
          functionName: 'setupRecurringPayment',
          args: [recipient, amount, frequency],
        })     } catch (error) {
            toast({
              title: "Error",
              description: "Failed to setup subscription",
              variant: "destructive",
            });
          } finally {
            setIsLoading(false);
          }
        }, [writeSetupPayment, toast]);
      
        const handleCancelSubscription = useCallback(async (paymentId: string) => {
          try {
            setIsLoading(true);
            await writeCancelPayment({
              address: PAYMENT_GATEWAY_ADDRESS,
              abi: PaymentGatewayABI,
              functionName: 'cancelRecurringPayment',
              args: [paymentId],
            });
          } catch (error) {
            toast({
              title: "Error",
              description: "Failed to cancel subscription",
              variant: "destructive",
            });
          } finally {
            setIsLoading(false);
          }
        }, [writeCancelPayment, toast]);
      
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
          } finally {
            setIsLoading(false);
          }
        }, [writeClaimRewards, toast]);
      
        return {
            userShares,
            pendingRewards,
            recurringPayments: recurringPayments || [],
            isLoading,
            handleSetupSubscription,
            handleCancelSubscription,
            handleClaimRewards,
        };
      }
      