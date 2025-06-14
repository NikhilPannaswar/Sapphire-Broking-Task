import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import ReviewsSection from './components/ReviewsSection';
import AppSection from './components/AppSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TeamSection />
      <ReviewsSection />
      <AppSection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App; 