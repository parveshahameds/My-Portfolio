
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Neural Music Generator",
      category: "AI",
      description: "Deep learning model that composes original music based on mood and genre preferences using transformer architecture.",
      tech: ["Python", "PyTorch", "MIDI", "React"],
      gradient: "from-purple-500 via-pink-500 to-red-500",
      status: "Live"
    },
    {
      id: 2,
      title: "Smart IoT Ecosystem", 
      category: "Electronics",
      description: "Complete home automation system with custom PCBs, wireless sensors, and mobile app control.",
      tech: ["Arduino", "ESP32", "KiCad", "Firebase"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      status: "Development"
    },
    {
      id: 3,
      title: "Cinematic AI Analyzer",
      category: "Software",
      description: "Computer vision system that analyzes film techniques, color grading, and narrative structure.",
      tech: ["Python", "OpenCV", "React", "TensorFlow"],
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      status: "Live"
    },
    {
      id: 4,
      title: "Realtime Audio Visualizer",
      category: "Creative",
      description: "WebGL-powered visualization engine that creates immersive graphics synced to audio in real-time.",
      tech: ["JavaScript", "WebGL", "GLSL", "Web Audio API"],
      gradient: "from-green-500 via-emerald-500 to-cyan-500",
      status: "Live"
    },
    {
      id: 5,
      title: "Quantum Circuit Simulator",
      category: "Research",
      description: "Educational platform for designing and simulating quantum circuits with interactive visualization.",
      tech: ["Python", "Qiskit", "React", "Three.js"],
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      status: "Beta"
    },
    {
      id: 6,
      title: "AI Code Mentor",
      category: "Education",
      description: "Intelligent tutoring system that provides personalized coding guidance and real-time feedback.",
      tech: ["Next.js", "OpenAI", "PostgreSQL", "Docker"],
      gradient: "from-rose-500 via-pink-500 to-purple-500",
      status: "Development"
    }
  ];

  const categories = ["All", "AI", "Electronics", "Software", "Creative", "Research", "Education"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="relative z-10 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-[#C9F31D] tracking-wider uppercase mb-4 block">
            Featured Work
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-[#C9F31D] bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of innovative solutions spanning AI, electronics, and creative technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#C9F31D] text-black shadow-lg shadow-[#C9F31D]/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:border-[#C9F31D]/30 transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Status badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-[#C9F31D]/20 text-[#C9F31D] text-xs font-bold rounded-full border border-[#C9F31D]/30">
                    {project.category}
                  </span>
                  <div className={`w-3 h-3 rounded-full ${
                    project.status === 'Live' ? 'bg-green-500' : 
                    project.status === 'Beta' ? 'bg-yellow-500' : 'bg-blue-500'
                  } animate-pulse`} />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#C9F31D] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-lg border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project link */}
                <button className="w-full py-3 bg-white/5 hover:bg-[#C9F31D] hover:text-black text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:border-[#C9F31D]">
                  View Project
                </button>
              </div>

              {/* Hover effect */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-[#C9F31D]/5 animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <span className="text-2xl animate-bounce">🚀</span>
            <p className="text-gray-300">
              More exciting projects in development
            </p>
            <span className="text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
