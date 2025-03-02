import React from 'react';
import { Clock, School, ShoppingBag, Utensils, Train, Guitar as Hospital } from 'lucide-react';

const LocationFeature = ({ icon, title, distance }) => {
  return (
    <div className="flex items-center space-x-3 mb-4">
      <div className="text-indigo-600">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{distance}</p>
      </div>
    </div>
  );
};

const Location = () => {
  const nearbyPlaces = [
    { icon: <ShoppingBag size={20} />, title: "Shopping Mall", distance: "5 minutes drive" },
    { icon: <School size={20} />, title: "International School", distance: "10 minutes drive" },
    { icon: <Hospital size={20} />, title: "Medical Center", distance: "7 minutes drive" },
    { icon: <Train size={20} />, title: "Metro Station", distance: "5 minutes walk" },
    { icon: <Utensils size={20} />, title: "Restaurants & Cafés", distance: "2 minutes walk" },
    { icon: <Clock size={20} />, title: "Business District", distance: "15 minutes drive" }
  ];

  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Prime Location</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategically located for convenience and accessibility
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] lg:h-[500px]">
            {/* This would be replaced with an actual Google Maps embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266754809!2d-73.98776692426385!3d40.75797623440235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
          
          <div className="p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nearby Facilities</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {nearbyPlaces.map((place, index) => (
                <LocationFeature 
                  key={index}
                  icon={place.icon}
                  title={place.title}
                  distance={place.distance}
                />
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
              <p className="text-gray-600 mb-4">
                123 Luxury Avenue, Downtown District<br />
                New York, NY 10001
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
              >
                Get Directions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;