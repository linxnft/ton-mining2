import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import { Wallet } from 'lucide-react';

export default function WalletConnection() {
  return (
    <TonConnectButton className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#0098EA] hover:bg-[#0098EA]/90 transition-colors duration-200" />
  );
}