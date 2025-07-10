import { motion } from 'framer-motion';
import { Film, Headphones, Image, Scissors } from 'lucide-react';

const ContentCreation = () => {
  return (
    <section id="content" className="relative w-full py-24 bg-[#0a0a0a]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#080808] opacity-70"></div>
      
      {/* Blur circles for visual effect */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-pink-600/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-[100px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Content <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Creation</span></h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Exploring my passion for creating engaging digital content across different platforms.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-xl mr-4">
                  <Film className="text-indigo-400" size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-white">VibeBuild Agency</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Founded VibeBuild, a creative agency specializing in digital content production for brands and individuals looking to establish a strong online presence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-white/10 rounded-lg mr-3 mt-1">
                    <Scissors className="text-purple-400" size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Video Editing</h4>
                    <p className="text-gray-400 text-sm">Creating compelling short-form video content optimized for social media engagement.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-white/10 rounded-lg mr-3 mt-1">
                    <Image className="text-purple-400" size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Visual Design</h4>
                    <p className="text-gray-400 text-sm">Developing consistent brand imagery and graphics that resonate with target audiences.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-white/10 rounded-lg mr-3 mt-1">
                    <Headphones className="text-purple-400" size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Podcast Production</h4>
                    <p className="text-gray-400 text-sm">Editing and producing podcast episodes with professional sound quality and engaging segments.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">Tools & Expertise</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center justify-center hover:bg-white/15 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/CapCut_logo.svg/2048px-CapCut_logo.svg.png" alt="CapCut" className="w-12 h-12 mb-3" />
                  <h4 className="text-white font-medium">CapCut</h4>
                  <p className="text-gray-400 text-sm text-center mt-2">Quick edits & social reels</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center justify-center hover:bg-white/15 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png" alt="Canva" className="w-12 h-12 mb-3" />
                  <h4 className="text-white font-medium">Canva</h4>
                  <p className="text-gray-400 text-sm text-center mt-2">Graphics & templates</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center justify-center hover:bg-white/15 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png" alt="Premiere Pro" className="w-12 h-12 mb-3" />
                  <h4 className="text-white font-medium">Premiere Pro</h4>
                  <p className="text-gray-400 text-sm text-center mt-2">Advanced video editing</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center justify-center hover:bg-white/15 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png" alt="Photoshop" className="w-12 h-12 mb-3" />
                  <h4 className="text-white font-medium">Photoshop</h4>
                  <p className="text-gray-400 text-sm text-center mt-2">Image editing & effects</p>
                </div>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="mt-8 p-5 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-md rounded-xl border border-white/10"
              >
                <h4 className="text-white font-semibold mb-2">Content Portfolio</h4>
                <p className="text-gray-300 mb-4">
                  My work includes promotional videos, educational content, and brand storytelling across various platforms.
                </p>
                <a href="#contact" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center text-sm font-medium">
                  Request my content portfolio
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreation;
