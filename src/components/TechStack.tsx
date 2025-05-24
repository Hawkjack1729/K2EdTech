import React from 'react';

interface TechStackItemProps {
  category: string;
  technologies: string[];
}

const TechStackItem: React.FC<TechStackItemProps> = ({ category, technologies }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStackItem;