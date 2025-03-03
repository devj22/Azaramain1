import React from 'react';
import { Building2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="h-8 w-8 text-white" />
          <span className="font-bold text-xl">Azara</span>
        </div>
        <p className="text-white mb-6">
          Luxury apartments designed for modern living in the heart of the city.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:opacity-80 transition-opacity duration-300">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-white hover:opacity-80 transition-opacity duration-300">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-white hover:opacity-80 transition-opacity duration-300">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white hover:opacity-80 transition-opacity duration-300">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#home" className="text-white hover:opacity-80 transition-opacity duration-300">Home</a></li>
          <li><a href="#highlights" className="text-white hover:opacity-80 transition-opacity duration-300">Project Highlights</a></li>
          <li><a href="#floor-plans" className="text-white hover:opacity-80 transition-opacity duration-300">Floor Plans</a></li>
          <li><a href="#amenities" className="text-white hover:opacity-80 transition-opacity duration-300">Amenities</a></li>
          <li><a href="#gallery" className="text-white hover:opacity-80 transition-opacity duration-300">Gallery</a></li>
          <li><a href="#contact" className="text-white hover:opacity-80 transition-opacity duration-300">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span className="text-white">123 Luxury Avenue, Downtown District, New York, NY 10001</span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span className="text-white">+1 (555) 123-4567</span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span className="text-white">info@luxeliving.com</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
        <p className="text-white mb-4">
          Subscribe to our newsletter for updates on new properties and exclusive offers.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 bg-[#b34f42] text-white border border-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-white w-full"
          />
          <button
            type="submit"
            className="bg-white text-[#c95e4e] hover:bg-gray-100 px-4 py-2 rounded-r-md transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="border-t border-white pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-white text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Luxe Living. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:opacity-80 text-sm transition-opacity duration-300">Privacy Policy</a>
          <a href="#" className="text-white hover:opacity-80 text-sm transition-opacity duration-300">Terms of Service</a>
          <a href="#" className="text-white hover:opacity-80 text-sm transition-opacity duration-300">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;