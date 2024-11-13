import { MiningState, Boost } from '../types/game';

type GameAction = 
  | { type: 'BLOCK_FOUND'; payload: { stars: number; experience: number } }
  | { type: 'ACTIVATE_BOOST'; payload: Boost }
  | { type: 'CLEAR_BOOST' }
  | { type: 'PAYMENT_RECEIVED' };

export function gameReducer(state: MiningState, action: GameAction): MiningState {
  switch (action.type) {
    case 'BLOCK_FOUND':
      const newExperience = state.experience + action.payload.experience;
      const newLevel = Math.floor(newExperience / 1000) + 1;
      
      return {
        ...state,
        stars: state.stars + action.payload.stars,
        experience: newExperience,
        level: newLevel,
        hashRate: Math.min(800, state.hashRate + 1),
      };

    case 'ACTIVATE_BOOST':
      return {
        ...state,
        stars: state.stars - action.payload.cost,
        activeBoost: action.payload,
      };

    case 'CLEAR_BOOST':
      return {
        ...state,
        activeBoost: null,
      };

    case 'PAYMENT_RECEIVED':
      return {
        ...state,
        hasPaid: true,
      };

    default:
      return state;
  }
}