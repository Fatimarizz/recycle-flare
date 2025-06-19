import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, Play, Star, Zap, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 pt-16 pb-12"
    >
      {/* Dynamic Background with Mouse Follow */}
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.15), transparent 40%)`
        }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-transparent to-blue-600/10 animate-pulse"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              <span className="mr-2">🚀</span>
              Leading Sustainable Solutions
              <span className="ml-2">🌱</span>
            </div>
            
            {/* Main Heading with Typing Effect */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Transform</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 animate-pulse">
                  Your Waste
                </span>
                <span className="block">Into Value</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Professional recycling solutions that <span className="text-green-400 font-semibold">save money</span> and 
                <span className="text-emerald-400 font-semibold"> protect the planet</span>
              </p>
            </div>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToAbout}
                className="group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center justify-center hover:scale-105">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                  <span className="inline-block animate-bounce" style={{animationDelay: '0s'}}>5</span>
                  <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>0</span>
                  <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>0</span>
                  <span className="inline-block animate-bounce" style={{animationDelay: '0.3s'}}>+</span>
                </div>
                <div className="text-sm text-gray-400">Businesses Served</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="inline-block animate-pulse">9</span>
                  <span className="inline-block animate-pulse" style={{animationDelay: '0.2s'}}>5</span>
                  <span className="inline-block animate-pulse" style={{animationDelay: '0.4s'}}>%</span>
                </div>
                <div className="text-sm text-gray-400">Recycling Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="inline-block animate-spin" style={{animationDuration: '2s'}}>2</span>
                  <span className="inline-block animate-spin" style={{animationDuration: '2s', animationDelay: '0.5s'}}>4</span>
                  <span className="inline-block animate-spin" style={{animationDuration: '2s', animationDelay: '1s'}}>/</span>
                  <span className="inline-block animate-spin" style={{animationDuration: '2s', animationDelay: '1.5s'}}>7</span>
                </div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Interactive Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 transform hover:scale-105">
                <div className="space-y-6">
                  {/* Feature Cards with Hover Effects */}
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-transparent hover:from-green-500/30 transition-all duration-300 transform hover:translate-x-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Premium Service</h3>
                      <p className="text-gray-300 text-sm">Top-tier recycling solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-transparent hover:from-blue-500/30 transition-all duration-300 transform hover:translate-x-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Growing Impact</h3>
                      <p className="text-gray-300 text-sm">Expanding nationwide reach</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-transparent hover:from-purple-500/30 transition-all duration-300 transform hover:translate-x-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Lightning Fast</h3>
                      <p className="text-gray-300 text-sm">Quick turnaround times</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements with Mouse Interaction */}
              <div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/30 rounded-full blur-xl animate-pulse"
                style={{
                  transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`
                }}
              ></div>
              <div 
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"
                style={{
                  transform: `translate(${(mousePosition.x - window.innerWidth / 2) * -0.02}px, ${(mousePosition.y - window.innerHeight / 2) * -0.02}px)`
                }}
              ></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/50 via-transparent to-emerald-500/50 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mt-2 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 border-l-2 border-t-2 border-green-400/30 rounded-tl-3xl"></div>
      <div className="absolute top-20 right-10 w-20 h-20 border-r-2 border-t-2 border-emerald-400/30 rounded-tr-3xl"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 border-l-2 border-b-2 border-cyan-400/30 rounded-bl-3xl"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border-r-2 border-b-2 border-blue-400/30 rounded-br-3xl"></div>
    </section>
  );
};

export default HeroSection;
