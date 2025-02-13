import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, CreditCard, Wallet, HelpCircle, Menu, X } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const navigation = [
  { name: 'Dashboard', href: '/dapp/dashboard', icon: LayoutDashboard },
  { name: 'Subscriptions', href: '/dapp/subscriptions', icon: CreditCard },
  { name: 'Wallet', href: '/dapp/wallet', icon: Wallet },
  { name: 'Support', href: '/dapp/support', icon: HelpCircle },
];

const DappNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-500">OnyxPay</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-white bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
            ))}
               <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectButton />
    </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ConnectButton />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-4 text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === item.href
                    ? 'text-white bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
            ))}
                         <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectButton />
    </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DappNavigation;