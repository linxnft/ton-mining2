import React from 'react';
import { motion } from 'framer-motion';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useGame } from '../context/GameContext';
import MiningCard from '../components/MiningCard';
import HashRateChart from '../components/HashRateChart';
import WalletConnection from '../components/WalletConnection';
import PaymentButton from '../components/PaymentButton';

export default function Mining() {
  const [tonConnectUI] = useTonConnectUI();
  const { state, startMining } = useGame();

  const handlePaymentSuccess = () => {
    startMining();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mining Station</h1>
        <WalletConnection />
      </div>

      {!state.hasPaid && tonConnectUI.connected && (
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold mb-4">Access Required</h2>
          <p className="text-sm opacity-70 mb-6">
            To start mining, you need to pay a one-time fee of 0.02 TON.
          </p>
          <PaymentButton onSuccess={handlePaymentSuccess} />
        </div>
      )}

      {(state.hasPaid || !tonConnectUI.connected) && (
        <>
          <MiningCard />
          <HashRateChart />
        </>
      )}
    </motion.div>
  );
}