import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './ContactSection.css';

// Contact Section Component
const ContactSection = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-container">
          <div className="contact-content">
            <h2>Get in touch</h2>
            <p>Have questions about our programs or want to learn more about how we can help you achieve your wellness goals?</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <span>hello@vitalbalance.com</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <span>123 Wellness Street, Health City</span>
              </div>
            </div>
            
            <a href="#" className="contact-btn">Send</a>
          </div>
          
          <div className="contact-images">
            <div className="contact-image">
              <img src="https://images.unsplash.com/photo-1506629905607-ce90b0137a6e?w=150&h=150&fit=crop" alt="Yoga practice" />
            </div>
            <div className="contact-image">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop" alt="Fitness training" />
            </div>
            <div className="contact-image">
              <img src="https://images.unsplash.com/photo-1594824623751-d6f6c5dfe4a8?w=150&h=150&fit=crop" alt="Meditation" />
            </div>
            <div className="contact-image">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=150&fit=crop" alt="Wellness" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection; 