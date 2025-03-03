import React, { useState } from 'react';

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState('1BHK');

  const floorPlans = {
    '1BHK': {
      image: 'src/images/1bk.jpg',
      title: '1 Bedroom Apartment',
      size: '650-750 sq ft',
      features: [
        'Spacious living room',
        'Modern kitchen with premium appliances',
        'Luxurious bathroom',
        'Private balcony'
      ]
    },
    '2BHK': {
      image: 'src/images/2bk.jpg',
      title: '2 Bedroom Apartment',
      size: '950-1100 sq ft',
      features: [
        'Master bedroom with en-suite bathroom',
        'Second bedroom with ample storage',
        'Spacious living and dining area',
        'Modern kitchen with island',
        'Private balcony with city views'
      ]
    },
    '3BHK': {
      image: 'src/images/3bk.jpg',
      title: '3 Bedroom Apartment',
      size: '1300-1500 sq ft',
      features: [
        'Master bedroom with walk-in closet and en-suite bathroom',
        'Two additional bedrooms with shared bathroom',
        'Expansive living and dining area',
        'Gourmet kitchen with premium appliances',
        'Multiple balconies with panoramic views',
        'Dedicated home office space'
      ]
    }
  };

  const tabs = [
    { id: '1BHK', label: '1 BHK' },
    { id: '2BHK', label: '2 BHK' },
    { id: '3BHK', label: '3 BHK' }
  ];

  return (
    <section id="floor-plans" className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#c95e4e] mb-4">
        Floor Plans
      </h2>
      <p className="text-[#c95e4e] max-w-2xl mx-auto">
        Explore our thoughtfully designed floor plans to find your perfect home
      </p>
    </div>

    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-md shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? 'bg-[#c95e4e] text-white'
                : 'bg-white text-[#c95e4e] hover:bg-gray-50'
            } ${
              tab.id === '1BHK' ? 'rounded-l-md' : ''
            } ${
              tab.id === '3BHK' ? 'rounded-r-md' : ''
            } border border-[#c95e4e]`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="bg-gray-100 p-4 rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
        <img
          src={floorPlans[activeTab].image}
          alt={`${floorPlans[activeTab].title} floor plan`}
          className="w-full h-auto object-cover rounded shadow-md hover:shadow-xl transition-shadow duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-bold text-[#c95e4e] mb-2">
          {floorPlans[activeTab].title}
        </h3>
        <p className="text-[#c95e4e] font-semibold mb-4">
          {floorPlans[activeTab].size}
        </p>

        <h4 className="text-lg font-semibold text-[#c95e4e] mb-3">Features:</h4>
        <ul className="space-y-2">
          {floorPlans[activeTab].features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#c95e4e] mr-2">•</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="mt-8 bg-[#c95e4e] hover:bg-[#b14e40] text-white font-medium px-6 py-3 rounded-md transition-colors duration-300">
          Download Floor Plan
        </button>
      </div>
    </div>
  </div>
</section>

  );
};

export default FloorPlans;