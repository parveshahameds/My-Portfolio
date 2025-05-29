
import { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "AI-Powered Music Generator",
      category: "AI",
      description: "A machine learning model that generates music based on user preferences and mood analysis.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      image: "🎵",
      status: "Completed"
    },
    {
      id: 2,
      title: "Smart Home IoT System",
      category: "Electronics",
      description: "Arduino-based home automation system with mobile app control and voice commands.",
      technologies: ["Arduino", "C++", "Firebase", "React Native"],
      image: "🏠",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Film Analysis Dashboard",
      category: "Software",
      description: "Web application for analyzing film techniques, color palettes, and narrative structures.",
      technologies: ["JavaScript", "React", "D3.js", "Node.js"],
      image: "🎬",
      status: "Completed"
    },
    {
      id: 4,
      title: "Electronic Music Visualizer",
      category: "Creative",
      description: "Real-time audio visualization tool that creates dynamic graphics synced to music.",
      technologies: ["JavaScript", "WebGL", "Web Audio API"],
      image: "🎧",
      status: "Completed"
    },
    {
      id: 5,
      title: "PCB Design Portfolio",
      category: "Electronics",
      description: "Collection of custom PCB designs for various embedded systems and IoT projects.",
      technologies: ["KiCad", "Embedded C", "Arduino"],
      image: "⚡",
      status: "Ongoing"
    },
    {
      id: 6,
      title: "Code Learning Platform",
      category: "Software",
      description: "Interactive platform for learning programming with gamified challenges and progress tracking.",
      technologies: ["React", "Python", "PostgreSQL", "Docker"],
      image: "💻",
      status: "In Progress"
    }
  ];

  const categories = ["All", "AI", "Electronics", "Software", "Creative"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "text-[#C9F31D]";
      case "In Progress": return "text-yellow-500";
      case "Ongoing": return "text-blue-500";
      default: return "text-gray-500";
    }
  };

  return (
    <div className="relative z-10 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          My <span className="text-[#C9F31D]">Projects</span>
        </h1>
        <p className="text-gray-400 text-center mb-12 text-lg">
          A showcase of my work across different domains
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-[#C9F31D] text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-[#C9F31D] transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{project.image}</span>
                  <span className={`text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#C9F31D] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-[#C9F31D] text-xs rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2 border border-[#C9F31D] text-[#C9F31D] rounded hover:bg-[#C9F31D] hover:text-black transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            More exciting projects coming soon!
          </p>
          <a 
            href="https://github.com/yourusername" 
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-[#C9F31D] hover:text-black transition-colors duration-300"
          >
            <span className="mr-2">🔗</span>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
