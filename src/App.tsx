import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Outcomes from './sections/Outcomes';
import Technology from './sections/Technology';
import Team from './sections/Team';
import Research from './sections/Research';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const globalStyles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
    
    document.title = "EdTech AI | Transforming Education Through Intelligent Solutions";
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <style>{globalStyles}</style>
      <Navbar />
      <Hero />
      <Features />
      <Outcomes />
      <Technology />
      <Team />
      <Research />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;