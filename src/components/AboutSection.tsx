import React, { useEffect, useRef, useState } from 'react';
import { Recycle, Award, Users, Globe } from 'lucide-react';

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

  const features = [
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Industry-leading certifications and compliance standards",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of experience",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Contributing to worldwide sustainability goals",
      color: "from-purple-500 to-pink-500"
    }
  ];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-700 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              About Flare Recycling
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Pioneering
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Sustainable Solutions
                </span>
                for Tomorrow
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                At Flare Recycling, we're not just processing waste – we're transforming the future. 
                Our innovative approach combines cutting-edge technology with environmental responsibility 
                to create a circular economy that benefits both businesses and the planet.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                With over a decade of experience and a commitment to excellence, we've helped hundreds 
                of organizations reduce their environmental footprint while improving their bottom line.
              </p>
            </div>

          </div>
          
          {/* Right Column - Visual Element */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main Card */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              <div className="relative z-10 text-center text-white">
                {/* Animated Icon */}
                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
                  <Recycle className="w-16 h-16 text-white animate-spin" style={{animationDuration: '8s'}} />
                </div>
                
                <h3 className="text-3xl font-bold mb-4">Eco-Friendly Excellence</h3>
                <p className="text-lg opacity-90 mb-6">
                  Sustainable solutions for a better tomorrow
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold">2+</div>
                    <div className="text-sm opacity-80">Years Experience</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-80">Compliance</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
