import React, { useEffect, useRef, useState } from 'react';
import { Recycle, Truck, Leaf, Zap, Shield, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
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

  const services = [
    {
      icon: Recycle,
      title: "Waste Collection",
      description: "Comprehensive waste collection services for businesses of all sizes",
      features: ["Scheduled pickups", "Flexible timing", "Real-time tracking"],
      color: "from-green-500 to-emerald-500",
      delay: 0
    },
    {
      icon: Truck,
      title: "Transportation",
      description: "Efficient and eco-friendly transportation to processing facilities",
      features: ["GPS tracking", "Eco-friendly fleet", "24/7 monitoring"],
      color: "from-blue-500 to-cyan-500",
      delay: 200
    },
    {
      icon: Leaf,
      title: "Processing",
      description: "Advanced processing technology for maximum material recovery",
      features: ["State-of-the-art equipment", "High recovery rates", "Quality control"],
      color: "from-emerald-500 to-teal-500",
      delay: 400
    },
    {
      icon: Zap,
      title: "Energy Recovery",
      description: "Converting waste to energy through innovative technologies",
      features: ["Renewable energy", "Carbon reduction", "Efficiency optimization"],
      color: "from-yellow-500 to-orange-500",
      delay: 600
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "Ensuring full regulatory compliance and environmental standards",
      features: ["Regulatory expertise", "Audit support", "Documentation"],
      color: "from-purple-500 to-pink-500",
      delay: 800
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Data-driven insights to optimize your recycling program",
      features: ["Performance metrics", "Cost analysis", "Sustainability reporting"],
      color: "from-indigo-500 to-blue-500",
      delay: 1000
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Recycling Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From collection to processing, we provide end-to-end recycling services 
            that help businesses reduce waste and environmental impact
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${service.delay}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '1200ms'}}>
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-6 opacity-90">
                Let's discuss how we can help your business become more sustainable
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Get Free Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
