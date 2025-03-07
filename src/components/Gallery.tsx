import React, { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'interior', label: 'Interior' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'lobby', label: 'Lobby' },
    { id: 'terrace', label: 'Terrace' }
  ];
  
  const galleryItems = [
    {
      id: 1,
      image: 'https://i.ibb.co/WvYjW170/Screenshot-2025-03-05-at-6-32-04-PM.png',
      category: 'exterior',
      title: 'Building Exterior - Day View'
    },
    {
      id: 2,
      image: 'https://i.ibb.co/BHcnxSML/Screenshot-2025-03-05-at-6-20-41-PM.png',
      category: 'exterior',
      title: 'Building Exterior - Night View'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      category: 'lobby',
      title: 'Main Lobby'
    },
    {
      id: 4,
      image: 'https://i.ibb.co/HT0xYDHj/0009.jpg',
      category: 'lobby',
      title: 'Reception Area'
    },
    {
      id: 5,
      image: 'https://i.ibb.co/CpdpKbB8/00012.jpg',
      category: 'amenities',
      title: 'Swimming Pool'
    },
    {
      id: 6,
      image: 'https://i.ibb.co/cXDJXLgH/00011.jpg',
      category: 'amenities',
      title: 'Fitness Center'
    },
    {
      id: 7,
      image: 'https://i.ibb.co/vxgxY1pN/00014.jpg',
      category: 'terrace',
      title: 'Rooftop Terrace'
    },
    {
      id: 8,
      image: 'https://i.ibb.co/xt15jg0R/0008.jpg',
      category: 'interior',
      title: 'Living Room'
    },
    {
      id: 9,
      image: 'https://i.ibb.co/FkpjtT7H/0005.jpg',
      category: 'interior',
      title: 'Bedroom'
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Take a visual tour of our stunning property
      </p>
    </div>
    
    {/* Filter Buttons */}
    <div className="flex flex-wrap justify-center mb-10">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === filter.id
                ? 'bg-[#c95e4e] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
    
    {/* Gallery Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <div 
          key={item.id} 
          className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
        >
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6">
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-300 text-sm capitalize">{item.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Gallery;