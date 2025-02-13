import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DappLayout from './dapp/DappLayout';
import DashboardPage from './dapp/pages/DashboardPage';
import SubscriptionsPage from './dapp/pages/SubscriptionsPage';
import WalletPage from './dapp/pages/WalletPage';
import SupportPage from './dapp/pages/SupportPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dapp" element={<DappLayout />}>
          <Route index element={<Navigate to="/dapp/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="support" element={<SupportPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;