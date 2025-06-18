
import React from 'react';
import { Recycle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">Recycle Flare</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Recycle Flare, we're dedicated to creating a sustainable future through innovative 
              recycling solutions. Our mission is to transform waste into valuable resources while 
              protecting our environment for future generations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience in the recycling industry, we provide comprehensive waste 
              management services that help businesses and communities reduce their environmental 
              footprint while achieving their sustainability goals.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Our Commitment</h3>
                <p className="text-gray-600">100% sustainable practices</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <Recycle className="w-32 h-32 text-green-500 mx-auto mb-6 animate-spin" style={{animationDuration: '8s'}} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Eco-Friendly</h3>
                  <p className="text-gray-600">Sustainable solutions for a better tomorrow</p>
                </div>
              </div>
            </div>

          </div>

          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
