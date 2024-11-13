import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Trophy } from 'lucide-react';
import { useGame } from '../context/GameContext';
import ParticleEffect from './ParticleEffect';

export default function MiningCard() {
  const { state, startMining, stopMining } = useGame();
  const [isActive, setIsActive] = useState(false);

  const toggleMining = () => {
    if (isActive) {
      stopMining();
    } else {
      startMining();
    }
    setIsActive(!isActive);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl p-6 border border-white/20"
    >
      {isActive && <ParticleEffect />}
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Cpu className="w-6 h-6 text-[#baff00]" />
          <span className="text-xl font-bold">{state.hashRate} H/s</span>
        </div>
        <div className="flex items-center space-x-2">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <span className="text-xl font-bold">Level {state.level}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm opacity-70">Difficulty</span>
          <span className="font-medium">{state.difficulty}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm opacity-70">$STARS Balance</span>
          <span className="font-medium">{state.stars}</span>
        </div>

        <div className="w-full bg-white/10 rounded-full h-2">
          <motion.div
            className="bg-[#baff00] h-full rounded-full"
            style={{
              width: `${(state.experience % 1000) / 10}%`
            }}
          />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={toggleMining}
        className={`
          mt-6 w-full py-4 rounded-xl font-bold text-lg
          transition-colors duration-200
          ${isActive 
            ? 'bg-red-500/20 text-red-500 border-2 border-red-500/50' 
            : 'bg-[#baff00] text-black'}
        `}
      >
        <div className="flex items-center justify-center space-x-2">
          <Zap className={`w-5 h-5 ${isActive ? 'text-red-500' : 'text-black'}`} />
          <span>{isActive ? 'Stop Mining' : 'Start Mining'}</span>
        </div>
      </motion.button>
    </motion.div>
  );
}