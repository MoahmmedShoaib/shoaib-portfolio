import { motion } from 'framer-motion';
import { Award, Medal, Trophy } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "4th place in HackB hackathon",
    description: "Achieved 4th place in the HackB hackathon conducted at BITM BALLARI by the department of AIML.",
    icon: <Trophy className="text-yellow-400" size={24} />,
    year: "2025"
  },
  {
    id: 2,
    title: "4 Full Stack Projects Completed",
    description: "Successfully delivered four comprehensive full stack projects, demonstrating proficiency in both frontend and backend technologies.",
    icon: <Award className="text-blue-400" size={24} />,
    year: "2025"
  },
  {
    id: 3,
    title: "Vibebuild Agency Founder",
    description: "Founded Vibebuild agency which helps brands create their websites and edit content for their pages, providing end-to-end digital solutions.",
    icon: <Medal className="text-purple-400" size={24} />,
    year: "2025"
  }
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="achievements" className="relative w-full py-24 bg-[#080808]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#0a0a0a] opacity-70"></div>
      
      {/* Blur circles for visual effect */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-600/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full filter blur-[100px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-white">Achievements</span> & Hackathons
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Recognition and awards from competitions, hackathons, and professional accomplishments.</p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full flex-shrink-0">
                  {achievement.icon}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h3 className="text-xl font-semibold text-white mb-1 md:mb-0">{achievement.title}</h3>
                    <span className="text-gray-300 text-sm font-medium px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm inline-block">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-gray-400 mt-2">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
