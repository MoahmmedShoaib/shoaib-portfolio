import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Core Skills",
    skills: [
      { name: "HTML/CSS", icon: "🌐", level: 90 },
      { name: "JavaScript", icon: "⚡", level: 85 },
      { name: "React.js", icon: "⚛️", level: 80 },
      { name: "Python", icon: "🐍", level: 75 },
      { name: "AI/ML", icon: "🧠", level: 70 }
    ]
  }
];

const SkillCard = ({ skill }: { skill: { name: string; icon: string; level: number } }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(99, 102, 241, 0.4)" }}
      className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 flex flex-col items-center transition-all duration-300"
    >
      <span className="text-3xl mb-2">{skill.icon}</span>
      <h3 className="text-white font-medium mb-3">{skill.name}</h3>
      <div className="w-full bg-gray-700/50 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-white/50"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="relative w-full py-24 bg-[#080808]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-70"></div>
      
      {/* Blur circles for visual effect */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-[80px]"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/20 rounded-full filter blur-[100px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My <span className="text-white">Skills</span></h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Key technologies and tools I've mastered throughout my journey as a developer.</p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="mb-10"
            >
              <h3 className="text-2xl font-semibold text-white mb-8 relative inline-block">
                {category.title}
                <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-transparent"></div>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                  >
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
