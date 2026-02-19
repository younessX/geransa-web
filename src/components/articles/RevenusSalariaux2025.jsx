import React from 'react';
import './RevenusSalariaux2025.css';
import geransaLogo from '../../assets/Logo h.png';

const RevenusSalariaux2025 = () => {
  return (
    <div className="article-page">
      <div className="article-container">
        <div className="article-header">
          <h1 className="article-main-title">Revenus salariaux 2025</h1>
          <h2 className="article-subtitle">SMIG et SMAG 2025: Changements à venir et impact sur les salaires dans le secteur privé</h2>
        </div>

        <div className="article-content">
          <div className="logo-container">
            <img src={geransaLogo} alt="GERANSA SARL - Cabinet Comptable Agréé" className="company-logo" />
          </div>

          <section className="article-section">
            <h2 className="section-title">1. Le salaire minimum interprofessionnel garanti (SMIG)</h2>
            
            <p className="section-content">
              Le <strong>29 avril 2024</strong>, un accord important a été signé entre le gouvernement, les syndicats et le patronat pour augmenter le salaire minimum interprofessionnel garanti (SMIG) dans le secteur privé de <strong className="highlight-text">10%</strong>. Cette hausse se fera en deux étapes : <strong className="highlight-text">5% en janvier 2025 et 5% en janvier 2026</strong>, ce qui portera le SMIG à <strong className="highlight-text">3 422 dirhams</strong>. Nous allons maintenant explorer l'impact de ces changements sur les salariés et les entreprises.
            </p>
            
            <div className="table-container">
              <table className="salary-table">
                <thead>
                  <tr>
                    <th>Eléments</th>
                    <th>Actuellement</th>
                    <th>A partir de janvier 2025</th>
                    <th>Ecart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SMIG horaire (DH)</td>
                    <td>16.29</td>
                    <td>17,10</td>
                    <td className="ecart">0.81</td>
                  </tr>
                  <tr>
                    <td>Nombre d'heures par mois</td>
                    <td>191</td>
                    <td>191</td>
                    <td className="ecart">-</td>
                  </tr>
                  <tr>
                    <td>SMIG brut</td>
                    <td>3111.39</td>
                    <td>3266.1</td>
                    <td className="ecart">154.71</td>
                  </tr>
                  <tr>
                    <td>SMIG net*</td>
                    <td>2901.68</td>
                    <td className="highlight-cell">3045.96</td>
                    <td className="ecart">144</td>
                  </tr>
                </tbody>
              </table>
              <p className="table-note">*SMIG brut-Cotisations salariales (6.74%)</p>
            </div>

            <div className="charges-section">
              <div className="table-container">
                <table className="charges-table">
                  <thead>
                    <tr>
                      <th rowSpan="2">Elements</th>
                      <th colSpan="2">Actuellement</th>
                      <th colSpan="2">A partir de janvier 2025</th>
                    </tr>
                    <tr>
                      <th className="subheader">part patronale</th>
                      <th className="subheader">part salariale</th>
                      <th className="subheader">part patronale</th>
                      <th className="subheader">part salariale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cotisations CNSS</td>
                      <td>528.31</td>
                      <td>139.39</td>
                      <td>554.58</td>
                      <td>146.32</td>
                    </tr>
                    <tr>
                      <td>Cotisations AMO</td>
                      <td>127.89</td>
                      <td>70.32</td>
                      <td>134.23</td>
                      <td>73.81</td>
                    </tr>
                    <tr>
                      <td>Total des cotisations</td>
                      <td>656.2</td>
                      <td>209.71</td>
                      <td>678.81</td>
                      <td>220.13</td>
                    </tr>
                    <tr>
                      <td>Coût global*</td>
                      <td className="highlight-cell">3767.59</td>
                      <td>-</td>
                      <td className="highlight-cell">3944.91</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
                <p className="table-note">* Cout global : Salaire brut + cotisations patronales</p>
              </div>
              
              <div className="ecart-table-container">
                <table className="ecart-table">
                  <thead>
                    <tr>
                      <th colSpan="2">Ecart*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cotisation part patronale</td>
                      <td>Une augmentation de <strong>22.61 DH</strong></td>
                    </tr>
                    <tr>
                      <td>Cotisation part salariale</td>
                      <td>Une augmentation <strong>10.42 DH</strong></td>
                    </tr>
                    <tr>
                      <td>Coût global*</td>
                      <td>Une augmentation <strong>177.32 DH</strong></td>
                    </tr>
                  </tbody>
                </table>
                <p className="table-note">* Par employé percevant le SMIG au taux plein</p>
              </div>
            </div>
          </section>

          <section className="article-section">
            <h2 className="section-title">2. Le Salaire Minimum Agricole Garantie (SMAG)</h2>
            
            <p className="section-content">
              Le secteur agricole au Maroc connaîtra bientôt une revalorisation significative des revenus avec une augmentation du <strong>SMAG</strong> (Salaire Minimum Agricole Garanti) de <strong className="highlight-text">10%</strong>, répartie en deux étapes : <strong className="highlight-text">5% en avril 2025 et 5% en avril 2026</strong>. Actuellement fixé à un taux journalier de <strong className="highlight-text">84,37 MAD</strong> et un salaire mensuel brut de <strong className="highlight-text">2 193,62 MAD</strong>, le SMAG vise à améliorer les conditions de vie des travailleurs agricoles. Nous allons examiner l'impact de cette revalorisation sur le secteur et les acteurs concernés.
            </p>
            
            <div className="table-container">
              <table className="salary-table">
                <thead>
                  <tr>
                    <th>Eléments</th>
                    <th>Actuellement</th>
                    <th>A partir d'avril 2025</th>
                    <th>Ecart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SMAG journalier (DH)</td>
                    <td>88.58</td>
                    <td>93.01</td>
                    <td className="ecart">4.43</td>
                  </tr>
                  <tr>
                    <td>Nombre de jours par mois</td>
                    <td>26</td>
                    <td>26</td>
                    <td className="ecart">-</td>
                  </tr>
                  <tr>
                    <td>SMAG brut</td>
                    <td>2303.08</td>
                    <td>2418.46</td>
                    <td className="ecart">115.38</td>
                  </tr>
                  <tr>
                    <td>SMAG net*</td>
                    <td>2147.85</td>
                    <td className="highlight-cell">2255.45</td>
                    <td className="ecart">107.6</td>
                  </tr>
                </tbody>
              </table>
              <p className="table-note">*SMAG brut-Cotisations salariales (6.74%)</p>
            </div>

            <div className="charges-section">
              <div className="table-container">
                <table className="charges-table">
                  <thead>
                    <tr>
                      <th rowSpan="2">Elements</th>
                      <th colSpan="2">Actuellement</th>
                      <th colSpan="2">A partir d'avril 2025</th>
                    </tr>
                    <tr>
                      <th className="subheader">part patronale</th>
                      <th className="subheader">part salariale</th>
                      <th className="subheader">part patronale</th>
                      <th className="subheader">part salariale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cotisations CNSS</td>
                      <td>391.06</td>
                      <td>103.18</td>
                      <td>410.65</td>
                      <td>108.34</td>
                    </tr>
                    <tr>
                      <td>Cotisations AMO</td>
                      <td>94.66</td>
                      <td>52.05</td>
                      <td>99.39</td>
                      <td>54.65</td>
                    </tr>
                    <tr>
                      <td>Total des cotisations</td>
                      <td>485.72</td>
                      <td>155.23</td>
                      <td>510.04</td>
                      <td>162.99</td>
                    </tr>
                    <tr>
                      <td>Coût global*</td>
                      <td className="highlight-cell">2788.8</td>
                      <td>-</td>
                      <td className="highlight-cell">2928.5</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
                <p className="table-note">* Cout global : Salaire brut + cotisations patronales</p>
              </div>
              
              <div className="ecart-table-container">
                <table className="ecart-table">
                  <thead>
                    <tr>
                      <th colSpan="2">Ecart*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cotisation part patronale</td>
                      <td>Une augmentation de <strong>24.32 DH</strong></td>
                    </tr>
                    <tr>
                      <td>Cotisation part salariale</td>
                      <td>Une augmentation <strong>7.76 DH</strong></td>
                    </tr>
                    <tr>
                      <td>Coût global*</td>
                      <td>Une augmentation <strong>139.7 DH</strong></td>
                    </tr>
                  </tbody>
                </table>
                <p className="table-note">* Par employé percevant le SMAG au taux plein</p>
              </div>
            </div>

            <div className="summary-box">
              <h3 className="summary-title">Points clés à retenir</h3>
              <ul className="summary-list">
                <li><strong>Augmentation du SMIG :</strong> +5% en janvier 2025, puis +5% en janvier 2026</li>
                <li><strong>Nouveau SMIG net en 2025 :</strong> 3045.96 DH (augmentation de 144 DH)</li>
                <li><strong>Coût supplémentaire pour l'employeur :</strong> 177.32 DH par employé au SMIG</li>
                <li><strong>Augmentation du SMAG :</strong> +5% en avril 2025, puis +5% en avril 2026</li>
                <li><strong>Nouveau SMAG net en 2025 :</strong> 2255.45 DH (augmentation de 107.6 DH)</li>
                <li><strong>Coût supplémentaire pour l'employeur agricole :</strong> 139.7 DH par employé au SMAG</li>
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

export default RevenusSalariaux2025;