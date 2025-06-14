import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import './Header.css';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>      
      <header className="header">
        <div className="nav-container">
          <div className="logo">Vital Balance</div>
          
          <nav>
            <ul className={`nav-menu ${isMobile ? 'nav-menu-hidden' : ''}`}>
              <li><a href="#" className="nav-link">Trainer</a></li>
              <li><a href="#" className="nav-link">Yoga</a></li>
              <li><a href="#" className="nav-link">Courses</a></li>
              <li><a href="#" className="nav-link">Plans</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button className="cart-btn">
              <ShoppingCart size={20} />
              <span className="cart-count">0</span>
            </button>
            {!isMobile && (
              <button className="login-btn">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/56ee7190aa533f77d75747890a4b578ddbd14b89?placeholderIfAbsent=true" 
                  alt="User" 
                  className="login-icon" 
                />
                Login
              </button>
            )}
            {isMobile && (
              <button 
                className="mobile-menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {isMobile && isMenuOpen && (
          <div className="mobile-menu open">
            <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Trainer</a>
            <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Yoga</a>
            <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Courses</a>
            <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Plans</a>
            <button className="login-btn mobile-login-btn" onClick={() => setIsMenuOpen(false)}>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/56ee7190aa533f77d75747890a4b578ddbd14b89?placeholderIfAbsent=true" 
                alt="User" 
                className="login-icon" 
              />
              Login
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;