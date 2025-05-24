import React from 'react';
import { BookOpen } from 'lucide-react';

const Research: React.FC = () => {
  const researchPapers = [
    {
      title: "Conversational Agents in Educational Settings",
      authors: "A. Raj, M. Nazim",
      journal: "Journal of AI in Education",
      year: 2024,
      link: "#"
    },
    {
      title: "Detecting and Mitigating Bias in Educational AI Systems",
      authors: "A. Raj, A. Raj, M. Nazim",
      journal: "Educational Technology & Society",
      year: 2023,
      link: "#"
    },
    {
      title: "Adaptive Learning Platforms: Performance Analysis",
      authors: "M. Nazim, A. Raj",
      journal: "International Journal of Learning Analytics",
      year: 2023,
      link: "#"
    },
    {
      title: "NLP Applications for Automated Grading Systems",
      authors: "A. Raj, A. Raj",
      journal: "Conference on AI in Education",
      year: 2022,
      link: "#"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our work is grounded in rigorous research and academic publications
            in the field of educational technology and artificial intelligence.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Publications</h3>
              </div>
              
              <div className="space-y-6">
                {researchPapers.map((paper, index) => (
                  <div 
                    key={index}
                    className="border-l-4 border-blue-600 pl-4 py-1 opacity-0 transform translate-y-8 transition-all duration-700"
                    style={{
                      animationName: 'fadeInUp',
                      animationDuration: '0.7s',
                      animationDelay: `${index * 0.15}s`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{paper.title}</h4>
                    <p className="text-gray-600 mb-1">{paper.authors}</p>
                    <p className="text-gray-500 text-sm">
                      {paper.journal}, {paper.year}
                    </p>
                    <a 
                      href={paper.link}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block"
                    >
                      Read Paper →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;