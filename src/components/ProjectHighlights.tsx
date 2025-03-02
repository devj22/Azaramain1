import React from 'react';
import { Shield, Home, Leaf, Wifi, MapPin, Zap } from 'lucide-react';

const HighlightCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProjectHighlights = () => {
  const highlights = [
    {
      icon: <Shield size={32} />,
      title: "24/7 Security",
      description: "Round-the-clock security personnel and advanced surveillance systems for your peace of mind."
    },
    {
      icon: <Home size={32} />,
      title: "Modern Design",
      description: "Contemporary architecture with premium finishes and thoughtfully designed living spaces."
    },
    {
      icon: <Leaf size={32} />,
      title: "Green Spaces",
      description: "Beautifully landscaped gardens and outdoor areas for relaxation and recreation."
    },
    {
      icon: <Wifi size={32} />,
      title: "Smart Living",
      description: "Smart home features integrated throughout for convenience and modern lifestyle."
    },
    {
      icon: <MapPin size={32} />,
      title: "Prime Location",
      description: "Strategically located with easy access to business districts, shopping, and entertainment."
    },
    {
      icon: <Zap size={32} />,
      title: "Energy Efficient",
      description: "Sustainable design with energy-efficient appliances and systems to reduce environmental impact."
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
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