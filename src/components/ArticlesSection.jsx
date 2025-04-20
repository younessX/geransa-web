import React from 'react';
import './ArticlesSection.css';

// Replace these with your actual article images
import article1 from '../assets/article-1.jpeg';
import article2 from '../assets/article-2.png';
import article3 from '../assets/article-3.jpeg';
import article4 from '../assets/article-4.jpeg';
import article5 from '../assets/article-5.jpeg';

const ArticlesSection = () => {
  const articles = [
    {
      id: 1,
      image: article1,
      title: 'Délais de Paiement au Maroc 2025',
      description: 'Focus sur la Loi 69-21 et ses implications pour les entreprises au Maroc',
      link: '#/article/delais-de-paiement-2025',
      linkText: 'En savoir plus ›'
    },
    {
      id: 2,
      image: article2,
      title: 'Procédure simplifiée de fermeture des entreprises au Maroc',
      description: 'Procédure simplifiée de fermeture des entreprises au Maroc',
      link: '#',
      linkText: 'En savoir plus ›'
    },
    {
      id: 3,
      image: article3,
      title: 'Taux de change base de conversion des revenues en devises au cours de l\'année 2023',
      description: 'Taux de change base de conversion des revenues en devises au cours de l\'année 2023',
      link: '#',
      linkText: 'En savoir plus ›'
    },
    {
      id: 4,
      image: article4,
      title: 'Understanding Modern Business Strategies',
      description: 'Explore the latest trends and strategies in modern business management',
      link: '#',
      linkText: 'En savoir plus ›'
    },
    {
      id: 5,
      image: article5,
      title: 'Digital Transformation in 2024',
      description: 'How digital transformation is reshaping industries and creating new opportunities',
      link: '#',
      linkText: 'En savoir plus ›'
    }
  ];

  // Group articles into rows of 3
  const articleRows = [];
  for (let i = 0; i < articles.length; i += 3) {
    articleRows.push(articles.slice(i, i + 3));
  }

  // Function to handle article click
  const handleArticleClick = (articleId, link) => {
    // For the first article, navigate to the article page
    if (articleId === 1) {
      window.location.href = link;
    }
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
                    href={article.link} 
                    className="article-link"
                    onClick={(e) => {
                      if (article.id === 1) {
                        e.preventDefault();
                        // This will redirect to the article page
                        window.location.href = "/article/delais-de-paiement-2025";
                      }
                    }}
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