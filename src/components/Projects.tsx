import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "🪪 VeriPass",
    description: "Smart student bus pass validator. A system that verifies a student's identity using QR code and face recognition. Logs entry time and checks validity based on semester and fee status.",
    techStack: ["Computer Vision", "QR Code", "Face Recognition", "Database"],
    image: "https://mocha-cdn.com/0197f2b8-ca39-7c4f-bd26-5f1915a5c77a/veripass.jpeg",
  },
  {
    id: 2,
    title: "🕳️ Road Aware",
    description: "AI-based road hazard reporter. Uses YOLO to detect potholes from images and allows users to report civic issues. Displays severity level and visual heatmaps for authorities.",
    techStack: ["YOLO", "Computer Vision", "AI/ML", "Image Processing"],
    image: "https://mocha-cdn.com/0197f2b8-ca39-7c4f-bd26-5f1915a5c77a/hazard-eye.jpeg",
  },
  {
    id: 3,
    title: "🧠 NextProject",
    description: "Personalized project recommender. Suggests coding project ideas based on a short quiz. Covers domains like Web Dev, AI/ML, Games, and more using a categorized local project database.",
    techStack: ["Recommendation System", "Web Development", "Database", "UI/UX"],
    image: "https://mocha-cdn.com/0197f2b8-ca39-7c4f-bd26-5f1915a5c77a/nxt-project.jpeg",
  },
  {
    id: 4,
    title: "🔐 SafeSpeak",
    description: "Anonymous abuse reporting platform. Lets students securely and anonymously report cyberbullying or digital abuse. Admin panel for review, focused on privacy and safety in colleges.",
    techStack: ["Security", "Privacy", "Web Development", "Database"],
    image: "https://mocha-cdn.com/0197f2b8-ca39-7c4f-bd26-5f1915a5c77a/safespeak.png",
  },
  {
    id: 5,
    title: "🌐 NeoNexus",
    description: "Hackathon platform website. A modern, responsive web app designed for managing hackathons. Includes event details, registration, timeline, and user-friendly UI for participants.",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "https://mocha-cdn.com/0197f2b8-ca39-7c4f-bd26-5f1915a5c77a/neo-nexus.png",
  }
];

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 group"
    >
      <div className="relative overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech: string, index: number) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-24 bg-[#0a0a0a]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#080808] opacity-70"></div>
      
      {/* Blur circles for visual effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[120px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My <span className="text-white">Projects</span></h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">A showcase of my recent work spanning web development, AI/ML applications, and IoT solutions.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
