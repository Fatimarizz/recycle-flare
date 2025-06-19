
import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Flare Recycling</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading the way in sustainable waste management solutions for a cleaner, 
              greener future. Sustain Today, Secure Tomorrow.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@recycleflare.com" 
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>E-waste Collection</li>
              <li>Plastic Recycling</li>
              <li>Commercial Waste</li>
              <li>Paper Recycling</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Flare Recycling LTD. All rights reserved. | Sustain Today, Secure Tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
