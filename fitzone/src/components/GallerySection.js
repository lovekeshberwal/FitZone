// GallerySection.js
import React from "react";

function GallerySection() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
      title: "Weight Training"
    },
    {
      url: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&auto=format&fit=crop",
      title: "Cardio Area"
    },
    {
      url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop",
      title: "Yoga Studio"
    },
    {
      url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop",
      title: "Indoor Cycling"
    },
    {
      url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop",
      title: "Boxing Area"
    },
    {
      url: "https://images.unsplash.com/photo-1591258370814-01609b341790?w=800&auto=format&fit=crop",
      title: "Strength Training"
    },
    {
      url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&auto=format&fit=crop",
      title: "CrossFit Zone"
    },
    {
      url: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop",
      title: "Recovery Area"
    }
  ];

  return (
    <section className="gallery-section reveal" id="gallery">
      <div className="container">
        <h2>Our Facility</h2>
        <div className="quote-section reveal">
          <div className="quote-content">
            <i className="fas fa-quote-left quote-icon"></i>
            <blockquote>
              "The only bad workout is the one that didn't happen. Every step forward is a step toward achieving your goals."
            </blockquote>
            <p className="quote-author">- FitZone Philosophy</p>
          </div>
          <div className="quote-stats">
            <div className="stat">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Square Feet</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Access</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Equipment</span>
            </div>
          </div>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.url} alt={image.title} />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;