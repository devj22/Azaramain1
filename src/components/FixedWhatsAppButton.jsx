import React from 'react';

const FixedWhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/+918169693894"  // Replace with your WhatsApp number including country code
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-12 h-12 flex items-center justify-center 
             bg-[#1BD742] 
             hover:bg-[#17c439] 
             rounded-full shadow-lg">
          <img
            src="https://i.pinimg.com/736x/bf/8a/76/bf8a76719f900b8757154eb3cfbc844a.jpg"
            alt="WhatsApp Logo"
            className="w-8 h-8 object-contain"
          />
        </button>
      </a>
    </div>
  );
};

export default FixedWhatsAppButton;
