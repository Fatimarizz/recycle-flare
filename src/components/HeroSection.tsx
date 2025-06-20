import React, { useEffect, useRef, useState } from 'react';
import { Recycle, ArrowRight, CheckCircle, Globe, Package, Scissors, Zap, Leaf, Truck, Shield, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50"
    >
      {/* Background Animation Effects */}
      <div className="absolute inset-0">
        {/* Animated Particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <Recycle className="w-6 h-6" />
            </div>
          ))}
        </div>

        {/* Gradient Orbs */}
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x - 150}px`,
            top: `${mousePosition.y - 150}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-20 right-20 w-60 h-60 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Content */}
          <div className={`transition-all duration-1000 order-1 lg:order-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 mt-4 bg-green-100 border border-green-200 rounded-full text-green-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-pulse">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              ♻️ Sustainable Waste Solutions
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Transform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Waste into Value
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Professional recycling services that turn your waste into valuable resources. 
              Join the circular economy with our innovative solutions.
            </p>

            {/* Quick Features */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {[
                { icon: Package, text: "Paper & Cardboard", color: "text-blue-500" },
                { icon: Scissors, text: "Plastic & Metal", color: "text-green-500" },
                { icon: Zap, text: "Electronics", color: "text-purple-500" },
                { icon: Leaf, text: "Organic Waste", color: "text-emerald-500" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-sm transition-all duration-300 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <IconComponent className={`w-3 h-3 sm:w-4 sm:h-4 ${item.color}`} />
                    <span className="text-gray-700 font-medium text-xs sm:text-sm">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-base sm:text-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                <Recycle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Start Recycling</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group bg-white/80 backdrop-blur-sm text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-base sm:text-lg border-2 border-gray-200 hover:bg-white hover:border-green-300 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              </button>
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className={`transition-all duration-1000 order-2 lg:order-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative w-full max-w-lg mx-auto">
                {/* Central Recycling Hub */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl animate-pulse relative">
                  <Recycle className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-white animate-spin" style={{animationDuration: '8s'}} />
                  
                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '12s'}}>
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <Package className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="absolute top-1/2 -right-3 sm:-right-4 transform -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <Scissors className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="absolute top-1/2 -left-3 sm:-left-4 transform -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Process Flow Lines */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 300 300">
                    <defs>
                      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M150 50 Q200 100 250 150 Q200 200 150 250 Q100 200 50 150 Q100 100 150 50"
                      fill="none"
                      stroke="url(#flowGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/10 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-emerald-400/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-400/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;