
import React from 'react';

const galleryImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1783&q=80",
    category: "Student Work",
    title: "Spring Collection 2023"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80",
    category: "Campus Event",
    title: "Annual Fashion Show"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Student Work",
    title: "Urban Streetwear Project"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    category: "Campus",
    title: "Design Studio"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "Student Work",
    title: "Sustainable Fashion Collection"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Workshop",
    title: "Pattern Making Workshop"
  }
];

const GalleryItem = ({ item }) => {
  return (
    <div className="relative overflow-hidden group h-80 fashion-card">
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6">
          <span className="text-turquoise font-medium text-sm mb-2 block">{item.category}</span>
          <h3 className="text-white text-xl font-bold">{item.title}</h3>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 heading-underline">
            Student Gallery
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Showcasing the creativity and talent of our students through their innovative designs and projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map(item => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn-primary">View Full Gallery</button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
