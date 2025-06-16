import { useEffect, useState } from "react";
import { ArrowRight, Code, Cpu, Music, Film } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ICONS = [Code, Cpu, Music, Film];
const ICON_COUNT = 8; // Fewer icons for less clutter

function getRandomPosition() {
  return {
    top: Math.random() * 90, // 0% to 90%
    left: Math.random() * 96, // 0% to 96% (closer to right edge)
    dx: (Math.random() - 0.5) * 0.2,
    dy: (Math.random() - 0.5) * 0.2,
  };
}

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const [iconStates, setIconStates] = useState(() => {
    // Distribute icons evenly, avoid too many duplicates
    const iconsArr = [];
    for (let i = 0; i < ICON_COUNT; i++) {
      iconsArr.push({
        ...getRandomPosition(),
        Icon: ICONS[i % ICONS.length],
        delay: Math.random(),
      });
    }
    return iconsArr;
  });

  const textArray = [
    "Electronics Engineer",
    "Creative Technologist",
    "AI Developer",
    "ML Engineer",
    "Music Producer",
    "Film Maker",
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let raf: number;
    function animate() {
      setIconStates((prev) =>
        prev.map((icon) => {
          let { top, left, dx, dy } = icon;
          // Move
          top += dy;
          left += dx;
          // Bounce off edges
          if (top < 0 || top > 90) dy = -dy;
          if (left < 0 || left > 96) dx = -dx;
          // Clamp
          top = Math.max(0, Math.min(90, top));
          left = Math.max(0, Math.min(96, left));
          return { ...icon, top, left, dx, dy };
        })
      );
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen h-screen overflow-hidden flex items-center justify-center relative z-10">
      <div className="max-w-6xl mx-auto px-1 sm:px-2 text-center pt-0 flex flex-col justify-center h-full">
        {/* Floating icons as animated dots */}
        <div className="absolute inset-0 pointer-events-none w-full h-full">
          {iconStates.map(({ Icon, top, left, delay }, index) => (
            <Icon
              key={index}
              className="absolute text-[#C9F31D] opacity-10 w-4 h-4 transition-transform duration-300"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                transitionDelay: `${delay}s`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="space-y-4 flex flex-col justify-center items-center h-full -mt-20">
          <div className="inline-block px-3 py-1 border border-[#C9F31D]/30 rounded-full text-[#C9F31D] text-sm font-mono mb-3">
            Available for opportunities
          </div>

          <h1 className="text-6xl md:text-7xl font-thin tracking-tight text-white mb-2">
            Hello , This is Parvesh Ahamed
          </h1>

          <div className="h-12 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              I'm a{" "}
              <span className="text-[#C9F31D] font-medium transition-all duration-500">
                {textArray[currentText]}
              </span>
            </p>
          </div>

          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Bridging the gap between technology and creativity through
            innovative solutions in AI, electronics, and digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group px-8 py-4 bg-[#C9F31D] text-black font-medium rounded-none hover:bg-[#C9F31D]/90 transition-all duration-300 flex items-center justify-center"
              onClick={() => navigate("/projects")}
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              className="px-8 py-4 border border-gray-800 text-white font-medium rounded-none hover:border-[#C9F31D]/50 hover:text-[#C9F31D] transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
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
