import React from 'react';
import TechStackItem from '../components/TechStack';

const Technology: React.FC = () => {
  const techStacks = [
    {
      category: "Backend",
      technologies: ["Django", "FastAPI", "PostgreSQL", "Redis", "GraphQL"]
    },
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Jest"]
    },
    {
      category: "Machine Learning",
      technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Scikit-learn", "Hugging Face"]
    },
    {
      category: "Cloud & Infrastructure",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Serverless"]
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technologies to create robust, scalable, and intelligent educational solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStacks.map((stack, index) => (
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
              <TechStackItem 
                category={stack.category} 
                technologies={stack.technologies} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;