import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("images/main.jpg")' 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Elevate Your Living Experience
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Luxury apartments designed for modern living in the heart of the city
        </p>
        <a 
  href="#highlights" 
  className="inline-block bg-[#c95e4e] hover:bg-[#a74c3f] text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
>
  Explore Now
</a>


      </div>
      
      <a 
        href="#highlights" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;