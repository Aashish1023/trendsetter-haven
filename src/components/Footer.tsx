
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">
              <span className="text-turquoise">LARAVEL</span>
              <span className="text-violet">FASHION</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Cultivating creative minds and preparing the next generation of fashion industry leaders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-turquoise transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-turquoise transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-turquoise transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-turquoise transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-turquoise transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-turquoise transition-colors">Programs</a></li>
              <li><a href="#faculty" className="text-gray-400 hover:text-turquoise transition-colors">Faculty</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-turquoise transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-turquoise transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-turquoise transition-colors">Admissions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-turquoise transition-colors">Financial Aid</a></li>
              <li><a href="#" className="text-gray-400 hover:text-turquoise transition-colors">Career Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-turquoise transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-turquoise transition-colors">Alumni Network</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Join our newsletter to stay updated on events, workshops, and admissions.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-turquoise text-white"
                placeholder="Your email address"
              />
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-turquoise to-violet rounded-md font-bold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-800 my-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Laravel Fashion Institute. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-turquoise transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-turquoise transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-turquoise transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
