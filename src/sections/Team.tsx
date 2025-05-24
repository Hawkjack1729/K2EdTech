import React from 'react';
import TeamMember from '../components/TeamMember';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Avi Raj",
      role: "Lead AI Researcher",
      imageSrc: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      contributions: [
        "Designed the natural language processing models",
        "Led research on bias detection in educational AI",
        "Developed adaptive learning algorithms"
      ]
    },
    {
      name: "Amrit Raj",
      role: "Full Stack Developer",
      imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      contributions: [
        "Architected the system infrastructure",
        "Built the web application interface",
        "Integrated AI models with the frontend"
      ]
    },
    {
      name: "Md. Nazim",
      role: "Educational Specialist",
      imageSrc: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      contributions: [
        "Designed pedagogical frameworks",
        "Evaluated educational outcomes",
        "Created learning assessment metrics"
      ]
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals behind EdTech AI who are passionate about transforming education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
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
              <TeamMember
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                contributions={member.contributions}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;