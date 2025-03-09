import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectHighlights from './components/ProjectHighlights';
import FloorPlans from './components/FloorPlans';
import ParallaxSection from './components/ParallaxSection';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FixedWhatsAppButton from './components/FixedWhatsAppButton';

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProjectHighlights />
        <FloorPlans />
        <ParallaxSection />
        <Amenities />
        <Location />
        <Gallery />
        {/* Render the contact section */}
        <Contact />
      </main>
      <Footer />
      <FixedWhatsAppButton />

      {/* Fixed button positioned on the left side */}
      <button 
        onClick={scrollToContact}
        className="fixed bottom-4 left-4 bg-[#c95e4e] text-white p-4 rounded-full shadow-lg z-50"
      >
        Contact Us
      </button>
    </div>
  );
}

export default App;
