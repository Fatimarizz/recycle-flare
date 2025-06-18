
import React from 'react';
import { Recycle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'E-waste Collection',
      description: 'Safe and secure collection of electronic waste including computers, phones, and appliances.',
      icon: '💻'
    },
    {
      title: 'Plastic Recycling',
      description: 'Advanced plastic recycling processes to transform waste into new products.',
      icon: '♻️'
    },
    {
      title: 'Commercial Waste Management',
      description: 'Comprehensive waste management solutions for businesses of all sizes.',
      icon: '🏢'
    },
    {
      title: 'Paper & Cardboard Recycling',
      description: 'Efficient processing of paper waste to create new paper products.',
      icon: '📄'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive recycling solutions tailored to meet your environmental goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 h-1 bg-green-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
