import React from 'react';

const ParallaxSection = () => {
  return (
    <section className="relative h-96 md:h-[500px] bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ 
        backgroundImage: 'url("https://i.ibb.co/Spw6fpg/par.jpg")' 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Experience Luxury Living at Its Finest
        </h2>
        <p className="text-xl text-gray-100">
          Where every detail is crafted for your comfort and convenience
        </p>
      </div>
    </section>
  );
};

export default ParallaxSection;