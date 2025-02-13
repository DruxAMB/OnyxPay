import React from 'react';
import { Wallet, CreditCard, Coins, BarChart2, ArrowRightCircle } from 'lucide-react';

const steps = [
  { title: 'Connect Wallet', icon: Wallet },
  { title: 'Set Up Subscription', icon: CreditCard },
  { title: 'Generate Yield', icon: Coins },
  { title: 'Track Progress', icon: BarChart2 },
  { title: 'Withdraw or Reinvest', icon: ArrowRightCircle },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            How OnyxPay Works
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Get started in minutes with our simple process
          </p>
        </div>
        <div className="mt-20">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-indigo-500 transform -translate-y-1/2 hidden md:block" />
            
            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-5">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex flex-col items-center space-y-4 relative"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-indigo-500 rounded-full transform transition-all duration-300 hover:scale-110">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white text-center">
                    {step.title}
                  </h3>
                  <span className="absolute -top-8 text-indigo-400 font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;