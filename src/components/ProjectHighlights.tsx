import React from 'react';
import { Shield, Home, Leaf, Wifi, MapPin, Zap } from 'lucide-react';

const HighlightCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="text-[#c95e4e] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProjectHighlights = () => {
  const highlights = [
    {
      icon: <Shield size={32} color="#c95e4e" />,
      title: "24/7 Security",
      description: "Round-the-clock security personnel and advanced surveillance systems for your peace of mind."
    },
    {
      icon: <Home size={32} color="#c95e4e" />,
      title: "Modern Design",
      description: "Contemporary architecture with premium finishes and thoughtfully designed living spaces."
    },
    {
      icon: <Leaf size={32} color="#c95e4e" />,
      title: "Green Spaces",
      description: "Beautifully landscaped gardens and outdoor areas for relaxation and recreation."
    },
    {
      icon: <Wifi size={32} color="#c95e4e" />,
      title: "Smart Living",
      description: "Smart home features integrated throughout for convenience and modern lifestyle."
    },
    {
      icon: <MapPin size={32} color="#c95e4e" />,
      title: "Prime Location",
      description: "Strategically located with easy access to business districts, shopping, and entertainment."
    },
    {
      icon: <Zap size={32} color="#c95e4e" />,
      title: "Energy Efficient",
      description: "Sustainable design with energy-efficient appliances and systems to reduce environmental impact."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      {/* About Us Section */}
      <div id="about" className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            
            {/* Left Column (Image) */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
  <video 
    src="https://www.redstonegroup.in/public/uploads/projects_gallery/azara-residences-video.mp4" 
    controls 
    className="w-full h-auto rounded-lg shadow-md"
  >
    Your browser does not support the video tag.
  </video>
</div>

            
            {/* Right Column (Text) */}
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
              At Azara, we are dedicated to connecting you with the finest properties in Mazgaon. Our team specializes in both ready-to-move flats in Mazgaon and under-construction flats in Mazgaon. With deep local insights and a commitment to quality, we help you navigate through new residential projects in Mazgaon to find the home that best fits your needs.
Our core values of trust, transparency, and innovation ensure that every client experiences a seamless home-buying journey. Whether you’re a first-time buyer or looking for an investment opportunity, Azara stands as your reliable partner in Mazgaon real estate.

              </p>
              <p className="text-gray-600 leading-relaxed">
                Experience a new standard of living with our top-notch amenities, prime location, 
                and attentive service. We are committed to providing an unparalleled community 
                experience tailored to your lifestyle.
              </p>
              {/* Optional Button or Call-to-Action */}
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-block bg-[#c95e4e] text-white py-3 px-6 rounded-full font-medium hover:bg-opacity-90 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Highlights Section */}
      <div id="highlights" className="container mx-auto px-4 mt-8 md:mt-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Project Highlights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes our apartment complex the perfect place to call home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
