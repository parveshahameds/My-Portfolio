
import { Download, Mail, Github, Linkedin } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    alert("Resume download would start here. Please add your actual resume PDF to the public folder.");
  };

  const contacts = [
    { icon: Mail, label: "Email", value: "your.email@example.com" },
    { icon: Github, label: "GitHub", value: "github.com/username" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/username" }
  ];

  return (
    <div className="min-h-screen py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block border border-[#C9F31D]/30 rounded-full px-4 py-2 text-[#C9F31D] text-sm font-mono mb-8">
            Professional Profile
          </div>
          <h1 className="text-5xl md:text-7xl font-thin text-white mb-8">
            Resume
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Download my complete professional background and achievements
          </p>
        </div>

        {/* Main resume section */}
        <div className="border border-gray-800 mb-12">
          <div className="p-12 text-center">
            <div className="w-16 h-16 border border-[#C9F31D] rounded-full flex items-center justify-center mx-auto mb-8 group hover:bg-[#C9F31D] hover:text-black transition-all duration-300">
              <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            
            <h2 className="text-3xl font-light text-white mb-4">
              Professional Resume
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Comprehensive overview of my technical expertise, creative projects, and professional journey
            </p>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9F31D] text-black font-medium hover:bg-[#C9F31D]/90 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Contact grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div key={contact.label} className="border border-gray-800 p-6 hover:border-[#C9F31D]/30 transition-all duration-300 group">
                <IconComponent className="w-6 h-6 text-[#C9F31D] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-medium mb-2">{contact.label}</h3>
                <p className="text-gray-400 text-sm font-mono">{contact.value}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 text-gray-500">
            <div className="w-16 h-px bg-gray-800" />
            <span className="text-sm font-mono">Let's Connect</span>
            <div className="w-16 h-px bg-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
