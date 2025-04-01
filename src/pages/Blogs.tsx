
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "2023 Fashion Trends That Will Dominate the Industry",
    excerpt: "Discover the emerging fashion trends that are set to take the industry by storm in 2023, from sustainable fashion to bold colors and patterns.",
    date: "May 15, 2023",
    author: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Trends"
  },
  {
    id: 2,
    title: "The Art of Pattern Making: A Comprehensive Guide",
    excerpt: "Learn the foundations of pattern making and how this essential skill is used to create garments that fit perfectly and flow gracefully.",
    date: "April 22, 2023",
    author: "Marcus Chen",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Education"
  },
  {
    id: 3,
    title: "Sustainable Fashion: Creating an Eco-Friendly Wardrobe",
    excerpt: "Explore how sustainable practices are revolutionizing the fashion industry and learn how to build an environmentally conscious wardrobe.",
    date: "March 10, 2023",
    author: "Sophia Williams",
    image: "https://images.unsplash.com/photo-1532453288649-b9c244dbe2fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Sustainability"
  },
  {
    id: 4,
    title: "Fashion Photography: Capturing the Perfect Shot",
    excerpt: "Tips and techniques from professional fashion photographers on how to compose, light, and edit stunning fashion photography.",
    date: "February 5, 2023",
    author: "James Wilson",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Photography"
  },
  {
    id: 5,
    title: "From Sketch to Runway: The Fashion Design Process",
    excerpt: "An inside look at the journey a design takes from the initial concept sketch to the final presentation on the runway.",
    date: "January 17, 2023",
    author: "Olivia Kim",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    category: "Design"
  },
  {
    id: 6,
    title: "Fashion Business: Starting Your Own Label",
    excerpt: "Essential advice for aspiring designers looking to launch their own fashion brand in today's competitive market.",
    date: "December 3, 2022",
    author: "David Thompson",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    category: "Business"
  }
];

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-56 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-turquoise text-white text-xs rounded-full mb-3">
          {blog.category}
        </span>
        <h3 className="text-xl font-bold mb-3 hover:text-violet transition-colors">{blog.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Calendar className="w-4 h-4 mr-1" />
          <span className="mr-4">{blog.date}</span>
          <User className="w-4 h-4 mr-1" />
          <span>{blog.author}</span>
        </div>
        <button className="flex items-center text-violet font-semibold hover:text-turquoise transition-colors group">
          Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 heading-underline">
                Fashion Institute Blog
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Stay up-to-date with the latest trends, techniques, and insights from our fashion experts
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="btn-primary">Load More Articles</button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;
