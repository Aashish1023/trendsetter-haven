
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-turquoise/10 to-violet/10 -skew-y-6 transform-gpu z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-underline">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs or admissions? We're here to help you on your fashion journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-heading">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="bg-turquoise/20 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-turquoise" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-gray-600">123 Fashion Avenue, Style District, Laravel City, LC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-violet/20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-violet" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone Number</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-turquoise/20 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-turquoise" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Address</h4>
                  <p className="text-gray-600">admissions@laravelfashion.edu</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-violet/20 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-violet" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Office Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Upcoming Information Sessions</h4>
              <ul className="space-y-4">
                <li className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium">Virtual Open House</span>
                  <span className="text-violet">June 15, 2023</span>
                </li>
                <li className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium">Campus Tour</span>
                  <span className="text-violet">July 10, 2023</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Portfolio Workshop</span>
                  <span className="text-violet">August 5, 2023</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-turquoise"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-turquoise"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block mb-2 font-medium">I'm interested in</label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-turquoise appearance-none bg-white"
                >
                  <option value="">Select a program</option>
                  <option value="fashion-design">Fashion Design</option>
                  <option value="fashion-marketing">Fashion Marketing</option>
                  <option value="textile-innovation">Textile Innovation</option>
                  <option value="fashion-merchandising">Fashion Merchandising</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-turquoise"
                  placeholder="Tell us about your interests or questions"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">Submit Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
