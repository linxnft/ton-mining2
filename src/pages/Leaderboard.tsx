import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';

const LEADERBOARD_DATA = [
  { id: 1, name: 'CryptoKing', level: 42, stars: 12500 },
  { id: 2, name: 'BlockMaster', level: 38, stars: 10200 },
  { id: 3, name: 'HashQueen', level: 35, stars: 9800 },
  { id: 4, name: 'MineRunner', level: 31, stars: 8500 },
  { id: 5, name: 'ChainBreaker', level: 28, stars: 7200 },
];

export default function Leaderboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <div className="px-4 py-2 rounded-lg bg-[#baff00]/10 text-[#baff00] font-medium">
          Top Miners
        </div>
      </div>

      <div className="space-y-4">
        {LEADERBOARD_DATA.map((player, index) => (
          <motion.div
            key={player.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-4 flex items-center space-x-4"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              {index === 0 ? (
                <Trophy className="w-5 h-5 text-yellow-400" />
              ) : index === 1 ? (
                <Medal className="w-5 h-5 text-gray-300" />
              ) : index === 2 ? (
                <Award className="w-5 h-5 text-yellow-600" />
              ) : (
                <span className="text-lg font-bold">{index + 1}</span>
              )}
            </div>
            
            <div className="flex-1">
              <div className="font-bold">{player.name}</div>
              <div className="text-sm opacity-70">Level {player.level}</div>
            </div>
            
            <div className="text-right">
              <div className="font-bold text-[#baff00]">{player.stars}</div>
              <div className="text-xs opacity-70">$STARS</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}