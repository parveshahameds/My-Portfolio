import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  type Project = {
    id: number;
    title: string;
    category: string;
    description: string;
    tech: string[];
    status: string;
    viewLink?: string;
    githubLink?: string;
  };
  const projects = [
    {
      id: 5,
      title: "Touch Verify Kiosk",
      category: "Arduino",
      description: "A fingerprint based voting system with python authentication and arduino fragement.",
      tech: ["Arduino", "Python", "C++"],
      status: "Active",
      githubLink: "https://github.com/parveshahameds/TouchVerifyKiosk/"
    },
    {
      id: 1,
      title: "Clustify",
      category: "Customer Segmentation",
      description: "Clustify is an AI-powered tool that segments customers into actionable clusters using behavioral and transactional data",
      tech: ["Python", "Flask", "Vercel", "Google Colab"],
      status: "Active",
      viewLink: "https://clustify-tbhr.onrender.com",
      githubLink: "https://github.com/parveshahameds/clustify"
    },
    {
      id: 2,
      title: "Reframe",
      category: "Computer Vision",
      description: "Computer vision system analyzing cinematography techniques and narrative structure.",
      tech: ["Python", "OpenCV", "TensorFlow", "React"],
      status: "Beta",
      viewLink: "https://reframeai.vercel.app",
      githubLink: "https://github.com/parveshahameds/reframeai"
    },
    {
      id: 3,
      title: "Neusicgen",
      category: "AI/ML",
      description: "Deep learning model for composing original music using transformer architecture and MIDI processing.",
      tech: ["Python", "PyTorch", "MIDI", "React"],
      status: "Beta",
      viewLink: "https://neusicgen.vercel.app",
      githubLink: "https://github.com/parveshahameds/neusicgen"
    },
    {
      id:6,
      title: "Ck Milk",
      category: "Android App",
      description: "An Android app for managing milk delivery, tracking orders, and customer interactions.",
      tech: ["Java", "Android Studio", "Firebase","Play Store Console"],
      status: "Active",
      viewLink: "https://play.google.com/store/apps/details?id=com.technoficials.ckmilk"
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
                  <div className="flex md:justify-end gap-4">
                    {project.viewLink && (
                      <a
                        href={project.viewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-gray-700 text-gray-300 px-4 py-2 rounded hover:bg-[#C9F31D]/10 transition"
                      >
                        <ExternalLink size={16} />
                        View
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-gray-700 text-gray-300 px-4 py-2 rounded hover:bg-[#C9F31D]/10 transition"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover underline */}
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
