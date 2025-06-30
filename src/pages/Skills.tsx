import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  GitBranch, 
  Coffee,
  Palette,
  Monitor,
  Music,
  Video,
  Figma,
  Smartphone,
  Server,
  Cpu,
  CircuitBoard,
  Wrench,
  FileCode,
  Cloud,
  Zap
} from 'lucide-react';

interface SkillItem {
  icon: React.ReactNode;
  name: string;
  category: 'tech' | 'tool';
}

const SkillsPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.fillStyle = `rgba(132, 204, 22, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const techStack: SkillItem[] = [
   
    { icon: <CircuitBoard className="w-8 h-8" />, name: 'PCB Designing', category: 'tech' },
     { icon: <Code className="w-8 h-8" />, name: 'C', category: 'tech' },
    { icon: <Code className="w-8 h-8" />, name: 'C++', category: 'tech' },
    { icon: <FileCode className="w-8 h-8" />, name: 'Python', category: 'tech' },
    { icon: <Globe className="w-8 h-8" />, name: 'HTML', category: 'tech' },
    { icon: <FileCode className="w-8 h-8" />, name: 'JavaScript', category: 'tech' },
    { icon: <Palette className="w-8 h-8" />, name: 'CSS', category: 'tech' },
    { icon: <CircuitBoard className="w-8 h-8" />, name: 'Embedded C', category: 'tech' },
    { icon: <Database className="w-8 h-8" />, name: 'Firebase', category: 'tech' },
    { icon: <GitBranch className="w-8 h-8" />, name: 'GitHub', category: 'tech' },
    { icon: <Monitor className="w-8 h-8" />, name: 'UI/UX Designing', category: 'tech' },
    { icon: <Palette className="w-8 h-8" />, name: 'Graphic Designing', category: 'tech' },
    { icon: <Video className="w-8 h-8" />, name: 'Video Editing', category: 'tech' },
    { icon: <Music className="w-8 h-8" />, name: 'Music Production', category: 'tech' },
    { icon: <Database className="w-8 h-8" />, name: 'Data Analyst', category: 'tech' }
  ];

  const toolStack: SkillItem[] = [
    { icon: <CircuitBoard className="w-8 h-8" />, name: 'KiCad', category: 'tool' },
    { icon: <Cpu className="w-8 h-8" />, name: 'TinkerCAD', category: 'tool' },
    { icon: <Zap className="w-8 h-8" />, name: 'Wokwi', category: 'tool' },
    { icon: <FileCode className="w-8 h-8" />, name: 'Visual Studio Code', category: 'tool' },
    { icon: <Smartphone className="w-8 h-8" />, name: 'Android Studio', category: 'tool' },
    { icon: <Cloud className="w-8 h-8" />, name: 'Vercel', category: 'tool' },
    { icon: <Server className="w-8 h-8" />, name: 'Render', category: 'tool' },
    { icon: <Database className="w-8 h-8" />, name: 'Google Colab', category: 'tool' },
    { icon: <CircuitBoard className="w-8 h-8" />, name: 'Arduino', category: 'tool' },
    { icon: <Video className="w-8 h-8" />, name: 'DaVinci Resolve', category: 'tool' },
    { icon: <Music className="w-8 h-8" />, name: 'FL Studio', category: 'tool' },
    { icon: <Palette className="w-8 h-8" />, name: 'Canva', category: 'tool' },
    { icon: <Figma className="w-8 h-8" />, name: 'Figma', category: 'tool' },
    { icon: <Palette className="w-8 h-8" />, name: 'Adobe Illustrator', category: 'tool' },
    { icon: <Monitor className="w-8 h-8" />, name: 'Microsoft Power BI', category: 'tool' }
  ];

  const SkillCard: React.FC<{ skill: SkillItem }> = ({ skill }) => (
    <div className="w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] group bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-gray-700/80 border border-gray-700/50 shadow-lg hover:shadow-xl">
      <div className="text-[#C9F31D] mb-2 group-hover:text-lime-300 transition-colors duration-200">
        {skill.icon}
      </div>
      <p className="text-xs font-medium text-gray-200 text-center leading-tight group-hover:text-white transition-colors duration-200">
        {skill.name}
      </p>
    </div>
  );

  return (
    
      
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            
            <div className="inline-block border border-[#C9F31D]/30 rounded-full px-4 py-2 text-[#C9F31D] text-sm font-mono mb-8">
            Skills & Technologies
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="text-[#C9F31D]">Skills</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
            </p>
          </div>

          {/* Tech Stack Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                <span className="text-[#C9F31D]">Tech</span> Stack
              </h2>
              <div className="w-24 h-1 bg-[#C9F31D] mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {techStack.map((skill, index) => (
                <SkillCard key={`tech-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tool Stack Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                <span className="text-[#C9F31D]">Tool</span> Stack
              </h2>
              <div className="w-24 h-1 bg-[#C9F31D] mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {toolStack.map((skill, index) => (
                <SkillCard key={`tool-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-20">
            <p className="text-gray-400 text-lg">
              Always learning and exploring new technologies to stay ahead of the curve
            </p>
          </div>
        </div>
    </div>
  );
};

export default SkillsPage;