import React, { useCallback } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

export default function ParticleEffect() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="mining-particles"
      init={particlesInit}
      options={{
        particles: {
          color: {
            value: "#baff00",
          },
          move: {
            direction: "top",
            enable: true,
            speed: { min: 1, max: 3 },
            straight: false,
          },
          number: {
            value: 40,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 1,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 pointer-events-none"
    />
  );
}