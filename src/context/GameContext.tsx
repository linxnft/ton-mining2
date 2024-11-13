import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { MiningState, Boost } from '../types/game';
import { gameReducer } from '../reducers/gameReducer';

interface GameContextType {
  state: MiningState;
  startMining: () => void;
  stopMining: () => void;
  activateBoost: (boost: Boost) => void;
}

const initialState: MiningState = {
  hashRate: 100,
  difficulty: 300,
  stars: 0,
  experience: 0,
  level: 1,
  activeBoost: null,
  hasPaid: false,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [isMining, setIsMining] = useState(false);

  useEffect(() => {
    let miningInterval: number;

    if (isMining && state.hasPaid) {
      miningInterval = setInterval(() => {
        const probability = state.hashRate / (state.difficulty * 10);
        if (Math.random() < probability) {
          const baseReward = 100;
          const multiplier = state.activeBoost?.multiplier || 1;
          
          dispatch({
            type: 'BLOCK_FOUND',
            payload: {
              stars: baseReward * multiplier,
              experience: 50,
            },
          });
        }
      }, 1000);
    }

    return () => clearInterval(miningInterval);
  }, [isMining, state.hashRate, state.difficulty, state.activeBoost, state.hasPaid]);

  const startMining = () => {
    dispatch({ type: 'PAYMENT_RECEIVED' });
    setIsMining(true);
  };
  
  const stopMining = () => setIsMining(false);

  const activateBoost = (boost: Boost) => {
    if (state.stars >= boost.cost) {
      dispatch({ type: 'ACTIVATE_BOOST', payload: boost });
      setTimeout(() => {
        dispatch({ type: 'CLEAR_BOOST' });
      }, boost.duration * 1000);
    }
  };

  return (
    <GameContext.Provider value={{ state, startMining, stopMining, activateBoost }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};