import { Mail, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="relative z-10 max-w-md w-full px-6 py-10 rounded-xl backdrop-blur-xl border border-[#C9F31D]/10 bg-black/40">
        <h2 className="text-4xl font-bold text-center text-[#C9F31D] mb-8">
          Let's Connect
        </h2>

        <div className="space-y-6">
          <a
            href="mailto:parveshahamed0209@gmail.com"
            className="group block w-full flex items-center gap-4 p-6 rounded-lg bg-[#C9F31D]/5 border border-[#C9F31D]/20 hover:border-[#C9F31D]/40 transition-all duration-300"
          >
            <div className="p-3 rounded-full bg-[#C9F31D]/10 group-hover:bg-[#C9F31D]/20 transition-colors">
              <Mail className="h-6 w-6 text-[#C9F31D]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Email</span>
              <span className="text-white group-hover:text-[#C9F31D] transition-colors">
                parveshahamed0209@gmail.com
              </span>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/parveshahameds/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full flex items-center gap-4 p-6 rounded-lg bg-[#C9F31D]/5 border border-[#C9F31D]/20 hover:border-[#C9F31D]/40 transition-all duration-300"
          >
            <div className="p-3 rounded-full bg-[#C9F31D]/10 group-hover:bg-[#C9F31D]/20 transition-colors">
              <Linkedin className="h-6 w-6 text-[#C9F31D]" />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-sm text-gray-400">LinkedIn</span>
              <span className="text-white group-hover:text-[#C9F31D] transition-colors">
                linkedin.com/in/parveshahameds
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#C9F31D] transition-colors" />
          </a>
        </div>

        <p className="text-gray-400 text-center mt-8">
          Looking forward to connecting with you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
