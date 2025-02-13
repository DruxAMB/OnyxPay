import React from 'react';
import { MessageCircle } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const faqs = [
  {
    question: 'How does yield generation work?',
    answer: 'Your subscription funds are automatically deposited into trusted DeFi protocols that generate yield through lending and liquidity provision.',
  },
  {
    question: 'Is my money safe?',
    answer: 'Yes, all smart contracts are audited by leading security firms and funds are protected by industry-standard security measures.',
  },
  {
    question: 'How do I withdraw my earnings?',
    answer: 'You can withdraw your earned yield at any time through the Wallet page. Simply click the Withdraw button and follow the instructions.',
  },
];

const SupportPage = () => {
  const [openTicket, setOpenTicket] = React.useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Support</h1>
        <Button onClick={() => setOpenTicket(true)}>
          <MessageCircle className="w-4 h-4 mr-2" />
          Open Ticket
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <h3 className="text-lg font-medium text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

        {openTicket && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">New Support Ticket</h2>
            <Card>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 border-gray-600 rounded-md text-white px-3 py-2"
                    placeholder="Enter ticket subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full bg-gray-700 border-gray-600 rounded-md text-white px-3 py-2 h-32"
                    placeholder="Describe your issue"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="secondary"
                    onClick={() => setOpenTicket(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Submit Ticket</Button>
                </div>
              </form>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportPage;