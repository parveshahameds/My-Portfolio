
const About = () => {
  return (
    <div className="relative z-10 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          About <span className="text-[#C9F31D]">Me</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#C9F31D]">
              My Journey
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a multi-disciplinary creator who believes that the best innovations happen 
              at the intersection of different fields. My journey started with curiosity about 
              how things work, leading me down rabbit holes of electronics, programming, and design.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding or building circuits, you'll find me producing music, 
              editing videos, or analyzing the latest films. I believe that creativity 
              transcends boundaries, and the skills I learn in one domain often enhance my work in others.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-[#C9F31D]">What Drives Me</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-[#C9F31D] mr-3">🔬</span>
                Experimenting with emerging technologies
              </li>
              <li className="flex items-center">
                <span className="text-[#C9F31D] mr-3">🎨</span>
                Creating intuitive user experiences
              </li>
              <li className="flex items-center">
                <span className="text-[#C9F31D] mr-3">🎵</span>
                Blending technical precision with creative expression
              </li>
              <li className="flex items-center">
                <span className="text-[#C9F31D] mr-3">🚀</span>
                Building solutions that make a difference
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-[#C9F31D]">Beyond Technology</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎬</div>
              <h3 className="font-semibold mb-2">Film Enthusiast</h3>
              <p className="text-gray-400 text-sm">Analyzing cinematography and storytelling techniques</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎹</div>
              <h3 className="font-semibold mb-2">Music Producer</h3>
              <p className="text-gray-400 text-sm">Creating electronic music and exploring sound design</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="font-semibold mb-2">Maker</h3>
              <p className="text-gray-400 text-sm">Building physical prototypes and electronic projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
