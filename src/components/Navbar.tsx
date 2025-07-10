import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Award, Briefcase, Code, Github, House, Instagram, Linkedin, Mail, Menu, MessageSquare, User, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/40 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Center-aligned navigation in desktop view */}
          <div className="hidden md:flex items-center justify-center space-x-4">
            <Link 
              to="/"
              className={`px-4 py-1.5 rounded-lg transition-all duration-300 text-sm font-medium ${
                isActive('/') 
                  ? 'bg-white/10 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <House size={16} />
                <span>Home</span>
              </div>
            </Link>
            
            <Link 
              to="/skills"
              className={`px-4 py-1.5 rounded-lg transition-all duration-300 text-sm font-medium ${
                isActive('/skills') 
                  ? 'bg-white/10 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Code size={16} />
                <span>Skills</span>
              </div>
            </Link>
            
            <Link 
              to="/projects"
              className={`px-4 py-1.5 rounded-lg transition-all duration-300 text-sm font-medium ${
                isActive('/projects') 
                  ? 'bg-white/10 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Briefcase size={16} />
                <span>Projects</span>
              </div>
            </Link>
            
            <Link 
              to="/achievements"
              className={`px-4 py-1.5 rounded-lg transition-all duration-300 text-sm font-medium ${
                isActive('/achievements') 
                  ? 'bg-white/10 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Award size={16} />
                <span>Achievements</span>
              </div>
            </Link>
            
            <a 
              href="/#contact"
              className="px-4 py-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium"
            >
              <div className="flex items-center gap-1.5">
                <MessageSquare size={16} />
                <span>Contact</span>
              </div>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex justify-center w-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/60 backdrop-blur-xl flex flex-col items-center">
          <Link 
            to="/"
            className={`flex items-center gap-2 px-2 py-2 text-sm font-medium w-4/5 text-center justify-center rounded-lg ${
              isActive('/') ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <House size={20} />
            <span>Home</span>
          </Link>
          
          <Link 
            to="/skills"
            className={`flex items-center gap-2 px-2 py-2 text-sm font-medium w-4/5 text-center justify-center rounded-lg ${
              isActive('/skills') ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Code size={20} />
            <span>Skills</span>
          </Link>
          
          <Link 
            to="/projects"
            className={`flex items-center gap-2 px-2 py-2 text-sm font-medium w-4/5 text-center justify-center rounded-lg ${
              isActive('/projects') ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Briefcase size={20} />
            <span>Projects</span>
          </Link>
          
          <Link 
            to="/achievements"
            className={`flex items-center gap-2 px-2 py-2 text-sm font-medium w-4/5 text-center justify-center rounded-lg ${
              isActive('/achievements') ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Award size={20} />
            <span>Achievements</span>
          </Link>
          
          <a 
            href="/#contact"
            className="flex items-center gap-2 px-2 py-2 text-sm font-medium w-4/5 text-center justify-center rounded-lg text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <MessageSquare size={20} />
            <span>Contact</span>
          </a>
          
          <div className="flex space-x-4 px-3 py-3 mt-4 border-t border-white/10 justify-center">
            <a 
              href="https://github.com/MoahmmedShoaib"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammad-shoaib-aa684a278"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/shoaib_ashrafi_/profilecard/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:shoaib12006@gmail.com"
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
