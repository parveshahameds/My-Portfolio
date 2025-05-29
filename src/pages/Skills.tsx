
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C", level: "Advanced" },
        { name: "Embedded C", level: "Advanced" },
        { name: "C++", level: "Intermediate" },
        { name: "Python", level: "Advanced" },
        { name: "HTML", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "CSS", level: "Advanced" },
        { name: "Firebase", level: "Intermediate" },
        { name: "Java", level: "Beginner" }
      ]
    },
    {
      title: "Creative Skills",
      icon: "🎨",
      skills: [
        { name: "UI/UX Designing", level: "Advanced" },
        { name: "Graphic Designing", level: "Advanced" },
        { name: "Video Editing", level: "Intermediate" },
        { name: "Music Production", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🔧",
      skills: [
        { name: "KiCad", level: "Advanced" },
        { name: "TinkerCAD", level: "Intermediate" },
        { name: "Wokwi", level: "Intermediate" },
        { name: "VS Code", level: "Advanced" },
        { name: "Android Studio", level: "Intermediate" },
        { name: "Vercel", level: "Intermediate" },
        { name: "Render", level: "Intermediate" },
        { name: "Google Colab", level: "Advanced" },
        { name: "Arduino", level: "Advanced" },
        { name: "DaVinci Resolve", level: "Intermediate" },
        { name: "FL Studio", level: "Intermediate" },
        { name: "Canva", level: "Advanced" },
        { name: "Figma", level: "Advanced" },
        { name: "Adobe Illustrator", level: "Intermediate" },
        { name: "Adobe XD", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-[#C9F31D]";
      case "Intermediate": return "bg-yellow-500";
      case "Beginner": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="relative z-10 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Skills & <span className="text-[#C9F31D]">Tools</span>
        </h1>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-[#C9F31D] transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h2 className="text-xl font-semibold text-[#C9F31D]">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white group-hover:text-[#C9F31D] transition-colors">
                        {skill.name}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold text-black ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="flex justify-center space-x-4 text-2xl">
            <span className="hover:text-[#C9F31D] transition-colors cursor-pointer">📚</span>
            <span className="hover:text-[#C9F31D] transition-colors cursor-pointer">🚀</span>
            <span className="hover:text-[#C9F31D] transition-colors cursor-pointer">💡</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
