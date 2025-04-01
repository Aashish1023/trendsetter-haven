
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-turquoise/10 to-violet/10 -skew-y-6 transform-gpu z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center min-h-screen">
        <div className="z-10 pt-12 md:pt-0">
          <span className="inline-block py-1 px-3 bg-gradient-to-r from-turquoise/20 to-violet/20 text-gray-800 rounded-full mb-6 animate-float">
            Inspire Your Fashion Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-heading">Unleash Your</span>
            <br />
            Creative Potential
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            At Laravel Fashion Institute, we cultivate talent, foster innovation, and prepare the next generation of fashion leaders with cutting-edge education.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Explore Programs</button>
            <button className="btn-secondary">Take a Tour</button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-turquoise">15+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-violet">50+</p>
              <p className="text-gray-600">Industry Experts</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-turquoise">92%</p>
              <p className="text-gray-600">Job Placement</p>
            </div>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-r from-turquoise/90 to-violet/90 rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Fashion Student Working" 
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-turquoise animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-violet animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
