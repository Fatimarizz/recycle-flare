import React, { useEffect, useRef, useState } from 'react';
import { Recycle, Heart, Target, TrendingUp, Truck } from 'lucide-react';


const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-br from-white via-green-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className={`inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          About Us
        </div>

        {/* Main Heading */}
        <h2 className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          We're Building the
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
            Future of Recycling
          </span>
        </h2>

        {/* Description */}
        <p className={`text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          A passionate startup team dedicated to revolutionizing waste management.
          We believe every piece of waste has value waiting to be unlocked.
          Join us in creating a sustainable future, one innovation at a time.
        </p>
        {/* Bottom Process Steps */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { icon: Truck, text: "Collect", color: "from-blue-500 to-cyan-500" },
            { icon: Recycle, text: "Process", color: "from-green-500 to-emerald-500" },
            { icon: TrendingUp, text: "Transform", color: "from-emerald-500 to-teal-500" }
          ].map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-gray-200/50 transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-700">{step.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
