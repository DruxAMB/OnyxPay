import { useAccount, useReadContract } from "wagmi";
import { PaymentGatewayABI } from '../contracts/abis.ts';

const PAYMENT_GATEWAY_ADDRESS = "0x0eE6A2Cb0b572F5b398349B6249a5B194675f6EF" as const;

// hooks/useSubscriptionsList.ts
export function useSubscriptionsList() {
    const { address } = useAccount();
    
    const { data: subscriptionIds } = useReadContract({
      address: PAYMENT_GATEWAY_ADDRESS,
      abi: PaymentGatewayABI,
      functionName: 'getSubscriptionIds',
      args: [address!],
      query: {
        enabled: !!address,
      },
    });
  
    const { data: subscriptions } = useReadContract({
      address: PAYMENT_GATEWAY_ADDRESS,
      abi: PaymentGatewayABI,
      functionName: 'batchGetSubscriptions',
      args: [subscriptionIds || []],
      query: {
        enabled: Array.isArray(subscriptionIds) && subscriptionIds.length > 0,
      },
    });
  
    return {
      subscriptions,
      isLoading: !subscriptions,
    };
  }
  