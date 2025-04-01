
import React from 'react';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: "Fashion Design",
    description: "Develop your creative identity through comprehensive training in design principles, pattern-making, and garment construction.",
    duration: "4 Years",
    level: "Bachelor's Degree",
    image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 2,
    title: "Fashion Marketing",
    description: "Learn to analyze trends, develop branding strategies, and create compelling marketing campaigns for fashion brands.",
    duration: "3 Years",
    level: "Bachelor's Degree",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80"
  },
  {
    id: 3,
    title: "Textile Innovation",
    description: "Explore sustainable materials, digital textile design, and innovative fabrication techniques for the future of fashion.",
    duration: "2 Years",
    level: "Master's Degree",
    image: "https://images.unsplash.com/photo-1502228213426-d4e9f2add0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 4,
    title: "Fashion Merchandising",
    description: "Master the business of fashion with courses on retail operations, supply chain management, and merchandising strategies.",
    duration: "3 Years",
    level: "Bachelor's Degree",
    image: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80"
  }
];

const ProgramCard = ({ program }) => {
  return (
    <div className="fashion-card group bg-white">
      <div className="relative overflow-hidden h-64">
        <img 
          src={program.image} 
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 p-6">
          <span className="inline-block px-3 py-1 bg-turquoise text-white text-sm rounded-full mb-2">
            {program.level}
          </span>
          <h3 className="text-xl font-bold text-white">{program.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500">{program.duration}</span>
          <span className="w-2 h-2 rounded-full bg-violet"></span>
        </div>
        <p className="text-gray-600 mb-6">{program.description}</p>
        <button className="flex items-center text-violet font-semibold hover:text-turquoise transition-colors group-hover:translate-x-1 duration-300">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-underline">
            Our Programs
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive education pathways designed to prepare you for a successful career in the fashion industry
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map(program => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn-primary">View All Programs</button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
