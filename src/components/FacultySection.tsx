
import React from 'react';
import { Instagram, Linkedin, Globe } from 'lucide-react';

const faculty = [
  {
    id: 1,
    name: "Sophia Reynolds",
    role: "Department Head - Fashion Design",
    bio: "Former creative director at Haute Couture with over 15 years of industry experience.",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Professor - Textile Innovation",
    bio: "Award-winning textile designer specializing in sustainable and innovative materials.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 3,
    name: "Amara Patel",
    role: "Professor - Fashion Marketing",
    bio: "Digital marketing strategist with experience working with luxury fashion brands worldwide.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
  },
  {
    id: 4,
    name: "Julian Parker",
    role: "Professor - Fashion Merchandising",
    bio: "Former VP of Merchandising with expertise in global supply chain and retail operations.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80"
  }
];

const FacultyCard = ({ member }) => {
  return (
    <div className="fashion-card bg-white overflow-hidden group">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-6 w-full">
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-turquoise transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-turquoise transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-turquoise transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-violet font-medium mb-3">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </div>
  );
};

const FacultySection = () => {
  return (
    <section id="faculty" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-underline">
            Meet Our Faculty
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn from industry veterans and thought leaders who bring real-world experience to the classroom
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map(member => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn-secondary">View All Faculty</button>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
