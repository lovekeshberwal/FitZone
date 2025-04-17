import React from "react";

function ServicesSection() {
    return (
      <section className="services-section reveal" id="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-dumbbell"></i>
            <h3>Personal Training</h3>
            <p>Get personalized workout plans and one-on-one guidance from our expert trainers.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-users"></i>
            <h3>Group Classes</h3>
            <p>Join our energetic group sessions for motivation and community support.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-heart"></i>
            <h3>Cardio Zone</h3>
            <p>State-of-the-art cardio equipment for effective fat-burning workouts.</p>
          </div>
        </div>
      </section>
    );
  }

export default ServicesSection;