import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useParams } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import ArticlesSection from './components/ArticlesSection';

// Import article components
import DelaisPaiementArticle from './components/articles/DelaisPaiementArticle';
import LoiFinances2025Vehicules from './components/articles/LoiFinances2025Vehicules';
import RevenusFonciers2025 from './components/articles/RevenusFonciers2025';
import RevenusSalariauxAssimiles2025 from './components/articles/RevenusSalariauxAssimiles2025';
import RevenusSalariaux2025 from './components/articles/RevenusSalariaux2025';

// ScrollToAnchor component to handle scroll behavior
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

// Dynamic Article component that selects the right article based on the URL
function DynamicArticle() {
  const { articleId } = useParams();
  
  // Return the appropriate article component based on the articleId
  switch(articleId) {
    case 'delais-de-paiement-2025':
      return <DelaisPaiementArticle />;
    case 'loi-finances-vehicules-2025':
      return <LoiFinances2025Vehicules />;
    case 'revenus-fonciers-2025':
      return <RevenusFonciers2025 />;
    case 'revenus-salariaux-assimiles-2025':
      return <RevenusSalariauxAssimiles2025 />;
    case 'revenus-salariaux-2025':
      return <RevenusSalariaux2025 />;
    default:
      return <div className="article-not-found">Article non trouvé</div>;
  }
}

function HomePage() {
  return (
    <>
        <ServicesSection />
        
        <div id="clients-section">
          <ClientsSection />
        </div>
        <div id="parent-article-section">
          <ArticlesSection />
        </div>
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
            path="/article/:articleId" 
            element={
              <>
                <HomePage />
                <DynamicArticle />
              </>
            } 
          />
        </Routes>
        <footer className="footer">
          <div className="container">
            <p>
              &copy; {new Date().getFullYear()} Geransa. Tous droits réservés. | Développé par 
              <a href="https://nerdsdev.pro/" target="_blank" rel="noopener noreferrer">
              &nbsp;&nbsp;NerdsDev
              </a>
            </p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;