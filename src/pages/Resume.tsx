import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";

const Resume = () => {
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

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9F31D] text-black font-medium hover:bg-[#C9F31D]/90 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>

            {/* PDF Preview */}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 text-gray-500 mb-6">
            <div className="w-16 h-px bg-gray-800" />
            <span className="text-sm font-mono">Let's Connect</span>
            <div className="w-16 h-px bg-gray-800" />
          </div>

          <div className="flex justify-center gap-6 text-gray-400 text-lg">
            <a
              href="https://github.com/parveshahameds/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/parveshahameds/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/parveshahameds/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:parveshahamed0209@gmail.com"
              className="hover:text-white transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
