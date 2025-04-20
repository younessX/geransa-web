// ServicesSection.jsx
import React from 'react';
import './ServicesSection.css';
import gestionImg from '../assets/gestion.jpg';
import optimisationImg from '../assets/optimisation.jpg';
import formationImg from '../assets/formation.jpg';
import conseilImg from '../assets/conseil.jpg';
import communicationImg from '../assets/communication.jpg';
import technologieImg from '../assets/technology.jpg';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        {/* Company Introduction - Updated to be centered */}
        <div className="company-intro">
          <div className="intro-content">
            <h1 className="intro-title">LA SOCIÉTÉ<span> GERANSA</span></h1>
            <p className="intro-tagline">
              Nous pouvons vous aider à prendre des mesures décisives et à obtenir des résultats durables.
            </p>
            <p className="intro-description">
              Le Groupe OMF est le partenaire de référence des chefs d'entreprise qui souhaitent être accompagnés dans leurs missions quotidiennes afin d'assurer des prestations de qualité sur l'ensemble de leur chaîne de valeur, et ce, en dépit des mutations du marché.
            </p>
            
            <div className="services-nav">
              <ul>
                <li><span className="check-icon"></span> Gestion</li>
                <li><span className="check-icon"></span> Optimisation</li>
                <li><span className="check-icon"></span> Formation</li>
                <li><span className="check-icon"></span> Conseil</li>
                <li><span className="check-icon"></span> Communication</li>
                <li><span className="check-icon"></span> Technologie</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Services Cards Grid - Unchanged */}
        <div className="services-grid">
          {/* Gestion Card */}
          <div className="service-card">
            <div className="card-image">
              <img src={gestionImg} alt="Gestion" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Gestion</h3>
              <p className="card-description">
                Nous vous accompagnons dans toutes les activités visant à planifier, organiser, coordonner et contrôler les ressources de votre entreprise afin d'atteindre vos objectifs.
              </p>
              <a href="#" className="learn-more">
                EN SAVOIR PLUS <span className="arrow-icon"></span>
              </a>
            </div>
          </div>
          
          {/* Optimisation Card */}
          <div className="service-card">
            <div className="card-image">
              <img src={optimisationImg} alt="Optimisation" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Optimisation</h3>
              <p className="card-description">
                Notre objectif est de maximiser l'utilisation efficace et efficiente des ressources disponibles dans votre entreprise, telles que le talent, les compétences, le temps et les finances, afin d'en améliorer les résultats. Cela inclut la mise en œuvre de processus performants.
              </p>
              <a href="#" className="learn-more">
                EN SAVOIR PLUS <span className="arrow-icon"></span>
              </a>
            </div>
          </div>
          
          {/* Formation Card */}
          <div className="service-card">
            <div className="card-image">
              <img src={formationImg} alt="Formation" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Formation</h3>
              <p className="card-description">
                La formation présente plusieurs avantages pour les salariés, les entreprises et la société dans son ensemble, elle contribue à aider les salariés à mieux comprendre les procédures de leur entreprise et améliorer leur performance.
              </p>
              <a href="#" className="learn-more">
                EN SAVOIR PLUS <span className="arrow-icon"></span>
              </a>
            </div>
          </div>
          
          {/* Conseil Card */}
          <div className="service-card">
            <div className="card-image">
              <img src={conseilImg} alt="Conseil" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Conseil</h3>
              <p className="card-description">
                Nos consultants experts vous accompagnent pour identifier les opportunités, analyser les défis et proposer des solutions adaptées qui contribuent à la croissance et à la pérennité de votre entreprise.
              </p>
              <a href="#" className="learn-more">
                EN SAVOIR PLUS <span className="arrow-icon"></span>
              </a>
            </div>
          </div>
          
          {/* Communication Card */}
          <div className="service-card">
            <div className="card-image">
              <img src={communicationImg} alt="Communication" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Communication</h3>
              <p className="card-description">
                Nous développons des stratégies de communication efficaces pour renforcer votre image de marque, engager vos clients et optimiser votre présence sur le marché, tant en interne qu'en externe.
              </p>
              <a href="#" className="learn-more">
                EN SAVOIR PLUS <span className="arrow-icon"></span>
              </a>
            </div>
          </div>
          
          {/* Technologie Card */}
          <div className="service-card">
            <div className="card-image">
              <img src={technologieImg} alt="Technologie" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Technologie</h3>
              <p className="card-description">
                Nous vous aidons à intégrer les solutions technologiques adaptées à vos besoins pour optimiser vos processus, améliorer l'efficacité opérationnelle et favoriser l'innovation au sein de votre organisation.
              </p>
              <a href="#" className="learn-more">
                EN SAVOIR PLUS <span className="arrow-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;