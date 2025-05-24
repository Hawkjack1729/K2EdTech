import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { GraduationCap, BookOpen, MessageSquare } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Interactive Courses",
      description: "Engage with comprehensive courses designed by industry experts, featuring interactive content, quizzes, and hands-on projects.",
      icon: GraduationCap,
      benefits: [
        "Expert-led video lectures",
        "Interactive coding exercises",
        "Real-world projects",
        "Industry-recognized certificates"
      ]
    },
    {
      title: "Personalized Learning",
      description: "Experience adaptive learning paths that adjust to your pace, preferences, and goals for optimal educational outcomes.",
      icon: BookOpen,
      benefits: [
        "Custom learning tracks",
        "Progress tracking",
        "Skill assessments",
        "Personalized recommendations"
      ]
    },
    {
      title: "AI Learning Assistant",
      description: "Get 24/7 support from our intelligent AI assistant that helps you understand concepts, solve problems, and stay on track.",
      icon: MessageSquare,
      benefits: [
        "Instant concept explanations",
        "Problem-solving guidance",
        "Study recommendations",
        "Progress monitoring"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Your Learning, Enhanced
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make K2EdTech the perfect platform for your educational journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="opacity-0 transform translate-y-8 transition-all duration-700"
              style={{
                animationName: 'fadeInUp',
                animationDuration: '0.7s',
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                benefits={feature.benefits}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features