// Updated SubscriptionsPage.tsx
import { useState } from 'react';
import { Plus } from 'lucide-react';
import  Button  from '../components/Button';
import { useSubscriptionsList } from '../../hooks/useSubscriptionList';
import { SubscriptionCard } from '../components/SubscriptionCard';
import { AddSubscriptionDialog } from '../components/AddSubscriptionDialog';
import { useOnyxPay } from '../../hooks/useOnyxPay';


interface Subscription {
  id: string;
  recipient: `0x${string}`;
  amount: bigint;
  frequency: bigint;
  lastPaid: bigint;
  active: boolean;
}


export default function SubscriptionsPage() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { subscriptions } = useSubscriptionsList();
  const { recurringPayments, handleCancelSubscription, isLoading } = useOnyxPay();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Active Subscriptions</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Subscription
        </Button>
      </div>

      <div className="grid gap-6">
        {recurringPayments.map((subscription: Subscription) => (
          <SubscriptionCard
            key={subscription.id}
            subscription={subscription}
            onCancel={handleCancelSubscription}
            isLoading={isLoading}
          />
        ))}
      {recurringPayments.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No active subscriptions
          </div>
        )}
      </div>

      <AddSubscriptionDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
      />
    </div>
  );
}