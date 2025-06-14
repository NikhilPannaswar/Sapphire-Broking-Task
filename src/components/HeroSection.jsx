import './HeroSection.css';

// Hero Section Component
const HeroSection = () => {
  return (
    <>      
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Transform Your Body and Mind</h1>
            <p>Join us in transforming your body and mind through our comprehensive yoga and fitness programs.</p>
            <div className="hero-buttons">
              <a href="#" className="btn-primary">Start Today</a>
              <a href="#" className="btn-secondary">Start For Free</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/08391574b7d77ea368cd6bbeac8c4d08a337e712?placeholderIfAbsent=true" alt="Yoga meditation" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;