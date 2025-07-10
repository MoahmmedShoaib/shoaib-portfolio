import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TorusKnot } from '@react-three/drei';

const About = () => {
  return (
    <section id="about" className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-black opacity-50 z-0"></div>
      
      {/* 3D element */}
      <div className="absolute right-0 top-0 w-full md:w-1/3 h-full opacity-30 pointer-events-none">
        <Canvas>
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
          <TorusKnot args={[1, 0.3, 128, 32]}>
            <meshStandardMaterial 
              color="#ffffff" 
              roughness={0.3} 
              metalness={0.7}
              emissive="#aaaaaa"
              emissiveIntensity={0.2}
            />
          </TorusKnot>
        </Canvas>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About <span className="text-white">Me</span></h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div 
            className="md:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Profile image with glassmorphism effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-3xl"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/30 to-white/20 opacity-70"></div>
              <div className="absolute inset-3 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                {/* User's actual image */}
                <img 
                  src="https://mocha-cdn.com/0197f2b8-ca39-7c4f-bd26-5f1915a5c77a/WhatsApp-Image-2025-07-10-at-11.04.5.jpg"
                  alt="Mohammed Shoaib"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl hover:shadow-white/5 transition-all duration-500">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Hey! I'm Shoaib, currently pursuing my BE in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. I'm passionate about building innovative solutions that make a real impact.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As a developer, I love creating web applications and AI-powered tools that solve real-world problems. My expertise spans front-end development with React, back-end systems, and integrating AI/ML models into practical applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always exploring new technologies and methodologies to expand my skillset. Whether it's participating in hackathons, collaborating on open-source projects, or building my own products, I thrive in environments that challenge me to grow and innovate.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center gap-2"
              >
                <span className="text-white">🎓</span>
                <span className="text-gray-300">CS Engineering</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center gap-2"
              >
                <span className="text-white">🤖</span>
                <span className="text-gray-300">AI & ML</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center gap-2"
              >
                <span className="text-white">💻</span>
                <span className="text-gray-300">Web Development</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center gap-2"
              >
                <span className="text-white">🚀</span>
                <span className="text-gray-300">Startup Enthusiast</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
