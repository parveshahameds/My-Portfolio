import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="hover:text-white transition-colors">
            <img
              src="/image-.svg"
              alt="Logo"
              className="h-10 w-auto"
              style={{ display: "inline-block" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-mono transition-colors duration-300 ${
                  location.pathname === item.path 
                    ? 'text-[#C9F31D]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#C9F31D] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-gray-800">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 text-sm font-mono transition-colors ${
                  location.pathname === item.path 
                    ? 'text-[#C9F31D]' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
