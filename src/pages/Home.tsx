
import { useEffect, useState } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Interactive background gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(201, 243, 29, 0.15), transparent 40%)`
        }}
      />
      
      <div className="text-center max-w-6xl relative">
        {/* Main hero section */}
        <div className="mb-12">
          <div className="inline-block mb-8">
            <span className="text-sm font-mono text-[#C9F31D] tracking-wider uppercase">
              Welcome to my digital space
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-gray-200 to-[#C9F31D] bg-clip-text text-transparent leading-tight">
            CREATIVE
            <br />
            <span className="text-5xl md:text-7xl">TECHNOLOGIST</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences at the intersection of 
            <span className="text-[#C9F31D] font-semibold"> technology</span>, 
            <span className="text-[#C9F31D] font-semibold"> creativity</span>, and 
            <span className="text-[#C9F31D] font-semibold"> innovation</span>
          </p>
        </div>

        {/* Skills showcase */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {[
            { label: "Electronics", icon: "⚡" },
            { label: "AI/ML", icon: "🤖" },
            { label: "Development", icon: "💻" },
            { label: "Music", icon: "🎵" },
            { label: "Film", icon: "🎬" }
          ].map((skill, index) => (
            <div 
              key={skill.label}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#C9F31D]/50 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-[#C9F31D] transition-colors">
                {skill.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="/projects"
            className="group relative px-8 py-4 bg-[#C9F31D] text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#C9F31D]/25"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
          
          <a 
            href="/about"
            className="group px-8 py-4 border-2 border-[#C9F31D]/30 text-[#C9F31D] font-bold rounded-full backdrop-blur-sm hover:border-[#C9F31D] hover:bg-[#C9F31D]/10 transition-all duration-300"
          >
            About Me
          </a>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#C9F31D] rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-32 right-20 w-3 h-3 bg-white/20 rounded-full animate-bounce" />
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-[#C9F31D] rounded-full animate-ping" />
      </div>
    </div>
  );
};

export default Home;
