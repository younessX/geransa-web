// Header.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css'
import logoImage from '../assets/logo_geransa.svg';
import opcaLogo from '../assets/opca_logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to navigate home and scroll to top
  const navigateHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Function to scroll to a specific element by ID with offset for header height
  const scrollToElement = (elementId) => {
    // First navigate to home if not already there
    if (location.pathname !== '/') {
      navigate('/');
      // We need to wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const headerOffset = 100;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(elementId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const headerOffset = 100;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top bar */}
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <div className="location">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16" fill="currentColor">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
              <span>RESI BEN OMAR 4EME ETG APP 10 EL MAARI El Maarif</span>
            </div>
            <div className="phone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
              <span>+212 531 22 50 51</span>
            </div>
          </div>
          <div className="social-media">
            <a href="https://web.facebook.com/people/Geransa-SARL/61575109711808/" aria-label="Facebook" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/geransa-sarl/" aria-label="LinkedIn" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
              </svg>
            </a>
            <button className="contact-btn">Nous Contacter</button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="main-nav">
        <div className="container">
          <div className="logo primary-logo" onClick={navigateHome} style={{ cursor: 'pointer' }}>
            <img src={logoImage} alt="GENERANSA" className="logo-image" />
          </div>
          
          <nav className="nav-menu">
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateHome(); }}>ACCUEIL</a></li>
              <li><a href="#qui-sommes-nous" onClick={(e) => { e.preventDefault(); scrollToElement('qui-sommes-nous'); }}>QUI SOMMES-NOUS?</a></li>
              <li><a href="#services-section" onClick={(e) => { e.preventDefault(); scrollToElement('services-section'); }}>SERVICES</a></li>
              <li><a href="#clients-section" onClick={(e) => { e.preventDefault(); scrollToElement('clients-section'); }}>NOS CLIENTS</a></li>
              <li><a href="#parent-article-section" onClick={(e) => { e.preventDefault(); scrollToElement('parent-article-section'); }}>ARTICLES</a></li>
            </ul>
          </nav>
          
          <div className="logo certification-logo">
            <img src={opcaLogo} alt="Certification Logo" className="logo-image certification-image" />
          </div>
        </div>
      </div>

      {/* Hero section */}
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">
              <span className="dynamic-text">Prévoir</span>
              <span className="dynamic-text">Dès</span>
              <span className="dynamic-text">Maintenant.</span>
            </h2>
            <p className="hero-tagline">Plus qu'un cabinet, un partenaire de croissance</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;