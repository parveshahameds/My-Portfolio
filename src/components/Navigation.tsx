
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
    <nav className="relative z-50 p-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#C9F31D] hover:text-white transition-colors">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-[#C9F31D] transition-colors ${
                location.pathname === item.path ? 'text-[#C9F31D]' : 'text-white'
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
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 p-6 backdrop-blur-sm">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-3 hover:text-[#C9F31D] transition-colors ${
                location.pathname === item.path ? 'text-[#C9F31D]' : 'text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
