import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef, useEffect } from 'react';

const SphereObject = () => {
  const sphereRef = useRef<any>();

  return (
    <group>
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.1} 
          metalness={0.8}
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </group>
  );
};

const Hero = () => {
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.querySelector('.stars-container');
      if (!starsContainer) return;
      
      // Clear existing stars
      starsContainer.innerHTML = '';
      
      // Create new stars
      for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size between 1px and 2px
        const size = Math.random() * 0.8 + 0.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random opacity
        star.style.opacity = `${Math.random() * 0.5 + 0.2}`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${Math.random() * 3 + 6}s`;
        
        starsContainer.appendChild(star);
      }
    };
    
    createStars();
    
    // Recreate stars on window resize
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  // Text animation variants
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.2,
        ease: "easeOut"
      }
    }
  };
  
  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: 90,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        delay: 1.2,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 1.6,
        ease: "easeOut"
      }
    }
  };

  const buttonsVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: 2.0,
        ease: "easeOut"
      }
    }
  };

  // Helper function to create animated letters
  const createAnimatedLetters = (text: string) => {
    return Array.from(text).map((letter, index) => (
      <motion.span
        key={index}
        variants={letterVariants}
        className="inline-block"
        style={{ 
          textShadow: "0 0 15px rgba(255,255,255,0.5)",
        }}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ));
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#111]"></div>
      
      {/* Moving stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-container relative w-full h-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-3 sm:px-4  lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center w-full">
          {/* Desktop view: Single line */}
          <motion.h1 
            className="hidden md:block font-['Orbitron',sans-serif] text-8xl font-bold tracking-tight text-white mb-8 whitespace-nowrap"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            {createAnimatedLetters("MOHAMMED SHOAIB")}
          </motion.h1>
          
          {/* Mobile view: Two lines */}
          <div className="md:hidden">
            <motion.h1 
              className="font-['Orbitron',sans-serif] text-6xl font-bold tracking-tight text-white mb-1 whitespace-nowrap"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
            >
              {createAnimatedLetters("MOHAMMED")}
            </motion.h1>
            
            <motion.h1 
              className="font-['Orbitron',sans-serif] text-6xl font-bold tracking-tight text-white mb-8 whitespace-nowrap"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
            >
              {createAnimatedLetters("SHOAIB")}
            </motion.h1>
          </div>
          
          <motion.div
            className="relative"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              className="font-['Caveat',cursive] text-3xl md:text-4xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              style={{ letterSpacing: "1px" }}
            >
              <motion.span
                animate={{ 
                  textShadow: ["0 0 8px rgba(255,255,255,0)", "0 0 16px rgba(255,255,255,0.3)", "0 0 8px rgba(255,255,255,0)"] 
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Web developer AI/ML enthusiast
              </motion.span>
            </motion.p>
          </motion.div>
          
          <motion.p 
            className="text-md md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
          >
            BE CSE (AI & ML) student | Building innovative web, AI & IoT projects | Passionate about startups & real-world problem solving
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={buttonsVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a 
              href="#contact"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-md"
              whileHover={{ boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)" }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.div 
              className="w-1 h-2 bg-white/60 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
