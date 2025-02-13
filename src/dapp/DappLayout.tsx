import React from 'react';
import { Outlet } from 'react-router-dom';
import DappNavigation from './DappNavigation';

const DappLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <DappNavigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DappLayout;