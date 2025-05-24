import React from 'react';
import Button from '../components/Button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 z-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Transform Your Learning Journey with K2EdTech
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Access world-class courses, personalized learning paths, and AI-powered assistance 
            to accelerate your growth and achieve your educational goals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button variant="primary" size="lg">
              Start Learning Now
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Browse Courses
            </Button>
          </div>
          
          <div className="animate-bounce mt-12">
            <button 
              onClick={scrollToFeatures}
              className="text-white focus:outline-none"
              aria-label="Scroll to features"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero