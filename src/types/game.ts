export interface MiningState {
  hashRate: number;
  difficulty: number;
  stars: number;
  experience: number;
  level: number;
  activeBoost: Boost | null;
  hasPaid: boolean;
}

export interface Boost {
  type: 'Super' | 'Mega' | 'Hyper';
  multiplier: number;
  cost: number;
  duration: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  reward: number;
  completed: boolean;
  progress: number;
  target: number;
}