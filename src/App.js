import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import ArticlesSection from './components/ArticlesSection';
import ArticlePage from './components/articles/ArticlePage';

function HomePage() {
  return (
    <>
      <ServicesSection />
      <ClientsSection />
      <ArticlesSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/delais-de-paiement-2025" element={<ArticlePage />} />
        </Routes>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Groupe OMF. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;