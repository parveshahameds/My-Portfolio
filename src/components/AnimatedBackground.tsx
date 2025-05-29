
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    size: number;
    speed: number; 
    symbol: string;
    opacity: number;
  }>>([]);

  const techSymbols = [
    "⚡", "🤖", "🎵", "🎬", "💻", "🔧", "📱", "🎯", 
    "🚀", "⚙️", "🎹", "📡", "🔬", "💡", "🎨", "🎪",
    "🔊", "📺", "🎥", "🎮", "🔌", "📊", "🎭", "✨",
    "🌟", "⭐", "💫", "🔥", "💎", "🎪"
  ];

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: 0.8 + Math.random() * 1.5,
          speed: 0.3 + Math.random() * 0.7,
          symbol: techSymbols[Math.floor(Math.random() * techSymbols.length)],
          opacity: 0.1 + Math.random() * 0.3
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y - particle.speed,
          // Reset position when particle moves off screen
          ...(particle.y < -50 && {
            y: window.innerHeight + 50,
            x: Math.random() * window.innerWidth,
            symbol: techSymbols[Math.floor(Math.random() * techSymbols.length)]
          })
        }))
      );
    };

    const interval = setInterval(animateParticles, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated mesh gradient */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9F31D]/10 via-transparent to-purple-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#C9F31D]/5 to-transparent" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute transition-opacity duration-1000"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              fontSize: `${particle.size}rem`,
              opacity: particle.opacity,
              transform: 'translateZ(0)',
              filter: 'blur(0.5px)'
            }}
          >
            {particle.symbol}
          </div>
        ))}
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="fixed inset-0 opacity-5" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(201, 243, 29, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 243, 29, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </>
  );
};

export default AnimatedBackground;
