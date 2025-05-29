
const Resume = () => {
  const handleDownload = () => {
    // In a real implementation, this would download an actual PDF
    alert("Resume download would start here. Please add your actual resume PDF to the public folder.");
  };

  return (
    <div className="relative z-10 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          My <span className="text-[#C9F31D]">Resume</span>
        </h1>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Download my complete professional profile
        </p>

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📄</div>
            <h2 className="text-2xl font-semibold mb-2">Professional Resume</h2>
            <p className="text-gray-400">
              Complete overview of my experience, skills, and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9F31D]">What's Included</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-[#C9F31D] mr-3">✓</span>
                  Professional Experience
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9F31D] mr-3">✓</span>
                  Technical Skills & Tools
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9F31D] mr-3">✓</span>
                  Project Highlights
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9F31D] mr-3">✓</span>
                  Education & Certifications
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9F31D] mr-3">✓</span>
                  Contact Information
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9F31D]">Format Details</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-[#C9F31D] mr-3">📋</span>
                  Clean, professional layout
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9F31D] mr-3">🎨</span>
                  Modern design elements
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9F31D] mr-3">📱</span>
                  Print-friendly format
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9F31D] mr-3">⚡</span>
                  Quick to scan
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9F31D] mr-3">💼</span>
                  ATS-optimized
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleDownload}
              className="px-8 py-4 bg-[#C9F31D] text-black font-semibold rounded-lg hover:bg-white transition-colors duration-300 inline-flex items-center"
            >
              <span className="mr-2">⬇️</span>
              Download Resume (PDF)
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-center text-[#C9F31D]">
            Let's Connect!
          </h3>
          <p className="text-gray-300 text-center mb-6">
            Interested in working together? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:your.email@example.com"
              className="px-6 py-3 border border-[#C9F31D] text-[#C9F31D] rounded-lg hover:bg-[#C9F31D] hover:text-black transition-colors duration-300 text-center"
            >
              📧 Email Me
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile"
              className="px-6 py-3 border border-[#C9F31D] text-[#C9F31D] rounded-lg hover:bg-[#C9F31D] hover:text-black transition-colors duration-300 text-center"
            >
              💼 LinkedIn
            </a>
            <a 
              href="https://github.com/yourusername"
              className="px-6 py-3 border border-[#C9F31D] text-[#C9F31D] rounded-lg hover:bg-[#C9F31D] hover:text-black transition-colors duration-300 text-center"
            >
              🔗 GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
