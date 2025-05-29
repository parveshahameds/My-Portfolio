
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "C/C++", level: 95 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Creative",
      skills: [
        { name: "UI/UX Design", level: 88 },
        { name: "Video Editing", level: 82 },
        { name: "Music Production", level: 75 },
        { name: "Graphic Design", level: 80 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 90 },
        { name: "KiCad", level: 85 },
        { name: "FL Studio", level: 70 }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block border border-[#C9F31D]/30 rounded-full px-4 py-2 text-[#C9F31D] text-sm font-mono mb-8">
            Skills & Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-thin text-white">
            What I Do
          </h1>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-8">
              <h2 className="text-2xl font-light text-[#C9F31D] mb-8">
                {category.title}
              </h2>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-px bg-gray-800 overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-[#C9F31D] transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 text-gray-400">
            <div className="w-12 h-px bg-gray-800" />
            <span className="text-sm font-mono">Always Learning</span>
            <div className="w-12 h-px bg-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
