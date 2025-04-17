import React from "react";

function AboutSection() {
    return (
      <section className="about-section reveal" id="about">
        <div className="about-content">
          <div className="about-text reveal-left">
            <h2>About Our Gym</h2>
            <p className="about-description">
              Transform your life through fitness with our state-of-the-art facilities and expert guidance. At FitZone, we believe in providing more than just a gym – we create a community of motivated individuals striving for excellence.
            </p>
            <p className="about-features">
              Our facility features premium equipment, dedicated training zones, and a supportive atmosphere that inspires success. Whether you're a beginner or an experienced athlete, our team is here to guide you every step of the way.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Happy Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Expert Trainers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Fitness Classes</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
            <div className="about-features-grid">
              <div className="feature-item">
                <i className="fas fa-dumbbell"></i>
                <span>Modern Equipment</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-heart"></i>
                <span>Cardio Zone</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-users"></i>
                <span>Group Classes</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-person-running"></i>
                <span>Personal Training</span>
              </div>
            </div>
          </div>
          <div className="about-images reveal-right">
            <div className="main-image">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Modern Gym Interior"
              />
            </div>
            <div className="image-grid">
              <img 
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Weight Training Area"
              />
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Cardio Equipment"
              />
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80" 
                alt="Yoga Studio"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

export default AboutSection;