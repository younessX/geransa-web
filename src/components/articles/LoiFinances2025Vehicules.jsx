import React from 'react';
import './LoiFinances2025Vehicules.css';
import geransaLogo from '../../assets/logo_geransa.svg'; // Import your logo

const LoiFinances2025Vehicules = () => {
  return (
    <div className="article-page">
      <div className="article-container">
        <div className="article-header">
          <h1 className="article-main-title">Loi de Finances 2025</h1>
          <h2 className="article-subtitle">Ce qu'il faut savoir sur le traitement fiscal des véhicules de tourisme</h2>
        </div>

        <div className="article-content">
          <div className="logo-container">
            <img src={geransaLogo} alt="GERANSA SARL - Cabinet Comptable Agréé" className="company-logo" />
          </div>

          <section className="article-section">
            <h2 className="section-title">1. Définition des véhicules de tourisme</h2>
            <p className="section-content">
              Les véhicules de tourisme sont des voitures conçues principalement pour le transport de personnes, avec une capacité maximale de 9 places. Ces véhicules sont utilisés à des fins professionnelles ou privées.
            </p>
            <p className="section-content">
              Toutefois, la législation fiscale impose certaines limitations concernant leur déductibilité, en particulier pour l'amortissement, la redevance crédit-bail et la TVA.
            </p>
          </section>

          <section className="article-section">
            <h2 className="section-title">2. Exceptions à la limitation de déductibilité</h2>
            <p className="section-content">Certaines exceptions s'appliquent, et les dispositions précédentes ne s'appliquent pas aux :</p>
            <ul className="section-list">
              <li><strong>Véhicules utilisés pour le transport public</strong></li>
              <li><strong>Véhicules de transport collectif</strong> du personnel de l'entreprise et de transport scolaire</li>
              <li><strong>Véhicules appartenant aux entreprises</strong> qui pratiquent la location de voitures affectés conformément à leur objet</li>
              <li><strong>Ambulances</strong></li>
            </ul>
          </section>

          <section className="article-section">
            <h2 className="section-title">3. Réglementation actuelle (CGI 2024)</h2>
            <div className="important-note">
              <p><strong>Article 10 - Charges déductibles (CGI 2024).</strong><br />
              b) les dotations aux amortissements des immobilisations corporelles et incorporelles.</p>
            </div>
            <p className="section-content">
              Le Code Général des Impôts 2024 fixe une limite sur l'amortissement des véhicules de tourisme. Pour que l'amortissement d'un véhicule de tourisme soit entièrement déductible, son coût d'acquisition doit être inférieur ou égal à <strong>300 000 DH TTC</strong>.
            </p>
            <p className="section-content">
              Dans ce cas, l'entreprise peut déduire <strong>60 000 DH par an</strong> (20% du coût d'acquisition TTC). Cependant, si le prix d'achat du véhicule dépasse cette limite, la déduction fiscale sera réduite et la part excédentaire de l'amortissement devra être réintégrée dans le résultat fiscal de l'entreprise.
            </p>
          </section>

          <section className="article-section highlight-section">
            <h2 className="section-title">4. Nouveautés de la Loi de Finances 2025</h2>
            <div className="highlight-box">
              <p className="highlight-text">
                À partir du <strong>1er janvier 2025</strong>, la fiscalité des voitures de tourisme sera modifiée avec une augmentation de la limite fiscale de la valeur d'origine des véhicules, passant de <strong>300 000 DH à 400 000 DH</strong>.
              </p>
              <p className="highlight-text">
                De plus, la déductibilité de l'amortissement annuel sera augmentée à <strong>80 000 DH</strong> (contre 60 000 DH auparavant) sur une durée maximale de 5 ans.
              </p>
            </div>
            <p className="section-content">
              Ces changements permettront aux entreprises de réduire leur résultat imposable, générant ainsi des économies d'impôt. De plus, les contrats de crédit-bail bénéficieront d'un allègement fiscal supplémentaire grâce à l'optimisation des redevances liées à l'amortissement.
            </p>
            <div className="source-note">
              <p>"Extrait du Projet de Loi de Finances (PLF) 2025 tel qu'adopté par la Chambre des Conseillers."</p>
            </div>
          </section>

          <section className="article-section">
            <h2 className="section-title">5. Cas pratiques</h2>
            
            <div className="case-study">
              <h3 className="subsection-title">Cas 1 : Acquisition directe d'une voiture de tourisme</h3>
              <div className="case-details">
                <p><strong>Coût d'acquisition du véhicule (TTC) :</strong> 480 000 DH</p>
                <p><strong>Taux d'amortissement :</strong> 20%</p>
                <p><strong>Date d'acquisition :</strong> 01/01/2025</p>
              </div>
              
              <div className="calculation-steps">
                <div className="calculation-step">
                  <h4>1. Calcul de l'amortissement :</h4>
                  <p>L'amortissement est calculé sur la base TTC du coût d'acquisition (TVA non récupérable)</p>
                  <p>Amortissement annuel : (480 000 * 20%) = <strong>96 000 DH</strong> par an</p>
                </div>
                
                <div className="calculation-step">
                  <h4>2. Limitation fiscale de l'amortissement :</h4>
                  <p>Conformément à la législation fiscale, l'amortissement déductible pour les véhicules de tourisme est limité à 400 000 DH TTC, pour les véhicules achetés en 2025.</p>
                  <p>Limite de l'amortissement fiscalement déductible : (400 000 * 20%) = <strong>80 000 DH</strong> par an</p>
                </div>
                
                <div className="calculation-step">
                  <h4>3. Part excédentaire à réintégrer dans le résultat fiscal :</h4>
                  <p>L'amortissement théorique est de 96 000 DH.</p>
                  <p>L'amortissement fiscalement déductible est limité à 80 000 DH.</p>
                  <p>Part excédentaire à réintégrer dans le résultat fiscal : 96 000 DH - 80 000 DH = <strong>16 000 DH</strong></p>
                  <p>Cela signifie que 16 000 DH doivent être réintégrés dans le résultat fiscal de l'entreprise (Tableau 3).</p>
                </div>
              </div>
            </div>
            
            <div className="case-study">
              <h3 className="subsection-title">Cas 2 : Acquisition d'une voiture de tourisme en crédit-bail (leasing)</h3>
              <div className="case-details">
                <p><strong>Coût d'acquisition du véhicule (TTC) :</strong> 600 000 DH</p>
                <p><strong>Coût hors taxe (HT) :</strong> 500 000 DH</p>
                <p><strong>C'est le prix payé par la société de leasing pour acquérir le véhicule.</strong></p>
                <p><strong>Date d'acquisition :</strong> 01/01/2025</p>
                <p><strong>Amortissement annuel :</strong> 20%</p>
                <p><strong>Redevance payée pour la période :</strong> 75 000 DH</p>
              </div>
              
              <div className="calculation-steps">
                <div className="calculation-step">
                  <h4>Calcul de l'amortissement théorique basé sur le coût HT :</h4>
                  <p>L'amortissement annuel du véhicule basé sur son prix d'acquisition HT est calculé comme suit : (500 000 * 20%) = <strong>100 000 DH</strong> par an</p>
                </div>
                
                <div className="calculation-step">
                  <h4>Limitation fiscale :</h4>
                  <p>La déduction fiscale est limitée à 400 000 DH TTC pour l'amortissement, soit un amortissement maximum de :</p>
                  <p>(400 000 * 20%) = <strong>80 000 DH</strong> de déduction annuelle.</p>
                </div>
                
                <div className="calculation-step">
                  <h4>Part excédentaire à réintégrer :</h4>
                  <p>L'amortissement théorique du véhicule est de 100 000 DH.</p>
                  <p>L'amortissement déductible pour des raisons fiscales est de 80 000 DH.</p>
                  <p>La part excédentaire de <strong>20 000 DH</strong> doit être réintégrée dans le résultat fiscal.</p>
                </div>
                
                <div className="calculation-step">
                  <h4>Impact sur la redevance payée :</h4>
                  <p>Étant donné que la société a payé une redevance de 75 000 DH, et qu'une partie de l'amortissement excédentaire de 20 000 DH doit être réintégrée dans le résultat fiscal (Extra-comptable), cela signifie que la redevance nette déductible sera réduite de 20 000 DH.</p>
                  <p>Ainsi, la redevance réellement déductible est de : 75 000 DH - 20 000 DH = <strong>55 000 DH</strong>.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="article-section">
            <h2 className="section-title">Conclusion</h2>
            <p className="section-content">
              La Loi de Finances 2025 apporte des modifications significatives au traitement fiscal des véhicules de tourisme, avec une augmentation de la limite de déduction fiscale à 400 000 DH (au lieu de 300 000 DH) et un amortissement annuel déductible pouvant atteindre 80 000 DH.
            </p>
            <p className="section-content">
              Ces ajustements permettront aux entreprises de bénéficier d'avantages fiscaux plus importants lors de l'acquisition de véhicules de tourisme, que ce soit en achat direct ou en crédit-bail.
            </p>
            <p className="section-content">
              Il est important pour les entreprises de prendre en compte ces nouvelles dispositions dans leur stratégie d'acquisition de véhicules pour optimiser leur situation fiscale.
            </p>
          </section>
        </div>

        <div className="article-footer">
          <p className="author">Réalisé par: <strong>Abdessamad BALATIF</strong></p>
          <a href="https://www.linkedin.com/in/abdessamad-balatif-a54361234" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <i className="fab fa-linkedin"></i> Consulter le profil LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoiFinances2025Vehicules;