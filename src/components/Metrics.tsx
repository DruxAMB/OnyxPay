import React from 'react';
import { DollarSign, Users, Repeat } from 'lucide-react';

const metrics = [
  {
    label: 'Total Value Locked',
    value: '$10M+',
    icon: DollarSign,
    change: '+25%',
  },
  {
    label: 'Active Users',
    value: '50,000+',
    icon: Users,
    change: '+40%',
  },
  {
    label: 'Total Subscriptions',
    value: '100,000+',
    icon: Repeat,
    change: '+30%',
  },
];

const Metrics = () => {
  return (
    <section id="metrics" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Growing Fast
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Join thousands of users already benefiting from OnyxPay
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-gray-800 p-8 rounded-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <metric.icon className="w-8 h-8 text-indigo-400" />
                <span className="text-green-400 text-sm font-medium">
                  {metric.change}
                </span>
              </div>
              <p className="mt-4 text-4xl font-bold text-white">{metric.value}</p>
              <p className="mt-2 text-gray-400">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Metrics;