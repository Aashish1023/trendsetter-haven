
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="flex items-center">
          <div className="h-14 mr-3">
            <img 
              src="/lovable-uploads/995d0b77-55b5-45f1-af81-ca4b66486928.png" 
              alt="NIFT Logo" 
              className="h-full object-contain filter drop-shadow-md"
            />
          </div>
          <span className="text-2xl font-bold font-playfair hidden sm:inline-block">
            <span className="text-turquoise">NIFT</span>
            <span className="text-violet">FASHION</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-violet font-medium transition-colors">Home</Link>
          <a href="#about" className="text-gray-800 hover:text-violet font-medium transition-colors">About</a>
          <a href="#programs" className="text-gray-800 hover:text-violet font-medium transition-colors">Courses</a>
          <a href="#faculty" className="text-gray-800 hover:text-violet font-medium transition-colors">Faculty</a>
          <a href="#gallery" className="text-gray-800 hover:text-violet font-medium transition-colors">Gallery</a>
          <Link to="/blogs" className="text-gray-800 hover:text-violet font-medium transition-colors">Blogs</Link>
          <Link to="/news-events" className="text-gray-800 hover:text-violet font-medium transition-colors">News & Events</Link>
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
            <Link 
              to="/" 
              className="text-gray-800 hover:text-violet font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
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
              Courses
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
            <Link 
              to="/blogs" 
              className="text-gray-800 hover:text-violet font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link 
              to="/news-events" 
              className="text-gray-800 hover:text-violet font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News & Events
            </Link>
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
