import React from 'react';
import './ArticlesSection.css';
import { useNavigate } from 'react-router-dom';

// Replace these with your actual article images
import article1 from '../assets/article-1.jpeg';
import article2 from '../assets/article-2.png';
import article3 from '../assets/article-3.jpeg';
import article4 from '../assets/article-4.jpeg';
import article5 from '../assets/article-5.jpeg';

const ArticlesSection = () => {
  const navigate = useNavigate();
  
  const articles = [
    {
      id: 1,
      image: article1,
      title: 'Délais de Paiement au Maroc 2025',
      description: 'Focus sur la Loi 69-21 et ses implications pour les entreprises au Maroc',
      link: '/article/delais-de-paiement-2025',
      linkText: 'En savoir plus ›'
    },
    {
      id: 2,
      image: article2,
      title: 'Loi de Finances 2025: Véhicules de tourisme',
      description: 'Ce qu\'il faut savoir sur le traitement fiscal des véhicules de tourisme',
      link: '/article/loi-finances-vehicules-2025',
      linkText: 'En savoir plus ›'
    },
    {
      id: 3,
      image: article3,
      title: 'Changements sur les revenus fonciers 2025',
      description: 'Taux libératoire et détermination du revenu foncier imposable',
      link: '/article/revenus-fonciers-2025',
      linkText: 'En savoir plus ›'
    },
    {
      id: 4,
      image: article4,
      title: 'Revenus Salariaux et Assimilés 2025',
      description: 'Changements apportés par le PLF 2025 sur les Revenus Salariaux',
      link: '/article/revenus-salariaux-assimiles-2025',
      linkText: 'En savoir plus ›'
    },
    {
      id: 5,
      image: article5,
      title: 'SMIG et SMAG 2025',
      description: 'Changements à venir et impact sur les salaires dans le secteur privé',
      link: '/article/revenus-salariaux-2025',
      linkText: 'En savoir plus ›'
    }
  ];

  // Group articles into rows of 3
  const articleRows = [];
  for (let i = 0; i < articles.length; i += 3) {
    articleRows.push(articles.slice(i, i + 3));
  }

  // Function to handle article click
  const handleArticleClick = (e, link) => {
    e.preventDefault();
    navigate(link);
    
    // Add a small delay before scrolling to ensure the DOM has been updated
    setTimeout(() => {
      const articleElement = document.getElementById('article-section');
      if (articleElement) {
        articleElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="articles-section">
      <div className="container">
        <h2 className="section-title">NOS ARTICLES</h2>
        <div className="title-underline"></div>
        
        {articleRows.map((row, rowIndex) => (
          <div key={rowIndex} className="articles-row">
            {row.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-image-container">
                  <img src={article.image} alt={article.title} className="article-image" />
                </div>
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                  <a 
                    href={`#${article.link}`} 
                    className="article-link"
                    onClick={(e) => handleArticleClick(e, article.link)}
                  >
                    {article.linkText}
                  </a>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;