import React, { useState, useEffect } from 'react';

interface StatCardProps {
  title: string;
  value: number;
  suffix?: string;
  description: string;
  duration?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  suffix = '',
  description,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const current = document.getElementById(title.replace(/\s/g, ''));
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [title]);
  
  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const step = value / (duration / 16); // 16ms is roughly one frame at 60fps
    
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [inView, value, duration]);
  
  return (
    <div 
      id={title.replace(/\s/g, '')}
      className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
    >
      <h3 className="text-gray-600 font-medium text-lg mb-2">{title}</h3>
      <p className="text-4xl font-bold text-blue-600 mb-2">
        {count}{suffix}
      </p>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default StatCard;