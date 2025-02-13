// components/SubscriptionCard.tsx
import Card  from './Card';
import  Button  from './Button';
import { formatEther } from 'viem';
import { formatDistanceToNow } from 'date-fns';

interface SubscriptionCardProps {
  subscription: {
    id: string;
    recipient: string;
    amount: bigint;
    frequency: bigint;
    lastPaid: bigint;
    active: boolean;
  };
  onCancel: (id: string) => void;
  isLoading: boolean;
}

export function SubscriptionCard({ subscription, onCancel, isLoading }: SubscriptionCardProps) {
  const nextPayment = new Date((Number(subscription.lastPaid) + Number(subscription.frequency)) * 1000);

  return (
    <Card className="transform transition-all duration-300 hover:scale-101">
      <div className="flex justify-between items-start p-6">
        <div>
          <h3 className="text-lg font-medium text-white">
            {`${subscription.recipient.slice(0, 6)}...${subscription.recipient.slice(-4)}`}
          </h3>
          <div className="mt-2 space-y-1">
            <div className="flex items-center text-gray-400">
              <span>{formatEther(subscription.amount)} ETH / {formatDistanceToNow(Number(subscription.frequency) * 1000)}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <span>Next payment: {formatDistanceToNow(nextPayment, { addSuffix: true })}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <Button
            variant="danger"
            size="sm"
            disabled={isLoading || !subscription.active}
            onClick={() => onCancel(subscription.id)}
          >
            {isLoading ? 'Cancelling...' : 'Cancel'}
          </Button>
        </div>
      </div>
    </Card>
  );
}