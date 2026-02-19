import React from 'react';
import './RevenusSalariauxAssimiles2025.css';
import geransaLogo from '../../assets/Logo h.png';

const RevenusSalariauxAssimiles2025 = () => {
  return (
    <div className="article-page">
      <div className="article-container">
        <div className="article-header">
          <h1 className="article-main-title">Changements apportés par le PLF 2025</h1>
          <h2 className="article-subtitle">sur les Revenus Salariaux et Assimilés</h2>
        </div>

        <div className="article-content">
          <div className="logo-container">
            <img src={geransaLogo} alt="GERANSA SARL - Cabinet Comptable Agréé" className="company-logo" />
          </div>

          <section className="article-section">
            <h2 className="section-title">Article 57.- Exonérations</h2>
            
            <h3 className="subsection-title">1. Frais de nourriture</h3>
            <p className="section-content">
              La Loi de Finances 2025 apporte une nouveauté concernant <strong className="highlight-text">les bons représentatifs des frais de nourriture</strong> fournis par les employeurs à leurs salariés. Le montant <strong className="highlight-text">exonéré</strong>, qui était auparavant limité à <strong className="highlight-text">30 DH</strong> par salarié et par jour de travail, est désormais porté à <strong className="highlight-text">40 DH</strong>. Toutefois, ce montant ne doit pas dépasser <strong className="highlight-text">20% du salaire brut imposable</strong>.
            </p>
            
            <div className="important-note">
              <p><strong>NB:</strong></p>
              <ul className="section-list">
                <li>Si le montant des bons dépasse la limite exonérée, l'excédent devient <strong>un avantage en argent</strong>. Cet avantage est <strong>imposable</strong> à l'impôt sur le revenu (IR).</li>
                <li>L'excédent n'est pas pris en compte pour le calcul <strong>des frais professionnels</strong> (conformément à l'article 59 du CGI).</li>
              </ul>
            </div>
            
            <h3 className="subsection-title">2. Indemnité de stage</h3>
            <p className="section-content">
              La Loi de Finances 2025 modifie les règles relatives à l'exonération fiscale de <strong className="highlight-text">l'indemnité de stage</strong>. Désormais, la durée de l'exonération <strong className="highlight-text">passe de 24 mois à 12 mois</strong>. En cas de recrutement en CDI, le salaire brut plafonné à <strong className="highlight-text">10 000 dirhams</strong> bénéficie d'une exonération d'impôt sur le revenu pendant <strong className="highlight-text">12 mois supplémentaires</strong>. Le plafond de l'indemnité de stage reste fixé à 6 000 dirhams, et les conditions d'éligibilité (inscription à l'ANAPEC et engagement de recruter 60% des stagiaires) ne changent pas.
            </p>
          </section>

          <section className="article-section">
            <h2 className="section-title">Article 73.- Taux de l'impôt</h2>
            
            <p className="section-content">
              Une réforme importante de <strong className="highlight-text">l'impôt sur le revenu</strong> (IR) en modifiant <strong className="highlight-text">le barème fiscal</strong>. Cette révision vise à alléger la charge fiscale et à améliorer l'équité du système. Le seuil de la première tranche exonérée <strong className="highlight-text">passe de 30 000 dirhams à 40 000 dirhams</strong>, ce qui permet d'exonérer les revenus inférieurs à 6 000 dirhams par mois. De plus, les tranches fiscales sont <strong className="highlight-text">élargies</strong> et les taux d'imposition <strong className="highlight-text">réajustés</strong>, voici le nouveau barème de l'IR pour 2025:
            </p>
            
            <div className="table-container">
              <table className="ir-table">
                <thead>
                  <tr>
                    <th>Tranches du revenus annuel</th>
                    <th>Taux IR</th>
                    <th>Somme à déduire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0 - 40 000,00</td>
                    <td>0%</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>40 001,00 - 60 000,00</td>
                    <td>10%</td>
                    <td>4 000,00</td>
                  </tr>
                  <tr>
                    <td>60 001,00 - 80 000,00</td>
                    <td>20%</td>
                    <td>10 000,00</td>
                  </tr>
                  <tr>
                    <td>80 001,00 - 100 000,00</td>
                    <td>30%</td>
                    <td>18 000,00</td>
                  </tr>
                  <tr>
                    <td>100 001,00 - 180 000,00</td>
                    <td>34%</td>
                    <td>22 000,00</td>
                  </tr>
                  <tr>
                    <td>&gt;180 000,00</td>
                    <td>37%</td>
                    <td>27 400,00</td>
                  </tr>
                </tbody>
              </table>
              <p className="table-note">*Les valeurs en dirhams</p>
            </div>
          </section>

          <section className="article-section">
            <h2 className="section-title">Article 74.- Réduction pour charge de famille</h2>
            
            <div className="comparison-container">
              <div className="comparison-box current">
                <h4 className="comparison-title">Réglementation actuelle</h4>
                <p className="comparison-content">
                  La réduction pour charges de famille est de <strong>360 dirhams</strong> par personne à charge, soit <strong>30 dirhams par mois</strong>, avec un plafond total de <strong>2 160 dirhams par an</strong>. Cette réduction s'applique à un maximum de <strong>6 personnes</strong> à charge.
                </p>
              </div>
              
              <div className="comparison-box new">
                <h4 className="comparison-title">Nouveautés PLF 2025</h4>
                <p className="comparison-content">
                  Le PLF 2025 modifie cette réduction en augmentant le montant unitaire par personne à <strong>500 dirhams</strong>, soit <strong>41,67 dirhams par mois</strong>, et en portant le plafond total des réductions à <strong>3 000 dirhams par an</strong>, tout en maintenant la limite de 6 personnes à charge.
                </p>
              </div>
            </div>
            
            <div className="summary-box">
              <h3 className="summary-title">Résumé des changements clés</h3>
              <ul className="summary-list">
                <li>Augmentation de l'exonération des frais de nourriture : <strong>30 DH → 40 DH</strong> par jour</li>
                <li>Réduction de la durée d'exonération pour les stagiaires : <strong>24 mois → 12 mois</strong></li>
                <li>Augmentation du seuil d'exonération IR : <strong>30 000 DH → 40 000 DH</strong> annuels</li>
                <li>Augmentation de la réduction par personne à charge : <strong>360 DH → 500 DH</strong> annuels</li>
                <li>Augmentation du plafond des réductions familiales : <strong>2 160 DH → 3 000 DH</strong> annuels</li>
              </ul>
            </div>
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

export default RevenusSalariauxAssimiles2025;