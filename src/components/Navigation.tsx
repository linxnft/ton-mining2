import React from 'react';
import { NavLink } from 'react-router-dom';
import { Pickaxe, Rocket, User, Trophy } from 'lucide-react';

export default function Navigation() {
  const navItems = [
    { to: '/', icon: Pickaxe, label: 'Mine' },
    { to: '/boosts', icon: Rocket, label: 'Boosts' },
    { to: '/profile', icon: User, label: 'Profile' },
    { to: '/leaderboard', icon: Trophy, label: 'Leaders' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-md mx-auto px-4 py-2">
        <div className="flex justify-around">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `
                flex flex-col items-center p-2 rounded-lg
                ${isActive ? 'text-[#baff00]' : 'text-white/60'}
                transition-colors duration-200
              `}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}