import React from 'react';
import { Shield, TrendingUp, BarChart3 } from 'lucide-react';

const features = [
  {
    name: 'Yield on Subscriptions',
    description: 'Automates earning yield on unused subscription payments through smart DeFi integrations.',
    icon: TrendingUp,
  },
  {
    name: 'Security First',
    description: 'Your funds are secured in audited smart contracts with industry-leading security measures.',
    icon: Shield,
  },
  {
    name: 'Real-Time Tracking',
    description: 'Monitor your payments and yield growth with comprehensive analytics and reporting.',
    icon: BarChart3,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Everything you need to maximize your earnings
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            OnyxPay combines the power of DeFi with the convenience of traditional subscriptions.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;