import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQSection.css';

// FAQ Section Component
const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState(null);
  
    const faqs = [
      {
        question: "What types of yoga classes do you offer?",
        answer: "We offer a variety of yoga styles including Hatha, Vinyasa, Yin, and Power Yoga. Classes are available for all skill levels from beginner to advanced."
      },
      {
        question: "Do I need any experience to join your fitness programs?",
        answer: "No experience is required! Our programs are designed to accommodate all fitness levels. Our certified trainers will guide you through every step of your journey."
      },
      {
        question: "How do I book a personalized coaching session?",
        answer: "You can book a personalized coaching session through our website or mobile app. Simply select your preferred trainer and available time slot."
      },
      {
        question: "What should I bring to a yoga class?",
        answer: "We provide yoga mats and props, but you're welcome to bring your own. Just wear comfortable, breathable clothing and bring a water bottle."
      },
      {
        question: "Are your nutritional plans tailored to individual needs?",
        answer: "Yes, all our nutritional guidance is personalized based on your individual goals, dietary preferences, and any health considerations."
      }
    ];
  
    return (
      <>
        <section className="faq">
          <div className="faq-container">
            <h2>Frequently</h2>
            <p className="faq-subtitle">asked questions</p>
            
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button 
                    className="faq-question"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    {faq.question}
                    <ChevronDown 
                      size={20} 
                      className={`faq-icon ${openFAQ === index ? 'open' : ''}`}
                    />
                  </button>
                  <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  };

  export default FAQSection;