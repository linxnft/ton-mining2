import React from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';

interface PaymentButtonProps {
  onSuccess: () => void;
}

export default function PaymentButton({ onSuccess }: PaymentButtonProps) {
  const [tonConnectUI] = useTonConnectUI();

  const handlePayment = async () => {
    if (!tonConnectUI.connected) {
      alert('Please connect your wallet first');
      return;
    }

    try {
      // Замените на ваш адрес кошелька
      const receiverAddress = process.env.VITE_TON_RECEIVER_ADDRESS || 'EQD4FPq-PRDieyQKkizFTRtSDyucUIqrj0v_zXJmqaDp6_0t';
      
      await tonConnectUI.sendTransaction({
        messages: [
          {
            address: receiverAddress,
            amount: '20000000', // 0.02 TON в нанотонах
          },
        ],
        validUntil: Date.now() + 5 * 60 * 1000, // 5 минут
      });

      onSuccess();
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={!tonConnectUI.connected}
      className={`
        w-full py-4 rounded-xl font-bold text-lg
        ${!tonConnectUI.connected 
          ? 'bg-gray-500 cursor-not-allowed' 
          : 'bg-[#0098EA] hover:bg-[#0098EA]/90'}
        transition-colors duration-200
      `}
    >
      Pay 0.02 TON to Start Mining
    </button>
  );
}