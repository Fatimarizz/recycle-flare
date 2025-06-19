
import React from 'react';
import { Recycle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Eco-Friendly',
      description: 'Sustainable practices that protect our environment',
      color: 'bg-green-500'
    },
    {
      title: 'Trusted',
      description: 'Years of experience with proven results',
      color: 'bg-blue-500'
    },
    {
      title: 'Nationwide Service',
      description: 'Coverage across the entire country',
      color: 'bg-purple-500'
    },
    {
      title: 'Cost-Effective',
      description: 'Competitive pricing without compromising quality',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-green-600">Flare Recycling</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional recycling services with unmatched commitment to sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-20 h-20 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                <Recycle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of satisfied customers who trust us with their recycling needs
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
