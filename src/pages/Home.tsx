
import { useEffect, useState } from "react";

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  const introTexts = [
    "Electronics Enthusiast 🔌",
    "AI Explorer 🤖", 
    "Software Developer 💻",
    "Music Producer 🎵",
    "Film Lover 🎬"
  ];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typeWriter = () => {
      const current = introTexts[textIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % introTexts.length;
          setTimeout(typeWriter, 500);
          return;
        }
      } else {
        setCurrentText(current.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(typeWriter, pauseTime);
          return;
        }
      }
      
      setTimeout(typeWriter, isDeleting ? deleteSpeed : typeSpeed);
    };

    typeWriter();
  }, []);

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#C9F31D] bg-clip-text text-transparent">
            Hi, I'm [Your Name]
          </h1>
          
          <div className="text-xl md:text-2xl h-8 mb-8">
            <span className="text-[#C9F31D]">{currentText}</span>
            <span className="animate-pulse text-[#C9F31D]">|</span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          A passionate creator bridging the worlds of technology, creativity, and innovation. 
          From building electronic circuits to crafting digital experiences, 
          I love exploring the intersection of art and engineering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/projects"
            className="px-8 py-3 bg-[#C9F31D] text-black font-semibold rounded-lg hover:bg-white transition-colors duration-300"
          >
            View My Work
          </a>
          <a 
            href="/about"
            className="px-8 py-3 border-2 border-[#C9F31D] text-[#C9F31D] font-semibold rounded-lg hover:bg-[#C9F31D] hover:text-black transition-colors duration-300"
          >
            Learn About Me
          </a>
        </div>

        <div className="mt-16 flex justify-center space-x-8 text-4xl">
          <span className="hover:text-[#C9F31D] transition-colors cursor-pointer">⚡</span>
          <span className="hover:text-[#C9F31D] transition-colors cursor-pointer">🤖</span>
          <span className="hover:text-[#C9F31D] transition-colors cursor-pointer">🎵</span>
          <span className="hover:text-[#C9F31D] transition-colors cursor-pointer">🎬</span>
          <span className="hover:text-[#C9F31D] transition-colors cursor-pointer">💻</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
