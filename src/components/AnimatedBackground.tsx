
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [icons, setIcons] = useState<Array<{ id: number; x: number; y: number; speed: number; symbol: string }>>([]);

  const techSymbols = [
    "⚡", "🤖", "🎵", "🎬", "💻", "🔧", "📱", "🎯", 
    "🚀", "⚙️", "🎹", "📡", "🔬", "💡", "🎨", "🎪",
    "🔊", "📺", "🎥", "🎮", "🔌", "📊", "🎭", "🎪"
  ];

  useEffect(() => {
    const generateIcons = () => {
      const newIcons = [];
      for (let i = 0; i < 30; i++) {
        newIcons.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          speed: 0.2 + Math.random() * 0.8,
          symbol: techSymbols[Math.floor(Math.random() * techSymbols.length)]
        });
      }
      setIcons(newIcons);
    };

    generateIcons();
    window.addEventListener('resize', generateIcons);
    return () => window.removeEventListener('resize', generateIcons);
  }, []);

  useEffect(() => {
    const animateIcons = () => {
      setIcons(prevIcons => 
        prevIcons.map(icon => ({
          ...icon,
          y: icon.y - icon.speed,
          // Reset position when icon moves off screen
          ...(icon.y < -50 && {
            y: window.innerHeight + 50,
            x: Math.random() * window.innerWidth
          })
        }))
      );
    };

    const interval = setInterval(animateIcons, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {icons.map(icon => (
        <div
          key={icon.id}
          className="absolute text-2xl opacity-10 transition-opacity duration-1000"
          style={{
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            transform: 'translateZ(0)' // Hardware acceleration
          }}
        >
          {icon.symbol}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
