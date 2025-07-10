import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    
    // Configure EmailJS with your service ID, template ID, and public key
    emailjs.init("5AH7Br5kGWJFy18Cf"); // Replace with your actual public key
    
    // Create template params object
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Shoaib",
      message: formData.message,
      to_email: "shoaib12006@gmail.com"
    };
    
    // Send the email using EmailJS
    emailjs.send(
      "service_pxbmkyj", // Replace with your actual service ID
      "template_mcf19lr", // Replace with your actual template ID
      templateParams
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset the success message after some time
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    })
    .catch(error => {
      console.error('Email error:', error);
      setIsSubmitting(false);
      setFormError('Failed to send message. Please try again or email me directly.');
    });
  };
  
  return (
    <section id="contact" className="relative w-full py-24 bg-[#0a0a0a]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-black opacity-70"></div>
      
      {/* Blur circles for visual effect */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[120px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In <span className="text-white">Touch</span></h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6 border border-green-500/30"
              >
                <p className="text-green-400 font-medium">Thank you for your message! I'll get back to you soon.</p>
              </motion.div>
            )}
            
            {formError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6 border border-red-500/30"
              >
                <p className="text-red-400 font-medium">{formError}</p>
              </motion.div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white"
                  placeholder="I'd like to discuss a project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg flex items-center justify-center font-medium ${
                  isSubmitting 
                    ? 'bg-white/20 text-white/70 cursor-not-allowed' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                } backdrop-blur-md transition-all duration-300`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              
              <div className="space-y-6">
                <a href="mailto:shoaib12006@gmail.com" className="flex items-center group">
                  <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:bg-indigo-600/20 transition-all duration-300">
                    <Mail className="text-indigo-400" size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white group-hover:text-indigo-400 transition-colors duration-300">shoaib12006@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://github.com/MoahmmedShoaib" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:bg-indigo-600/20 transition-all duration-300">
                    <Github className="text-indigo-400" size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <p className="text-white group-hover:text-indigo-400 transition-colors duration-300">github.com/MoahmmedShoaib</p>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/mohammad-shoaib-aa684a278" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:bg-indigo-600/20 transition-all duration-300">
                    <Linkedin className="text-indigo-400" size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white group-hover:text-indigo-400 transition-colors duration-300">linkedin.com/in/mohammad-shoaib-aa684a278</p>
                  </div>
                </a>
                
                <a href="https://www.instagram.com/shoaib_ashrafi_/profilecard/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:bg-indigo-600/20 transition-all duration-300">
                    <Instagram className="text-indigo-400" size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Instagram</p>
                    <p className="text-white group-hover:text-indigo-400 transition-colors duration-300">@shoaib_ashrafi_</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
