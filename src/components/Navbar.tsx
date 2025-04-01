
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold font-playfair">
            <span className="text-turquoise">LARAVEL</span>
            <span className="text-violet">FASHION</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-violet font-medium transition-colors">Home</a>
          <a href="#about" className="text-gray-800 hover:text-violet font-medium transition-colors">About</a>
          <a href="#programs" className="text-gray-800 hover:text-violet font-medium transition-colors">Programs</a>
          <a href="#faculty" className="text-gray-800 hover:text-violet font-medium transition-colors">Faculty</a>
          <a href="#gallery" className="text-gray-800 hover:text-violet font-medium transition-colors">Gallery</a>
          <a href="#contact" className="text-gray-800 hover:text-violet font-medium transition-colors">Contact</a>
        </div>

        <button className="hidden md:block btn-primary">Enroll Now</button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-gray-800 hover:text-violet font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-800 hover:text-violet font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#programs" 
              className="text-gray-800 hover:text-violet font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programs
            </a>
            <a 
              href="#faculty" 
              className="text-gray-800 hover:text-violet font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Faculty
            </a>
            <a 
              href="#gallery" 
              className="text-gray-800 hover:text-violet font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              className="text-gray-800 hover:text-violet font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button className="btn-primary w-full mt-4">Enroll Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
