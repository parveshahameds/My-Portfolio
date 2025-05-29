
const About = () => {
  const experiences = [
    {
      category: "Technical",
      items: ["Electronics Design", "AI/ML Development", "Full-Stack Development", "Embedded Systems"]
    },
    {
      category: "Creative", 
      items: ["Music Production", "Video Editing", "UI/UX Design", "Film Analysis"]
    }
  ];

  return (
    <div className="relative z-10 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-mono text-[#C9F31D] tracking-wider uppercase mb-4 block">
            Get to know me
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-[#C9F31D] bg-clip-text text-transparent">
            About Me
          </h1>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Story section */}
          <div className="space-y-8">
            <div className="relative">
              <h2 className="text-3xl font-bold mb-6 text-[#C9F31D]">
                My Journey
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a multidisciplinary creator who thrives at the intersection of technology and art. 
                  My curiosity drives me to explore everything from circuit design to AI algorithms, 
                  from music production to film analysis.
                </p>
                <p>
                  What excites me most is how different fields complement each other – the precision 
                  of programming enhances my music production, while creative thinking helps me 
                  approach technical problems from unique angles.
                </p>
                <p>
                  Whether I'm coding an AI model, designing a PCB, or producing a track, 
                  I bring the same passion for innovation and attention to detail.
                </p>
              </div>
            </div>
          </div>

          {/* Experience cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.category}
                className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-[#C9F31D]/30 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-bold text-[#C9F31D] mb-6">
                  {exp.category} Expertise
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {exp.items.map((item, i) => (
                    <div key={item} className="flex items-center group">
                      <div className="w-2 h-2 bg-[#C9F31D] rounded-full mr-4 group-hover:scale-150 transition-transform duration-300" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12 text-[#C9F31D]">
            What Drives Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Innovation",
                description: "Pushing boundaries and exploring new possibilities in every project"
              },
              {
                icon: "🎯", 
                title: "Purpose",
                description: "Creating solutions that make a meaningful impact on people's lives"
              },
              {
                icon: "🌟",
                title: "Excellence",
                description: "Crafting every detail with precision and passion for quality"
              }
            ].map((value, index) => (
              <div 
                key={value.title}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C9F31D]/30 transition-all duration-500 hover:scale-105"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#C9F31D] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
