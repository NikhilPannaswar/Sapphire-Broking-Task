import React from 'react';
import './ReviewsSection.css';

// Reviews Section Component
const ReviewsSection = () => {
  const reviews = [
    { name: "John Smith", text: "Amazing yoga classes that transformed my flexibility and mindset. Highly recommended!", rating: 5 },
    { name: "Sarah Johnson", text: "The personal training sessions are incredible. I've never felt stronger!", rating: 5 },
    { name: "Mike Wilson", text: "Great community and supportive environment. Love the variety of classes.", rating: 5 },
    { name: "Emma Davis", text: "The wellness lab helped me understand my body better. Excellent service!", rating: 5 },
    { name: "David Brown", text: "Professional trainers and amazing facilities. Worth every penny!", rating: 5 }
  ];

  return (
    <>
      <section className="reviews">
        <div className="reviews-container">
          <h2>Over 100+ reviews</h2>
          <p className="reviews-subtitle">from our clients</p>
          
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-avatar">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="reviewer-info">
                    <h4>{review.name}</h4>
                    <div className="rating">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="review-text">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsSection; 