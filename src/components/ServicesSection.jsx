// ServicesSection.jsx
import React, { useRef } from 'react';
import './ServicesSection.css';
import gestionImg from '../assets/gestion.jpg';
import optimisationImg from '../assets/optimisation.jpg';
import formationImg from '../assets/formation.jpg';
import conseilImg from '../assets/conseil.jpg';
import communicationImg from '../assets/communication.jpg';
import technologieImg from '../assets/technology.jpg';

const ServicesSection = () => {
  // Create refs for each service card
  const creationRef = useRef(null);
  const gestionRef = useRef(null);
  const optimisationRef = useRef(null);
  const formationRef = useRef(null);
  const conseilRef = useRef(null);
  const technologieRef = useRef(null);

  // Function to scroll to a specific ref
  const scrollToService = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="services-section" id="qui-sommes-nous">
      <div className="container">
        {/* Company Introduction - Updated to be centered */}
        <div className="company-intro">
          <div className="intro-content">
            <h1 className="intro-title"><span> GERANSA</span></h1>
            <p className="intro-tagline">
              Notre mission est de vous offrir des solutions comptables personnalisées, durables et adaptées à votre situation.
            </p>
            <p className="intro-description">
              Notre cabinet comptable agréé est dirigé par une équipe d'associés hautement qualifiés, animés par une volonté commune : offrir un accompagnement fiable, rigoureux et adapté aux besoins spécifiques de chaque client.
            </p>
            
            <div className="services-nav" id="services-section">
              <ul>
                <li onClick={() => scrollToService(creationRef)}><span className="check-icon"></span>Création d'entreprise</li>
                <li onClick={() => scrollToService(gestionRef)}><span className="check-icon"></span> Gestion</li>
                <li onClick={() => scrollToService(optimisationRef)}><span className="check-icon"></span> Optimisation</li>
                <li onClick={() => scrollToService(formationRef)}><span className="check-icon"></span> Formation</li>
                <li onClick={() => scrollToService(conseilRef)}><span className="check-icon"></span> Conseil</li>
                <li onClick={() => scrollToService(technologieRef)}><span className="check-icon"></span> Technologie</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Services Cards Grid - Updated with refs */}
        <div className="services-grid">
          
          {/* creation online Card */}
          <div className="service-card" ref={creationRef} id="creation-service">
            <div className="card-image">
              <img src={communicationImg} alt="Création d'entreprise" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Création d'entreprise</h3>
              <p className="card-description">
                Créez votre entreprise <span className="highlight-online">EN LIGNE</span> en seulement 
                <span className="highlight-time"> 48H</span>, avec un processus simplifié et sans tracas. 
                Nous nous occupons de toutes les démarches légales pour vous, de manière rapide et efficace.
              </p>
            </div>
          </div>

          {/* Gestion Card */}
          <div className="service-card" ref={gestionRef} id="gestion-service">
            <div className="card-image">
              <img src={gestionImg} alt="Gestion" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Gestion</h3>
              <p className="card-description">
                Nous vous assistons dans l'ensemble des démarches de planification, d'organisation, de coordination et de gestion des ressources de votre entreprise, afin d'assurer l'atteinte de vos objectifs
              </p>
            </div>
          </div>
          
          {/* Optimisation Card */}
          <div className="service-card" ref={optimisationRef} id="optimisation-service">
            <div className="card-image">
              <img src={optimisationImg} alt="Optimisation" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Optimisation fiscale</h3>
              <p className="card-description">
                Notre objectif est de maximiser les opportunités d'optimisation fiscale de votre entreprise en élaborant des stratégies personnalisées et en déployant des processus conformes à la réglementation, afin de réduire efficacement votre charge fiscale et sécuriser vos économies d'impôt.
              </p>
            </div>
          </div>
          
          {/* Formation Card */}
          <div className="service-card" ref={formationRef} id="formation-service">
            <div className="card-image">
              <img src={formationImg} alt="Formation" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Formation</h3>
              <p className="card-description">
                Nous proposons des formations spécialisées pour votre entreprises, visant à améliorer la compréhension des processus comptables, fiscaux et financiers. Nos programmes sont conçus pour aider les équipes à optimiser leur gestion financière, à accroître leur efficacité et à assurer la conformité aux normes en vigueur.
              </p>
            </div>
          </div>
          
          {/* Conseil Card */}
          <div className="service-card" ref={conseilRef} id="conseil-service">
            <div className="card-image">
              <img src={conseilImg} alt="Conseil" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Conseil</h3>
              <p className="card-description">
                Nos experts vous accompagnent pour saisir les opportunités, relever les défis et mettre en place des solutions sur mesure, au service de la croissance durable de votre entreprise.
              </p>
            </div>
          </div>
          
          {/* Technologie Card */}
          <div className="service-card" ref={technologieRef} id="technologie-service">
            <div className="card-image">
              <img src={technologieImg} alt="Technologie" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Technologie</h3>
              <p className="card-description">
                Nous vous accompagnons dans l'intégration de solutions technologiques sur mesure pour optimiser vos processus, gagner en efficacité et stimuler l'innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;