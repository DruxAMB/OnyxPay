import React from 'react';
import { CircleDollarSign, Coins } from 'lucide-react';

const partners = [
  {
    name: 'Binance',
    icon: CircleDollarSign,
    className: 'text-yellow-400',
  },
  {
    name: 'BNB Chain',
    icon: Coins,
    className: 'text-yellow-500',
  },
  {
    name: 'Tether',
    icon: CircleDollarSign,
    className: 'text-green-400',
  },
  {
    name: 'Venus',
    icon: Coins,
    className: 'text-blue-400',
  },
  {
    name: 'Curve',
    icon: CircleDollarSign,
    className: 'text-red-400',
  },
];

const Partners = () => {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-12">
            Powered by Industry Leaders
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-lg transform transition-all duration-300 hover:scale-105"
            >
              <partner.icon className={`w-12 h-12 ${partner.className}`} />
              <span className="mt-4 text-gray-300 font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;