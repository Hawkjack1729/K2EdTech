import React from 'react';
import Button from '../components/Button';
import { Download, Calendar, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Education?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover how EdTech AI can revolutionize your educational institution with our
            intelligent solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Download className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Full Report</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Download our comprehensive research report with detailed analysis
                    and implementation strategies.
                  </p>
                  <Button variant="primary" className="w-full flex items-center justify-center">
                    Download Report <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Calendar className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Live Demo</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Schedule a personalized demonstration of our AI solutions
                    tailored to your institution's needs.
                  </p>
                  <Button variant="secondary" className="w-full flex items-center justify-center">
                    Schedule Demo <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;