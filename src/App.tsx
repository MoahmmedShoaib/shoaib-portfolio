import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import AchievementsPage from './pages/AchievementsPage';
import './index.css';

export function App() {
  useEffect(() => {
    // Add Google Fonts
    const linkPoppins = document.createElement('link');
    linkPoppins.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap';
    linkPoppins.rel = 'stylesheet';
    
    const linkSyne = document.createElement('link');
    linkSyne.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap';
    linkSyne.rel = 'stylesheet';
    
    const linkMontserrat = document.createElement('link');
    linkMontserrat.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap';
    linkMontserrat.rel = 'stylesheet';
    
    // Add new fonts
    const linkOrbitron = document.createElement('link');
    linkOrbitron.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap';
    linkOrbitron.rel = 'stylesheet';
    
    const linkCaveat = document.createElement('link');
    linkCaveat.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap';
    linkCaveat.rel = 'stylesheet';
    
    document.head.appendChild(linkPoppins);
    document.head.appendChild(linkSyne);
    document.head.appendChild(linkMontserrat);
    document.head.appendChild(linkOrbitron);
    document.head.appendChild(linkCaveat);
    
    // Set body background color
    document.body.style.backgroundColor = '#000';
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.head.removeChild(linkPoppins);
      document.head.removeChild(linkSyne);
      document.head.removeChild(linkMontserrat);
      document.head.removeChild(linkOrbitron);
      document.head.removeChild(linkCaveat);
    };
  }, []);

  return (
    <Router>
      <div className="font-['Poppins',sans-serif] text-white bg-black min-h-screen relative">
        {/* Blurry background overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-900/10 rounded-full filter blur-[150px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-purple-900/10 rounded-full filter blur-[150px]"></div>
          <div className="absolute top-2/3 left-1/3 w-1/4 h-1/4 bg-indigo-900/5 rounded-full filter blur-[120px]"></div>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
