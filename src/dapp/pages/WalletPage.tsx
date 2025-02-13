import React from 'react';
import { Wallet } from 'lucide-react';
import { useAccount, useBalance, useReadContracts } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { erc20Abi } from 'viem';
import Card from '../components/Card';
// import Button from '../components/Button';

interface TokenBalance {
  symbol: string;
  balance: string;
  value: number;
  decimals: number;
  address: string;
}

// Common token addresses - should be environment specific
const TOKEN_ADDRESSES = {
  USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
} as const;

export default function WalletPage() {
  const { address, isConnected } = useAccount();
  const { data: ethBalance } = useBalance({
    address: address,
  });

  // Prepare contract calls for all tokens
  const tokenAddresses = Object.values(TOKEN_ADDRESSES);
  const contractCalls = tokenAddresses.flatMap((tokenAddress) => [
    {
      address: tokenAddress as `0x${string}`,
      abi: erc20Abi,
      functionName: 'decimals',
    },
    {
      address: tokenAddress as `0x${string}`,
      abi: erc20Abi,
      functionName: 'symbol',
    },
    {
      address: tokenAddress as `0x${string}`,
      abi: erc20Abi,
      functionName: 'balanceOf',
      args: address ? [address] : undefined,
    },
  ]);

  // Use useReadContracts to batch fetch all token data
  const { data: tokenData, isError, isLoading } = useReadContracts({
    contracts: contractCalls,
  });

  // Process token data into balances
  const tokenBalances: TokenBalance[] = React.useMemo(() => {
    if (!tokenData) return [];

    return tokenAddresses.map((tokenAddress, index) => {
      const baseIndex = index * 3;
      const decimals = Number(tokenData[baseIndex]?.result || 18);
      const symbol = String(tokenData[baseIndex + 1]?.result || '');
      const balance = tokenData[baseIndex + 2]?.result;

      return {
        symbol: symbol || Object.keys(TOKEN_ADDRESSES)[index],
        address: tokenAddress,
        decimals,
        balance: balance ? (Number(balance) / 10 ** decimals).toString() : '0',
        value: 0, // You would typically fetch this from a price oracle
      };
    });
  }, [tokenData]);

  if (!isConnected) {
    return (
      <div className="p-6 text-center">
        <ConnectButton />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Wallet</h1>
        {/* <div className="space-x-4">
          <Button variant="secondary">
            <ArrowDownLeft className="w-4 h-4 mr-2" />
            Deposit
          </Button>
          <Button>
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Withdraw
          </Button>
        </div> */}
      </div>

      <Card className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Wallet className="w-8 h-8 text-indigo-400 mr-4" />
            <div>
              <h2 className="text-lg font-medium text-white">Total Balance</h2>
              <p className="text-3xl font-bold text-white mt-1">
                {ethBalance?.formatted || '0'} {ethBalance?.symbol}
              </p>
            </div>
          </div>
        </div>
      </Card>

      <h2 className="text-xl font-semibold text-white mb-4">Your Assets</h2>
      
      {isError && (
        <div className="text-red-500 mb-4">
          Failed to load token balances
        </div>
      )}

      {isLoading ? (
        <div className="text-center py-4">Loading assets...</div>
      ) : (
        <div className="grid gap-4">
          {tokenBalances.map((token) => (
            <Card key={token.address} className="transform transition-all duration-300 hover:scale-101">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-white">{token.symbol}</h3>
                  <p className="text-gray-400">
                    {parseFloat(token.balance).toFixed(3)} {token.symbol}
                  </p>
                </div>
                <p className="text-lg text-white">
                  ${token.value.toFixed(2)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}