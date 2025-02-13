import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'SaaS Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'OnyxPay has transformed how we handle subscription payments. The passive yield generation is a game-changer.',
  },
  {
    name: 'Michael Chen',
    role: 'DeFi Enthusiast',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The combination of traditional subscriptions with DeFi yield is brilliant. The interface is intuitive and the returns are great.',
  },
  {
    name: 'Emma Davis',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: `We've seen a significant increase in our subscription retention since implementing OnyxPay. Our customers love earning yield.`,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            See what our users have to say about OnyxPay
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;