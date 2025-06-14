import './Footer.css';

// Footer Component
const Footer = () => {
    return (
      <>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Vital Balance</h3>
                <p>Transform your body and mind through our comprehensive wellness programs.</p>
              </div>
              
              <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Classes</a></li>
                  <li><a href="#">Trainers</a></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Yoga Classes</a></li>
                  <li><a href="#">Personal Training</a></li>
                  <li><a href="#">Nutrition Coaching</a></li>
                  <li><a href="#">Wellness Lab</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>Contact</h3>
                <ul>
                  <li>+1 (555) 123-4567</li>
                  <li>hello@vitalbalance.com</li>
                  <li>123 Wellness Street</li>
                  <li>Health City, HC 12345</li>
                </ul>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">f</a>
              <a href="#" className="social-link">t</a>
              <a href="#" className="social-link">i</a>
              <a href="#" className="social-link">y</a>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; 2025 Vital Balance. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </>
    );
  };

  export default Footer;