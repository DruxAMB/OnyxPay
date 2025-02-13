import React from 'react';
import { Wallet, LineChart, LayoutDashboard } from 'lucide-react';

const benefits = [
  {
    title: 'Stablecoin Acceptance',
    description: 'Merchants can seamlessly accept stablecoin payments for subscriptions.',
    icon: Wallet,
  },
  {
    title: 'DeFi Yield Generation',
    description: 'Unused funds automatically generate yield through trusted DeFi protocols.',
    icon: LineChart,
  },
  {
    title: 'Intuitive Dashboard',
    description: 'Track all your transactions and earnings in one place with real-time updates.',
    icon: LayoutDashboard,
  },
];

const WhatItDoes = () => {
  return (
    <section id="what-it-does" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Revolutionizing Subscription Payments
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Experience the future of subscription management with built-in yield generation.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="relative p-6 bg-gray-900 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-md mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white">{benefit.title}</h3>
              <p className="mt-2 text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatItDoes;