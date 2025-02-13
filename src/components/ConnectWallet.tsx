import React from 'react';
import { useWalletConnection } from '../lib/hooks/useWalletConnection';
import Button from '../dapp/components/Button';

const ConnectWallet = () => {
  const { isConnected, displayAddress, openConnectModal } = useWalletConnection();

  return (
    <Button onClick={openConnectModal}>
      {isConnected ? displayAddress : 'Connect Wallet'}
    </Button>
  );
};

export default ConnectWallet;