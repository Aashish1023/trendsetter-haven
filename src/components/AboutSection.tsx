
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-turquoise/10 to-violet/10 skew-y-6 transform-gpu z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-underline">
            About Laravel Fashion Institute
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Where art meets innovation and tradition inspires the future of fashion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-[80%] mx-auto aspect-square relative z-10">
              <div className="absolute w-full h-full bg-turquoise/20 rounded-tl-[80px] rounded-br-[80px] top-6 left-6"></div>
              <div className="absolute w-full h-full bg-violet/20 rounded-tr-[80px] rounded-bl-[80px] -top-6 -left-6"></div>
              <div className="absolute w-full h-full overflow-hidden rounded-[20px] z-20">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                  alt="Fashion Institute Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-heading">Our Journey of Excellence</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2005, Laravel Fashion Institute has been at the forefront of fashion education, combining traditional techniques with cutting-edge innovation. Our institute was born from a passion to nurture creative talent and develop industry-ready professionals.
            </p>
            <p className="text-gray-600 mb-8">
              Today, we stand proud as one of the premier fashion education destinations, with a global network of alumni making their mark in the fashion world. Our commitment to excellence, sustainable practices, and forward-thinking approaches sets us apart.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-turquoise/5 to-turquoise/20 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Our Vision</h4>
                <p className="text-gray-600">To foster a new generation of sustainable, innovative fashion leaders</p>
              </div>
              <div className="bg-gradient-to-br from-violet/5 to-violet/20 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Our Mission</h4>
                <p className="text-gray-600">To provide world-class education that balances creativity with commercial awareness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
