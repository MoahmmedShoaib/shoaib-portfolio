import { motion } from 'framer-motion';
import { Briefcase, Code, Rocket, Users } from 'lucide-react';

const Opportunities = () => {
  return (
    <section id="opportunities" className="relative w-full py-24 bg-[#080808]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#0a0a0a] opacity-70"></div>
      
      {/* Blur circles for visual effect */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-[100px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Looking For</span></h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Exploring new opportunities to grow, collaborate, and create impactful solutions.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300"
          >
            <div className="p-4 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full mb-6">
              <Briefcase className="text-indigo-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Internships</h3>
            <p className="text-gray-400">
              Seeking opportunities to work with innovative teams on challenging projects in web development and AI/ML.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300"
          >
            <div className="p-4 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full mb-6">
              <Code className="text-indigo-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Freelance Work</h3>
            <p className="text-gray-400">
              Available for freelance projects involving web development, AI integration, and creative problem-solving.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300"
          >
            <div className="p-4 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full mb-6">
              <Users className="text-indigo-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Hackathons</h3>
            <p className="text-gray-400">
              Enthusiastic about participating in hackathons and competitions to build innovative solutions under pressure.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300"
          >
            <div className="p-4 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full mb-6">
              <Rocket className="text-indigo-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Startup Collabs</h3>
            <p className="text-gray-400">
              Open to collaborating with startups and entrepreneurs to bring innovative ideas to life through technology.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="p-8 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-md rounded-2xl border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Create Something Amazing Together</h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              I'm passionate about working on projects that challenge conventional thinking and create real impact. 
              If you have an exciting opportunity or project in mind, I'd love to hear about it!
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Opportunities;
