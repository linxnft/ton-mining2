import React from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { Award, Star, Zap } from 'lucide-react';

export default function Profile() {
  const { state } = useGame();
  const nextLevelXP = state.level * 1000;
  const currentLevelProgress = ((state.experience % 1000) / 1000) * 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Profile</h1>
        <div className="px-4 py-2 rounded-lg bg-[#baff00]/10 text-[#baff00] font-medium">
          Level {state.level}
        </div>
      </div>

      <div className="glass-card p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-[#baff00]/20 flex items-center justify-center">
            <Award className="w-8 h-8 text-[#baff00]" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Crypto Miner</h2>
            <p className="text-sm opacity-70">Joined 1970</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card p-4">
            <Star className="w-5 h-5 text-[#baff00] mb-2" />
            <div className="text-2xl font-bold">{state.stars}</div>
            <div className="text-sm opacity-70">$STARS Earned</div>
          </div>
          <div className="glass-card p-4">
            <Zap className="w-5 h-5 text-[#baff00] mb-2" />
            <div className="text-2xl font-bold">{state.hashRate}</div>
            <div className="text-sm opacity-70">Hash Rate (H/s)</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Level Progress</span>
            <span>{Math.floor(currentLevelProgress)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <motion.div
              className="bg-[#baff00] h-full rounded-full"
              style={{ width: `${currentLevelProgress}%` }}
            />
          </div>
          <div className="text-xs opacity-70 text-right">
            {state.experience % 1000} / {nextLevelXP} XP
          </div>
        </div>
      </div>
    </motion.div>
  );
}