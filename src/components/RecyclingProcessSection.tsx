import React, { useEffect, useRef, useState } from 'react';
import { Truck, Scissors, Recycle, Package, CheckCircle } from 'lucide-react';

const RecyclingProcessSection = () => {
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

  const processSteps = [
    {
      icon: Truck,
      title: "Collection",
      description: "We collect waste from your location with our specialized fleet",
      animation: "animate-bounce",
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: Scissors,
      title: "Sorting & Cutting",
      description: "Materials are sorted and cut into manageable pieces",
      animation: "animate-pulse",
      color: "from-green-500 to-emerald-500",
      delay: 200
    },
    {
      icon: Recycle,
      title: "Processing",
      description: "Advanced machinery transforms waste into raw materials",
      animation: "animate-spin",
      color: "from-purple-500 to-pink-500",
      delay: 400
    },
    {
      icon: Package,
      title: "Packaging",
      description: "Processed materials are packaged for reuse",
      animation: "animate-bounce",
      color: "from-orange-500 to-red-500",
      delay: 600
    },
    {
      icon: CheckCircle,
      title: "Quality Check",
      description: "Final quality assurance before delivery",
      animation: "animate-pulse",
      color: "from-emerald-500 to-green-500",
      delay: 800
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Our Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How We
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Transform Waste
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive recycling process ensures maximum efficiency and environmental impact
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className={`relative text-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${step.delay}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${step.animation}`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{transitionDelay: '600ms'}}>
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Recycling?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join hundreds of businesses already making a difference
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecyclingProcessSection; 