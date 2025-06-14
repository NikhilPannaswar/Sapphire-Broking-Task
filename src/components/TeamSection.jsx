import React from 'react';
import './TeamSection.css';

// Team Section Component
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Claire Ford",
      role: "Yoga Instructor",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a37850772362f569835d8bbad72d843813bfb87a?placeholderIfAbsent=true"
    },
    {
      name: "Anna Singh",
      role: "Fitness Coach",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2e0f0e791b3235ce130b0a78d203b3022d2c1aa?placeholderIfAbsent=true"
    }
  ];

  return (
    <>
      <section className="team">
        <div className="team-container">
          <h2>Meet Our Team</h2>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-header">
                  <h3>{member.name}</h3>
                  <a href="#" className="member-btn">More info</a>
                </div>

              </div>
            ))}

            <div className="coaching-card">
              <div className="coaching-card-text">
                <p>Join The Team</p>
                <h3>Personal Coaching Sessions</h3>
                <p>Get one-on-one attention with our certified trainers for personalized fitness and wellness coaching.</p>
              </div>
              <a href="#" className="btn-primary">View More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection; 