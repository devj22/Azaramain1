import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectHighlights from "./components/ProjectHighlights";
import FloorPlans from "./components/FloorPlans";
import ParallaxSection from "./components/ParallaxSection";
import Amenities from "./components/Amenities";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FixedWhatsAppButton from "./components/FixedWhatsAppButton";
import PopupForm from "./components/PopupForm";

const App: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(true); // Changed to true to open on load

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
        <Contact />
      </main>
      <Footer />
      <FixedWhatsAppButton />

      {/* Contact Us button */}
      <button
        onClick={() => setPopupOpen(true)}
        className="fixed bottom-4 left-4 bg-[#c95e4e] text-white p-4 rounded-full shadow-lg z-50"
      >
        Contact Us
      </button>

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default App;
