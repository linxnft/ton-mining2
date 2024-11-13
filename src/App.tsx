import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { GameProvider } from './context/GameContext';
import Navigation from './components/Navigation';
import Mining from './pages/Mining';
import Boosts from './pages/Boosts';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';

// В продакшене замените на актуальный URL вашего сайта
const manifestUrl = '/tonconnect-manifest.json';

function App() {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <BrowserRouter>
        <GameProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div className="max-w-md mx-auto px-4 py-6">
              <Routes>
                <Route path="/" element={<Mining />} />
                <Route path="/boosts" element={<Boosts />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
              </Routes>
            </div>
            <Navigation />
          </div>
        </GameProvider>
      </BrowserRouter>
    </TonConnectUIProvider>
  );
}

export default App;