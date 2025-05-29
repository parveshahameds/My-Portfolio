
import { useEffect, useState } from "react";
import { ArrowRight, Code, Cpu, Music, Film } from "lucide-react";

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const textArray = [
    "Creative Technologist",
    "AI Developer", 
    "Electronics Engineer",
    "Music Producer",
    "Film Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const icons = [
    { Icon: Code, delay: 0 },
    { Icon: Cpu, delay: 0.2 },
    { Icon: Music, delay: 0.4 },
    { Icon: Film, delay: 0.6 }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative z-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Floating icons */}
        <div className="absolute inset-0 pointer-events-none">
          {icons.map(({ Icon, delay }, index) => (
            <Icon
              key={index}
              className="absolute text-[#C9F31D] opacity-10 w-8 h-8 animate-pulse"
              style={{
                top: `${20 + index * 15}%`,
                left: `${10 + index * 20}%`,
                animationDelay: `${delay}s`
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 border border-[#C9F31D]/30 rounded-full text-[#C9F31D] text-sm font-mono mb-8">
            Available for opportunities
          </div>

          <h1 className="text-7xl md:text-9xl font-thin tracking-tight text-white mb-4">
            Hello
          </h1>

          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-gray-400 font-light">
              I'm a{" "}
              <span className="text-[#C9F31D] font-medium transition-all duration-500">
                {textArray[currentText]}
              </span>
            </p>
          </div>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
            Bridging the gap between technology and creativity through 
            innovative solutions in AI, electronics, and digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-[#C9F31D] text-black font-medium rounded-none hover:bg-[#C9F31D]/90 transition-all duration-300 flex items-center justify-center">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 border border-gray-800 text-white font-medium rounded-none hover:border-[#C9F31D]/50 hover:text-[#C9F31D] transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-[#C9F31D] to-transparent opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default Home;
