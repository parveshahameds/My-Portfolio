
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C", level: 95, category: "systems" },
        { name: "Embedded C", level: 90, category: "systems" },
        { name: "Python", level: 85, category: "ai" },
        { name: "JavaScript", level: 75, category: "web" },
        { name: "C++", level: 70, category: "systems" },
        { name: "HTML/CSS", level: 90, category: "web" },
        { name: "Java", level: 40, category: "enterprise" }
      ]
    },
    {
      title: "Creative & Design",
      icon: "🎨",
      skills: [
        { name: "UI/UX Design", level: 88, category: "design" },
        { name: "Graphic Design", level: 85, category: "design" },
        { name: "Video Editing", level: 75, category: "media" },
        { name: "Music Production", level: 70, category: "media" }
      ]
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      skills: [
        { name: "VS Code", level: 95, category: "dev" },
        { name: "Git/GitHub", level: 85, category: "dev" },
        { name: "Firebase", level: 80, category: "cloud" },
        { name: "Arduino IDE", level: 90, category: "embedded" },
        { name: "Android Studio", level: 75, category: "mobile" }
      ]
    },
    {
      title: "Design & Media Tools",
      icon: "🎭",
      skills: [
        { name: "Figma", level: 90, category: "design" },
        { name: "Adobe Illustrator", level: 75, category: "design" },
        { name: "DaVinci Resolve", level: 70, category: "media" },
        { name: "FL Studio", level: 65, category: "media" },
        { name: "KiCad", level: 85, category: "hardware" }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      systems: "from-red-500 to-pink-500",
      web: "from-blue-500 to-cyan-500", 
      ai: "from-purple-500 to-indigo-500",
      design: "from-green-500 to-emerald-500",
      media: "from-orange-500 to-yellow-500",
      dev: "from-gray-500 to-slate-500",
      cloud: "from-teal-500 to-cyan-500",
      embedded: "from-red-600 to-orange-500",
      mobile: "from-violet-500 to-purple-500",
      hardware: "from-amber-500 to-orange-500",
      enterprise: "from-blue-600 to-indigo-600"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="relative z-10 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-[#C9F31D] to-white bg-clip-text text-transparent">
            SKILLS
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to create amazing experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-[#C9F31D]/30 transition-all duration-500 hover:scale-[1.02]"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className="text-4xl mr-4 p-3 bg-gradient-to-br from-[#C9F31D]/20 to-white/10 rounded-2xl backdrop-blur-sm">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-[#C9F31D] transition-colors">
                  {category.title}
                </h2>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium group-hover/skill:text-[#C9F31D] transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9F31D]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#C9F31D]/10 to-white/5 rounded-2xl backdrop-blur-sm border border-[#C9F31D]/20">
            <span className="text-2xl animate-pulse">🚀</span>
            <p className="text-[#C9F31D] font-semibold">
              Always learning, always growing
            </p>
            <span className="text-2xl animate-pulse">✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
