import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../components/ui/Dialog";
import Button  from './Button';
import { Input } from '../../components/ui/input';
import { useForm } from 'react-hook-form';
import { parseEther } from 'viem';
import { useOnyxPay } from "../../hooks/useOnyxPay";

interface AddSubscriptionFormData {
  recipient: string;
  amount: string;
  frequency: string;
}

export function AddSubscriptionDialog({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const { handleSetupSubscription, isLoading } = useOnyxPay();
  const { register, handleSubmit, reset } = useForm<AddSubscriptionFormData>();

  const onSubmit = async (data: AddSubscriptionFormData) => {
    try {
      await handleSetupSubscription(
        data.recipient,
        parseEther(data.amount), // Convert to Wei
        BigInt(parseInt(data.frequency) * 24 * 60 * 60) // Convert days to seconds
      );
      reset();
      onClose();
    } catch (error) {
      console.error('Failed to setup subscription:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Subscription</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Recipient Address
            </label>
            <Input
              {...register('recipient', { required: true })}
              placeholder="0x..."
              className="w-full bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Amount (BNB)
            </label>
            <Input
              {...register('amount', { required: true, min: "0" })}
              type="number"
              step="0.000000000000000001"
              className="w-full bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Frequency (Days)
            </label>
            <Input
              {...register('frequency', { required: true, min: "1" })}
              type="number"
              className="w-full bg-gray-700 text-white"
            />
          </div>
          <div className="flex justify-end space-x-2 mt-6">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Setting up...' : 'Add Subscription'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}