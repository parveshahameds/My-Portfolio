import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  type Project = {
    id: number;
    title: string;
    categories: string[]; // Changed from category: string
    description: string;
    tech: string[];
    status: string;
    viewLink?: string;
    githubLink?: string;
    apkLink?: string;
  };

  const projects = [
    {
      id: 5,
      title: "Touch Verify Kiosk",
      categories: ["Arduino"], // Example
      description: "A fingerprint based voting system with python authentication and arduino fragement.",
      tech: ["Arduino", "Python", "C++"],
      status: "Active",
      githubLink: "https://github.com/parveshahameds/TouchVerifyKiosk/"
    },
    {
      id: 1,
      title: "Clustify",
      categories: ["Website", "AI/ML"], // Example of multiple categories
      description: "Clustify is an AI-powered tool that segments customers into actionable clusters using behavioral and transactional data",
      tech: ["Python", "Flask", "Vercel", "Google Colab"],
      status: "Active",
      viewLink: "https://clustify-tbhr.onrender.com",
      githubLink: "https://github.com/parveshahameds/clustify"
    },
    {
      id: 2,
      title: "Reframe AI",
      categories: ["Website", "AI/ML"], // Example of multiple categories
      description: "Computer vision system analyzing cinematography techniques and narrative structure.",
      tech: ["Python", "OpenCV", "TensorFlow", "React"],
      status: "Beta",
      viewLink: "https://reframeai.vercel.app",
      githubLink: "https://github.com/parveshahameds/reframeai"
    },
    {
      id: 3,
      title: "Neusicgen",
      categories: ["AI/ML", "Website"], // Example of multiple categories
      description: "Deep learning model for composing original music using transformer architecture and MIDI processing.",
      tech: ["Python", "PyTorch", "MIDI", "React"],
      status: "Beta",
      viewLink: "https://neusicgen.vercel.app",
      githubLink: "https://github.com/parveshahameds/neusicgen"
    },
    {
      id: 6,
      title: "Ck Milk",
      categories: ["Android App"], // Example
      description: "An Android app for managing milk delivery, tracking orders, and customer interactions.",
      tech: ["Java", "Android Studio", "Firebase","Play Store Console"],
      status: "Active",
      viewLink: "https://play.google.com/store/apps/details?id=com.technoficials.ckmilk"
    },
    {
      id: 7,
      title: "Manifester",
      categories: ["Android App"], // Example of multiple categories
      description: "A React android app to manifest dreams which gives the hope of it being existing.",
      tech: ["Visual Studio Code", "React", "Expo"],
      status: "Beta",
      apkLink: "public/Manifester.apk" // Use public folder path
    }
  ];

  // Define filter options and mapping
  const filterOptions = [
    { label: "All", value: "All" },
    { label: "Website", value: "Website" },
    { label: "App", value: "App" },
    { label: "Others", value: "Others" }
  ];

  // Map project categories to filter values (stricter matching)
  const getProjectFilterType = (project: Project) => {
    const cat = project.categories.join(",").trim().toLowerCase();
    if (cat.includes("Android App") || cat.includes("app") || cat.includes("mobile app")) return "App";
    if (cat.includes("website") || cat.includes("web") || cat.includes("web app")) return "Website";
    return "Other";
  };

  // Update filter logic for multiple categories
  const filteredProjects = filter === "All"
    ? projects
    : filter === "Others"
      ? projects.filter(project =>
          !project.categories.some(
            c =>
              c.toLowerCase().includes("app") ||
              c.toLowerCase().includes("website") ||
              c.toLowerCase().includes("web")
          )
        )
      : projects.filter(project =>
          project.categories.some(
            c =>
              c.toLowerCase() === filter.toLowerCase() ||
              (filter === "App" && c.toLowerCase().includes("app")) ||
              (filter === "Website" && (c.toLowerCase().includes("website") || c.toLowerCase().includes("web")))
          )
        );

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

        {/* Sort/Filter section */}
        <div className="mb-8 flex gap-4">
          {filterOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`px-4 py-2 rounded-full border ${
                filter === opt.value
                  ? "border-[#C9F31D] text-[#C9F31D] bg-[#C9F31D]/10"
                  : "border-gray-700 text-gray-400"
              } font-mono text-sm transition`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col justify-between h-full border border-gray-800 hover:border-[#C9F31D]/30 transition-all duration-500 rounded-lg bg-[#18181b] group shadow-lg"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#C9F31D] font-mono text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {project.categories.join(", ")}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${
                    project.status === 'Active' ? 'bg-green-500' :
                    project.status === 'Beta' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#C9F31D] transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 px-8 pb-6">
                {project.viewLink && (
                  <a
                    href={project.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-700 text-gray-300 px-3 py-1.5 rounded hover:bg-[#C9F31D]/10 transition text-xs"
                  >
                    <ExternalLink size={14} />
                    View
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-700 text-gray-300 px-3 py-1.5 rounded hover:bg-[#C9F31D]/10 transition text-xs"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
                {project.apkLink && (
                  <a
                    href={project.apkLink.startsWith("/") ? project.apkLink : "/" + project.apkLink.replace(/^public\//, "")}
                    download
                    className="flex items-center gap-2 border border-gray-700 text-gray-300 px-3 py-1.5 rounded hover:bg-[#C9F31D]/10 transition text-xs"
                  >
                    <Github size={14} />
                    Download APK
                  </a>
                )}
              </div>
              <div className={`h-1 bg-[#C9F31D] transition-all duration-500 ${
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
