// src/App.js

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TrainersSection from './components/TrainersSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { initializeAnimations } from './components/animations';
import './index.css'; 

function App() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrainersSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;