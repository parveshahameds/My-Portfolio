
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Neural Music Generator",
      category: "AI/ML",
      description: "Deep learning model for composing original music using transformer architecture and MIDI processing.",
      tech: ["Python", "PyTorch", "MIDI", "React"],
      status: "Active"
    },
    {
      id: 2,
      title: "Smart IoT Ecosystem",
      category: "Electronics",
      description: "Complete home automation system with custom PCB design and wireless sensor integration.",
      tech: ["Arduino", "ESP32", "KiCad", "Firebase"],
      status: "Development"
    },
    {
      id: 3,
      title: "Film Analysis AI",
      category: "Computer Vision",
      description: "Computer vision system analyzing cinematography techniques and narrative structure.",
      tech: ["Python", "OpenCV", "TensorFlow", "React"],
      status: "Beta"
    },
    {
      id: 4,
      title: "Audio Visualizer",
      category: "Creative Tech",
      description: "Real-time WebGL-powered visualization engine synced with audio analysis.",
      tech: ["JavaScript", "WebGL", "Web Audio API", "GLSL"],
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block border border-[#C9F31D]/30 rounded-full px-4 py-2 text-[#C9F31D] text-sm font-mono mb-8">
            Featured Work
          </div>
          <h1 className="text-5xl md:text-7xl font-thin text-white">
            Projects
          </h1>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group border border-gray-800 hover:border-[#C9F31D]/30 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Project info */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[#C9F31D] font-mono text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {project.category}
                      </span>
                      <div className={`w-2 h-2 rounded-full ${
                        project.status === 'Active' ? 'bg-green-500' :
                        project.status === 'Beta' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-[#C9F31D] transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-800 text-white hover:border-[#C9F31D] hover:text-[#C9F31D] transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-800 text-white hover:border-[#C9F31D] hover:text-[#C9F31D] transition-all duration-300">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className={`h-px bg-[#C9F31D] transition-all duration-500 ${
                activeProject === project.id ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
