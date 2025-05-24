import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  benefits,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl h-full">
      <div className="p-8">
        <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
            Key Benefits
          </h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2 font-bold">•</span>
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;