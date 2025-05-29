
const Resume = () => {
  const handleDownload = () => {
    alert("Resume download would start here. Please add your actual resume PDF to the public folder.");
  };

  const resumeHighlights = [
    {
      section: "Experience",
      items: ["Full-Stack Development", "AI/ML Engineering", "Electronics Design", "Project Leadership"]
    },
    {
      section: "Education", 
      items: ["Computer Science", "Electronics Engineering", "Certifications", "Research Projects"]
    },
    {
      section: "Skills",
      items: ["Programming Languages", "Creative Tools", "Hardware Design", "Project Management"]
    }
  ];

  return (
    <div className="relative z-10 min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-[#C9F31D] tracking-wider uppercase mb-4 block">
            Professional Profile
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-[#C9F31D] bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Download my complete professional background and achievements
          </p>
        </div>

        {/* Main resume card */}
        <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden mb-12">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C9F31D]/10 via-transparent to-purple-500/10" />
          
          <div className="relative p-12">
            {/* Resume preview */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#C9F31D]/20 to-white/10 rounded-3xl mb-6 group hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">📄</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Professional Resume
              </h2>
              <p className="text-gray-400 text-lg">
                Comprehensive overview of my technical expertise and creative journey
              </p>
            </div>

            {/* Resume highlights grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {resumeHighlights.map((highlight, index) => (
                <div 
                  key={highlight.section}
                  className="group text-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-xl font-bold text-[#C9F31D] mb-6 group-hover:scale-110 transition-transform duration-300">
                    {highlight.section}
                  </h3>
                  <div className="space-y-3">
                    {highlight.items.map(item => (
                      <div key={item} className="flex items-center group/item">
                        <div className="w-2 h-2 bg-[#C9F31D] rounded-full mr-3 group-hover/item:scale-150 transition-transform duration-300" />
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Download button */}
            <div className="text-center">
              <button
                onClick={handleDownload}
                className="group relative px-12 py-4 bg-[#C9F31D] text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#C9F31D]/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-3 text-xl group-hover:animate-bounce">⬇️</span>
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick stats */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-[#C9F31D] mb-6">
              Quick Stats
            </h3>
            <div className="space-y-4">
              {[
                { label: "Years of Experience", value: "5+" },
                { label: "Projects Completed", value: "50+" },
                { label: "Technologies Mastered", value: "20+" },
                { label: "Creative Works", value: "100+" }
              ].map(stat => (
                <div key={stat.label} className="flex justify-between items-center">
                  <span className="text-gray-400">{stat.label}</span>
                  <span className="text-white font-bold text-xl">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact links */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-[#C9F31D] mb-6">
              Let's Connect
            </h3>
            <div className="space-y-4">
              {[
                { label: "Email", icon: "📧", href: "mailto:your.email@example.com" },
                { label: "LinkedIn", icon: "💼", href: "https://linkedin.com/in/yourprofile" },
                { label: "GitHub", icon: "🔗", href: "https://github.com/yourusername" },
                { label: "Portfolio", icon: "🌐", href: "#" }
              ].map(contact => (
                <a 
                  key={contact.label}
                  href={contact.href}
                  className="group flex items-center p-4 bg-white/5 rounded-xl hover:bg-[#C9F31D]/10 hover:border-[#C9F31D]/30 border border-white/10 transition-all duration-300"
                >
                  <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </span>
                  <span className="text-gray-300 group-hover:text-[#C9F31D] transition-colors duration-300 font-medium">
                    {contact.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
