import React from "react";

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-image"></div>
      <div className="hero-gradient-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to FitZone</h1>
        <p>Transform Your Body, Transform Your Life</p>
        <a href="#about" className="hero-btn">Learn More</a>
      </div>
    </section>
  );
}

export default HeroSection;