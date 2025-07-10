import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full py-12 bg-black">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-white/10">
          <div>
            <a href="#" className="text-white font-bold text-2xl tracking-wider inline-block mb-4">
              <span className="text-white">
                SHOAIB
              </span>
            </a>
            <p className="text-gray-400 max-w-md mb-6">
              Building innovative web applications and AI solutions that make a real impact in the world.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/MoahmmedShoaib" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <Github size={18} className="text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohammad-shoaib-aa684a278" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <Linkedin size={18} className="text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="https://www.instagram.com/shoaib_ashrafi_/profilecard/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <Instagram size={18} className="text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="mailto:shoaib12006@gmail.com" 
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <Mail size={18} className="text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-300 italic">
              "I don't just code, I create real-world impact through innovation."
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
