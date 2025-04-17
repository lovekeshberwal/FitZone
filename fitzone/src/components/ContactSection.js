// ContactSection.js
import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Valid phone number is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setStatus('loading');
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } catch (error) {
        setStatus('error');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section className="contact-section reveal" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-form-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Fill out the form and our team will get back to you within 24 hours.</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+1 234 567 8900</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>info@fitzone.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Fitness Street, Gym City, ST 12345</span>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  required
                />
                <label htmlFor="name">Your Name</label>
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  required
                />
                <label htmlFor="email">Your Email</label>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
                required
              />
              <label htmlFor="phone">Your Phone</label>
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                required
              ></textarea>
              <label htmlFor="message">Your Message</label>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <span className="loading-spinner"></span>
              ) : (
                'Send Message'
              )}
            </button>

            {status === 'success' && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {status === 'error' && (
              <div className="error-message">
                Oops! Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;