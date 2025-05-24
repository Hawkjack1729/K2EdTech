import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  contributions: string[];
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageSrc,
  contributions,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-4"></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={imageSrc}
            alt={name}
            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-100"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            <p className="text-blue-600 font-medium">{role}</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">
            Contributions
          </h4>
          <ul className="space-y-1">
            {contributions.map((contribution, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600">{contribution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;