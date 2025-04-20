import React from 'react';
import './DelaisPaiementArticle.css';
import geransaLogo from '../../assets/logo_geransa.svg'; // Import your logo

const ArticlePage = () => {
  return (
    <div className="article-page">
      <div className="article-container">
        <div className="article-header">
          <h1 className="article-main-title">Délais de Paiement au Maroc 2025</h1>
          <h2 className="article-subtitle">Focus sur la Loi 69-21</h2>
        </div>

        <div className="article-content">
          <div className="logo-container">
            <img src={geransaLogo} alt="GERANSA SARL - Cabinet Comptable Agréé" className="company-logo" />
          </div>

          <section className="article-section">
            <h2 className="section-title">1. Champ d'Application</h2>
            <p className="section-content">La loi concerne les entités suivantes :</p>
            <ul className="section-list">
              <li><strong>Commerçants :</strong> Personnes physiques ou morales avec un chiffre d'affaires annuel <strong>supérieur à 2 millions de dirhams hors taxes (HT)</strong>.</li>
              <li><strong>Personnes de droit privé :</strong> Délégataires de la gestion d'un service public.</li>
              <li><strong>Établissements publics :</strong> Exerçant des activités commerciales de manière régulière ou professionnelle.</li>
            </ul>
          </section>

          <section className="article-section">
            <h2 className="section-title">2. Délais de Paiement</h2>
            <p className="section-content">Les délais sont définis comme suit :</p>
            <ul className="section-list">
              <li><strong>60 jours :</strong> Par défaut, à compter de la date de facturation, si aucun accord spécifique n'est conclu.</li>
              <li><strong>120 jours :</strong> Si un accord entre les parties le stipule, sans dépasser cette limite.</li>
              <li><strong>180 jours :</strong> Pour certains secteurs spécifiques ou saisonniers, sur dérogation accordée par décret après avis du Conseil de la Concurrence.</li>
            </ul>
          </section>

          <section className="article-section">
            <h2 className="section-title">3. Calcul des délais</h2>
            <p className="section-content">Le délai de paiement est calculé à compter de <strong>la date d'émission de la facture</strong>. Cette dernière doit être établie au plus tard le dernier jour du mois de la livraison des marchandises ou de l'exécution des travaux ou des prestations de services. Si la facture n'a pas été émise dans ce délai, le délai de paiement est calculé <strong>à partir de la fin du mois de la livraison ou de la prestation</strong>.</p>
            
            <div className="example-timeline">
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-text">
                <p><strong>Date de livraison :</strong><br />10/07/2024</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-point highlighted"></div>
              <div className="timeline-text highlighted">
                <p><strong>Fin de mois :</strong><br />31/07/2024</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-text">
                <p><strong>Date de facturation :</strong><br />02/08/2024</p>
              </div>
            </div>
          </div>
          </section>

          <section className="article-section">
            <h2 className="section-title">4. Obligations Déclaratives</h2>
            <p className="section-content">Une déclaration <strong>trimestrielle</strong> électronique doit être déposée avant la fin du mois qui suit la fin de chaque trimestre.</p>
            <p className="section-content"><strong>À titre transitoire</strong>, les entreprises dont le chiffre d'affaires est <strong>inférieur ou égal à 50 millions de dirhams HT</strong> sont autorisées à déposer une <strong>déclaration annuelle</strong> au lieu de trimestrielle pour les années <strong>2024 et 2025</strong>. Ces déclarations doivent être déposées respectivement avant <strong>le 1ᵉʳ avril 2025 et le 1ᵉʳ avril 2026</strong>.</p>
            <p className="section-content">Pour les déclarations trimestrielles ou annuelles, un état détaillé des factures dépassant les délais de paiement doit être joint et visé par :</p>
            <ul className="section-list">
              <li><strong>Un commissaire aux comptes</strong> pour les entreprises ayant un chiffre d'affaires égal ou supérieur à 50 000 000 dirhams HT.</li>
              <li><strong>Un expert-comptable ou un comptable agréé</strong> pour celles ayant un chiffre d'affaires inférieur à 50 000 000 dirhams HT.</li>
            </ul>
            <div className="important-note">
              <p><strong>NB:</strong> Les factures dont le montant est inférieur à 10 000 MAD TTC ne sont pas concernées par la loi 69-21 et l'amende prévue par ses dispositions jusqu'à janvier 2025.</p>
            </div>

            <div className="table-container">
              <h3 className="table-title">Récapitulatif des périodes et des fréquences de déclaration entre 2023 et 2026</h3>
              <table className="declaration-table">
                <thead>
                  <tr>
                    <th>Chiffre d'affaires de l'année (N-1)</th>
                    <th>2023</th>
                    <th>2024</th>
                    <th>2025</th>
                    <th>2026</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>CA &gt; 50,000,000</td>
                    <td>T</td>
                    <td>T</td>
                    <td>T</td>
                    <td>T</td>
                  </tr>
                  <tr>
                    <td>10,000,000 &lt; CA &le; 50,000,000</td>
                    <td>-</td>
                    <td>A</td>
                    <td>A</td>
                    <td>T</td>
                  </tr>
                  <tr>
                  <td>2,000,000 &lt; CA &le; 10,000,000</td>
                    <td>-</td>
                    <td>-</td>
                    <td>A</td>
                    <td>T</td>
                  </tr>
                </tbody>
              </table>
              <p className="table-note">T = Trimestrielle, A = Annuelle</p>
            </div>
          </section>

          <section className="article-section">
            <h2 className="section-title">5. Sanctions Prévues</h2>
            
            <h3 className="subsection-title">5.1 Retard de Paiement</h3>
            <p className="section-content">Amende calculée sur le montant TTC de chaque facture, avec application du taux directeur de Bank Al-Maghrib (pour le premier mois de retard), puis 0,85% pour chaque mois supplémentaire.</p>
            
            <div className="table-container">
              <table className="penalty-table">
                <thead>
                  <tr>
                    <th>Période du Premier Mois de Retard</th>
                    <th>Taux Directeur Appliqué</th>
                    <th>Pénalité Mensuelle Supplémentaire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1er janvier - 31 mai 2024</td>
                    <td>3 %</td>
                    <td>0,85 % par mois supplémentaire</td>
                  </tr>
                  <tr>
                    <td>1er juin - 30 novembre 2024</td>
                    <td>2.75 %</td>
                    <td>0,85 % par mois supplémentaire</td>
                  </tr>
                  <tr>
                    <td>1er Décembre - 28 février 2025</td>
                    <td>2.5 %</td>
                    <td>0,85 % par mois supplémentaire</td>
                  </tr>
                  <tr>
                    <td>À partir du 1er Mars 2025</td>
                    <td>2.25 %</td>
                    <td>0,85 % par mois supplémentaire</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="subsection-title">5.2 Non-respect des déclarations</h3>
            <p className="section-content">Une amende proportionnelle au chiffre d'affaires de l'entreprise est appliquée en cas de retard ou non dépôt de la déclaration trimestrielle selon le barème suivant :</p>
            <ul className="section-list penalties">
              <li>Entre 2 000 000 et 10 000 000 MAD : <strong>Amende de 5 000 MAD</strong>.</li>
              <li>Entre 10 000 000 et 50 000 000 MAD : <strong>Amende de 12 500 MAD</strong>.</li>
              <li>Entre 50 000 000 et 200 000 000 MAD : <strong>Amende de 50 000 MAD</strong>.</li>
              <li>Entre 200 000 000 et 500 000 000 MAD : <strong>Amende de 125 000 MAD</strong>.</li>
              <li>Supérieur à 500 000 000 MAD : <strong>Amende de 250 000 MAD</strong>.</li>
            </ul>
            <div className="important-note">
              <p><strong>NB :</strong> Pour toute déclaration incomplète, une pénalité de 5 000 MAD s'applique par facture manquante ou erronée.</p>
            </div>
          </section>

          <section className="article-section">
            <h2 className="section-title">Cas pratique</h2>
            <p className="section-content">La société commerciale TransLog Maroc, spécialisée dans le transport et la logistique des marchandises, a réalisé un chiffre d'affaires de <strong>12 000 000 DH en 2023</strong>. Conformément à la réglementation en vigueur, cette entreprise doit déposer la déclaration <strong>annuelle</strong> des délais de paiement pour l'année 2024, déclaration qui doit être transmise à l'administration fiscale avant le 1er avril 2025.</p>
            
            <div className="table-container">
              <h3 className="table-title">Opérations effectuées au cours de l'année 2024</h3>
              <table className="case-study-table">
                <thead>
                  <tr>
                    <th>Date de facture</th>
                    <th>Date de livraison</th>
                    <th>Montant de la facture</th>
                    <th>Montant payé</th>
                    <th>Date de paiement</th>
                    <th>Date de paiement prévu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12/01/2024</td>
                    <td>08/01/2024</td>
                    <td>80 000</td>
                    <td>80 000</td>
                    <td>28/03/2024</td>
                    <td>11/03/2024</td>
                  </tr>
                  <tr>
                    <td>20/04/2024</td>
                    <td>20/04/2024</td>
                    <td>75 600</td>
                    <td>75 600</td>
                    <td>20/06/2024</td>
                    <td>18/06/2024</td>
                  </tr>
                  <tr>
                    <td>05/08/2024</td>
                    <td>17/07/2024</td>
                    <td>112 000</td>
                    <td>112 000</td>
                    <td>15/10/2024</td>
                    <td>28/09/2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <ul className="case-analysis">
              <li>
                <p><strong>Concernant la première facture</strong>, d'un montant de <strong>80 000 DH</strong>, avec une date de paiement prévue au 11/03/2024, le règlement a été effectué le 28/03/2024, soit un retard de 17 jours, considéré comme un mois complet. L'amende est calculée au taux directeur de Bank Al-Maghrib (3 %) : <strong>80 000 x 3 % = 2 400 DH</strong>.</p>
              </li>
              <li>
                <p><strong>Pour la deuxième facture</strong>, de <strong>75 000 DH</strong>, la date prévue était le 18/06/2024 et le paiement a été réalisé le 20/06/2024, soit un retard de 2 jours, également compté comme un mois complet. L'amende s'élève à <strong>75 600 x 2.75 % = 2 079 DH</strong>.</p>
              </li>
              <li>
                <p><strong>La troisième facture</strong>, d'un montant de <strong>112 000 DH</strong>, avait une date de paiement prévue au 28/09/2024, mais le règlement a été fait le 15/10/2024, soit un retard de 17 jours considéré comme deux mois complets (les mois 9 et 10).</p>
                <ul>
                  <li>Pour le <strong>1er mois</strong>, l'amende est calculée au taux de 2,75 % : <strong>112 000 x 2,75 % = 3 080 DH</strong>.</li>
                  <li>Pour le <strong>2e mois</strong>, l'amende est calculée au taux de 0,85 % : <strong>112 000 x 0,85 % = 952 DH</strong>, soit un total de <strong>3 080 + 952 = 4 032 DH</strong>.</li>
                </ul>
              </li>
              <li>
                <p>L'entreprise doit verser un total de <strong>8 511 DH au Trésor avant le 1er avril 2025</strong>, accompagnées d'une attestation validée par un commissaire aux comptes, un expert-comptable ou un comptable agréé. De plus, les déclarations trimestrielles ou annuelles doivent inclure un état détaillé précisant le montant total des factures, toutes taxes comprises, non payées dans les délais, ainsi que le montant des factures réglées totalement ou partiellement hors délai.</p>
              </li>
            </ul>
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

export default ArticlePage;