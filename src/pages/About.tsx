
const skills = () => {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "30+", label: "Projects Completed" },
    { number: "5+", label: "Multi Disciplinary Profession" },
    { number: "100%", label: "Dedication" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Constantly exploring new technologies and creative approaches to solve complex problems."
    },
    {
      title: "Quality",
      description: "Delivering exceptional results with attention to detail and precision in every project."
    },
    {
      title: "Learning",
      description: "Embracing continuous growth and staying ahead of industry trends and developments."
    }
  ];

  return (
    <div className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block border border-[#C9F31D]/30 rounded-full px-4 py-2 text-[#C9F31D] text-sm font-mono mb-8">
            About
          </div>
          <h1 className="text-5xl md:text-7xl font-thin text-white mb-8">
            Crafting Digital
            <br />
            <span className="text-[#C9F31D]">Experiences</span>
          </h1>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a multidisciplinary creator passionate skills the intersection 
              of technology and art. My journey spans from electronics design 
              to Software development, AI, ML , music production to film analysis.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              What drives me is the belief that the best innovations happen 
              when different fields converge. Whether I'm coding neural networks, 
              designing PCBs, or producing music, I approach each project with 
              the same curiosity and dedication to excellence.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              My diverse background allows me to see connections others might miss, 
              leading to unique solutions and creative breakthroughs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-light text-[#C9F31D] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={value.title} className="group">
              <div className="h-px w-12 bg-[#C9F31D] mb-6 group-hover:w-24 transition-all duration-500" />
              <h3 className="text-xl font-medium text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default skills;
