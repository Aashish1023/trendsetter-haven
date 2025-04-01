
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const newsAndEvents = [
  {
    id: 1,
    type: "event",
    title: "Annual Fashion Show 2023",
    description: "Join us for our spectacular annual fashion show featuring designs by our talented graduating students. A night of creativity, innovation, and style.",
    date: "June 15, 2023",
    time: "6:00 PM - 9:00 PM",
    location: "Main Campus Auditorium",
    image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 2,
    type: "news",
    title: "Fashion Institute Partners with Leading Sustainable Brands",
    description: "We're excited to announce our new partnership with top sustainable fashion brands to promote eco-friendly practices in fashion education.",
    date: "May 10, 2023",
    image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 3,
    type: "event",
    title: "Workshop: Digital Fashion Design with AI",
    description: "Learn how artificial intelligence is transforming fashion design in this hands-on workshop led by industry experts.",
    date: "July 8, 2023",
    time: "10:00 AM - 3:00 PM",
    location: "Design Lab, East Wing",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 4,
    type: "news",
    title: "Fashion Institute Graduates Win International Design Competition",
    description: "Three of our recent graduates have taken top honors at the prestigious International Young Designers Competition in Milan.",
    date: "April 27, 2023",
    image: "https://images.unsplash.com/photo-1459682687441-7761439a709d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 5,
    type: "event",
    title: "Guest Lecture: The Future of Fashion Retail",
    description: "Join renowned retail strategist Maria Chen for an insightful lecture on evolving consumer behaviors and the future of fashion retail.",
    date: "August 12, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Lecture Hall B",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 6,
    type: "news",
    title: "New Fashion Technology Lab Opening Next Semester",
    description: "We're excited to announce the opening of our state-of-the-art Fashion Technology Lab, featuring the latest in digital design tools and 3D printing.",
    date: "May 5, 2023",
    image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80"
  }
];

const NewsEventCard = ({ item }) => {
  const isEvent = item.type === "event";
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-56 overflow-hidden relative">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-violet text-white px-3 py-1 rounded-full text-sm font-medium">
          {isEvent ? 'Event' : 'News'}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{item.date}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 hover:text-violet transition-colors">{item.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
        
        {isEvent && (
          <div className="mb-4 space-y-2">
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              <span>{item.time}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{item.location}</span>
            </div>
          </div>
        )}
        
        <button className="flex items-center text-violet font-semibold hover:text-turquoise transition-colors group">
          {isEvent ? 'View Details' : 'Read More'} 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const NewsEvents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 heading-underline">
                News & Events
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest news and upcoming events at our fashion institute
              </p>
            </div>
            
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-gray-100 rounded-lg p-1">
                <button className="px-4 py-2 rounded-md bg-violet text-white">All</button>
                <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200">News</button>
                <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200">Events</button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsAndEvents.map(item => (
                <NewsEventCard key={item.id} item={item} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="btn-primary">Load More</button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsEvents;
