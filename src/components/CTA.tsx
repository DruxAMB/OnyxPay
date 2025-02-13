import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-gray-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Start Your Yield-Powered Journey Today!
        </h2>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          Join thousands of users already earning passive yield on their subscription payments.
        </p>
        <div className="mt-10">
          <a
            href="/dapp"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Launch Dapp
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;