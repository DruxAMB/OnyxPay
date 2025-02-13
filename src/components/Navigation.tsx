import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'What It Does', href: '#what-it-does' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Metrics', href: '#metrics' },
  ];

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-500">OnyxPay</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Launch Dapp
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button 
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Launch Dapp
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;