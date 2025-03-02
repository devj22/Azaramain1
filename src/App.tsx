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

function App() {
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
    </div>
  );
}

export default App;