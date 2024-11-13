import React from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { Boost } from '../types/game';
import { Sparkles } from 'lucide-react';

const AVAILABLE_BOOSTS: Boost[] = [
  { type: 'Super', multiplier: 2, cost: 200, duration: 60 },
  { type: 'Mega', multiplier: 4, cost: 400, duration: 60 },
  { type: 'Hyper', multiplier: 8, cost: 800, duration: 60 },
];

export default function Boosts() {
  const { state, activateBoost } = useGame();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Power Boosts</h1>
        <div className="px-4 py-2 rounded-lg bg-[#baff00]/10 text-[#baff00] font-medium">
          {state.stars} $STARS
        </div>
      </div>

      <div className="grid gap-4">
        {AVAILABLE_BOOSTS.map((boost) => (
          <motion.button
            key={boost.type}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => activateBoost(boost)}
            disabled={state.stars < boost.cost || state.activeBoost !== null}
            className={`
              w-full p-6 glass-card
              ${state.stars >= boost.cost && !state.activeBoost
                ? 'opacity-100 hover:border-[#baff00]/50'
                : 'opacity-50 cursor-not-allowed'
              }
            `}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-[#baff00]" />
                <span className="text-xl font-bold">{boost.type} Boost</span>
              </div>
              <span className="text-lg font-medium">{boost.cost} $STARS</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Multiplier</span>
                <span className="font-medium">{boost.multiplier}x</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Duration</span>
                <span className="font-medium">{boost.duration}s</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}