import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import ArticlesSection from './components/ArticlesSection';
import ArticlePage from './components/articles/ArticlePage';

// ScrollToTop component to handle scroll behavior
function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    // Check if the URL path starts with '/article/'
    if (location.pathname.startsWith('/article/')) {
      // Get the article element
      const articleElement = document.getElementById('article-section');
      if (articleElement) {
        // Scroll to the article element
        articleElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on the home page, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <ServicesSection />
      <ClientsSection />
      <ArticlesSection />
      {/* Add an id to locate the article section */}
      <div id="article-section"></div>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollToAnchor />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/article/delais-de-paiement-2025" 
            element={
              <>
                <HomePage />
                <ArticlePage />
              </>
            } 
          />
        </Routes>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Société Geransa. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;