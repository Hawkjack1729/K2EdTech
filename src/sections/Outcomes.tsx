import React from 'react';
import StatCard from '../components/StatCard';

const Outcomes: React.FC = () => {
  const stats = [
    {
      title: "Workload Reduction",
      value: 60,
      suffix: "%",
      description: "Decrease in administrative tasks for educators"
    },
    {
      title: "Query Resolution",
      value: 87.8,
      suffix: "%",
      description: "Student questions answered automatically without human intervention"
    },
    {
      title: "Learning Improvement",
      value: 23,
      suffix: "%",
      description: "Increase in student performance metrics after implementation"
    },
    {
      title: "User Satisfaction",
      value: 92,
      suffix: "%",
      description: "Positive feedback from students and educators"
    }
  ];

  return (
    <section id="outcomes" className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Measurable Impact
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our intelligent solutions deliver significant, quantifiable improvements
            in educational outcomes and efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              suffix={stat.suffix}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;