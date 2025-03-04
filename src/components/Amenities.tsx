import React from 'react';

const AmenityCard = ({ image, title }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <h3 className="text-white font-semibold text-xl p-6">{title}</h3>
      </div>
    </div>
  );
};

const Amenities = () => {
  const amenities = [
    {
      title: "State-of-the-art Fitness Center",
      image: "images/gymm.jpg"
    },
    {
      title: "Swimming Pool",
      image: "https://i.ibb.co/0j64x8nc/pool.jpg"
    },
    {
      title: "Multipurpose Hall",
      image: "images/hall.jpg"
    },
    {
      title: "Rooftop Terrace",
      image: "images/Terrace_A.jpg"
    },
    {
      title: "Ladies-Gym",
      image: "images/gym.jpg"
    },
    {
      title: "Children's Play Area",
      image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Premium Amenities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enjoy a wide range of world-class amenities designed for your comfort and convenience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <AmenityCard 
              key={index}
              image={amenity.image}
              title={amenity.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;