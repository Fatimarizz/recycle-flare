import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import RecyclingProcessSection from '@/components/RecyclingProcessSection';
import BenefitsSection from '@/components/BenefitsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RecyclingProcessSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
