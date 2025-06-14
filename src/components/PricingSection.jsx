import React from 'react';
import './PricingSection.css';

// Pricing Section Component
const PricingSection = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "Free",
      duration: "",
      features: [
        "Basic fitness videos",
        "3 yoga classes per week",
        "Community support",
        "Basic progress tracking"
      ],
      buttonText: "Start My 14 Day Trial",
      popular: false
    },
    {
      name: "Premium",
      price: "$29",
      duration: "/month",
      features: [
        "Unlimited yoga classes",
        "Personal training sessions",
        "Nutrition guidance",
        "Advanced progress tracking",
        "Priority support"
      ],
      buttonText: "Start My 14 Day Trial",
      popular: true
    },
    {
      name: "Family Plan",
      price: "$49",
      duration: "/month",
      features: [
        "All Premium features",
        "Family sharing (up to 6 people)",
        "Kids yoga programs",
        "Family challenges"
      ],
      buttonText: "Start My 14 Day Trial",
      popular: false
    }
  ];

  return (
    <>
      <section className="pricing">
        <div className="pricing-container">
          <h2>Community</h2>
          <p className="pricing-subtitle">social classes</p>
          <p>Join our community and practice with like-minded individuals in our group classes and social fitness programs.</p>
          
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  {plan.price}
                  <span className="plan-duration" style={{fontSize: '1rem', fontWeight: 'normal'}}>{plan.duration}</span>
                </div>
                
                <ul className="plan-features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                
                <a href="#" className="plan-button">{plan.buttonText}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection; 