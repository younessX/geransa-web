import React from 'react';
import './RevenusFonciers2025.css';
import geransaLogo from '../../assets/Logo h.png';

const RevenusFonciers2025 = () => {
  return (
    <div className="article-page">
      <div className="article-container">
        <div className="article-header">
          <h1 className="article-main-title">Changements apportés par la Loi de Finances 2025 sur les revenus fonciers</h1>
          <h2 className="article-subtitle">Article 64- Détermination du revenu foncier imposable</h2>
        </div>

        <div className="article-content">
          <div className="logo-container">
            <img src={geransaLogo} alt="GERANSA SARL - Cabinet Comptable Agréé" className="company-logo" />
          </div>

          <section className="article-section">
            <h2 className="section-title">IV. Option pour le taux libératoire sur les revenus fonciers</h2>
            
            <p className="section-content">
              La <strong>Loi de Finances 2025</strong> apporte des modifications importantes concernant l'imposition <strong className="highlight-text">des revenus fonciers</strong>, notamment par l'introduction d'un <strong className="highlight-text">taux libératoire</strong>. Le taux libératoire signifie que les revenus ayant subi l'impôt retenu à la source, aux taux spécifiques, libèrent leurs titulaires de l'obligation de les inclure dans leurs déclarations de revenu global. Concernant la procédure à suivre pour bénéficier de ce taux libératoire, il y a des délais à respecter :
            </p>
            
            <ul className="section-list">
              <li>Les contribuables doivent remettre une copie du récépissé aux personnes chargées de la retenue à la source <strong className="highlight-text">au moins 30 jours</strong> avant la date d'échéance du loyer du mois suivant le dépôt de la demande.</li>
              <li>L'option prendra effet <strong className="highlight-text">dès le mois qui suit la remise du récépissé</strong>.</li>
              <li>Si le contribuable souhaite mettre fin à l'option, il devra faire une nouvelle demande <strong className="highlight-text">15 jours</strong> avant l'échéance du loyer du mois suivant.</li>
            </ul>
            
            <p className="section-content">
              Nous verrons ensuite dans quelles situations il est <strong className="highlight-text">plus avantageux de choisir ce taux libératoire</strong>.
            </p>
          </section>

          <section className="article-section">
            <h2 className="section-title">Cas 1 : Contribuable Ayant Seulement un Revenu Foncier</h2>
            
            <p className="section-content">
              Un contribuable (<strong>PP</strong>), perçoit <strong>uniquement des revenus fonciers</strong> provenant de la location d'un appartement à une société. Le loyer mensuel est de <strong className="highlight-text">12000 DH</strong>, soit un revenu annuel de <strong className="highlight-text">144 000 DH</strong>. Selon la législation en vigueur, ce contribuable peut opter pour l'imposition de ses revenus fonciers selon <strong>le taux libératoire</strong> ou choisir <strong>le système classique d'imposition</strong>.
            </p>
            
            <div className="table-container">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Éléments</th>
                    <th>Régime Normal</th>
                    <th>Régime Libératoire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Revenu Fonciers Brut</td>
                    <td>144 000</td>
                    <td>144 000</td>
                  </tr>
                  <tr>
                    <td>Abattement Applicable</td>
                    <td>Abattement de 40 % (57 600)</td>
                    <td>Aucun abattement</td>
                  </tr>
                  <tr>
                    <td>Revenu Imposable</td>
                    <td>144 000 - 57 600 = 86 400</td>
                    <td>144 000</td>
                  </tr>
                  <tr>
                    <td>Taux d'Imposition</td>
                    <td>Barème progressif de l'IR</td>
                    <td>Taux libératoire (20%)</td>
                  </tr>
                  <tr>
                    <td>Impôt Calculé</td>
                    <td>(86 400 * 30%) - 18000 = 7920</td>
                    <td>144 000 * 20% = 28 800</td>
                  </tr>
                  <tr>
                    <td>Retenue à la Source (RAS)</td>
                    <td>144 000 DH * 15% = 21 600</td>
                    <td>Non applicable</td>
                  </tr>
                  <tr className="highlighted-row">
                    <td>Montant de l'impôt dû</td>
                    <td className="highlight-cell">7920</td>
                    <td className="highlight-cell">28 800</td>
                  </tr>
                </tbody>
              </table>
              <p className="table-note">*Valeurs en dirhams</p>
            </div>
            
            <div className="conclusion-box">
              <p className="conclusion-text">
                Le régime classique est <strong>plus avantageux</strong> que l'option libératoire. Avec l'option libératoire, le contribuable paie <strong>28 800 DH</strong> sur son revenu brut. En revanche, sous le régime classique, l'impôt est calculé après un abattement de 40 %, ce qui réduit considérablement la base imposable. Cela permet de réduire l'impôt à <strong>7 920 DH</strong>. De plus, étant donné que le contribuable a versé <strong>21 600 DH</strong> à titre de retenue à la source et que son impôt dû est seulement de <strong>7 920 DH</strong>, il peut demander une restitution de la différence de <strong>13 680 DH</strong>.
              </p>
            </div>
          </section>

          <section className="article-section">
            <h2 className="section-title">Cas 2 : Un Contribuable Ayant Plusieurs Revenus</h2>
            
            <div className="subsection">
              <h3 className="subsection-title">Système Classique : Calcul de l'Impôt sur le Revenu Global</h3>
              
              <p className="section-content">
                Un commerçant revendeur de vêtements et accessoires a réalisé au titre de l'exercice 2025 <strong>un bénéfice imposable de 500 000 DH</strong>. Le revenu professionnel de ce commerçant est déterminé selon <strong>le régime du RNR</strong>. Son entreprise est exonérée de la cotisation minimale puisqu'elle a été créée en janvier 2025. Ce contribuable a également perçu au cours de l'année 2025 <strong>des loyers provenant de la location d'un appartement à une entreprise</strong>. Le montant du loyer mensuel <strong>est de 20 000 DH</strong>. Le locataire a procédé mensuellement à la retenue à la source au titre de l'IR au taux <strong>non libératoire de 15%</strong>.
              </p>
              
              <div className="calculation-steps">
                <p><strong>Calcul du revenu global du contribuable pour l'année 2025 :</strong></p>
                <ul className="calculation-list">
                  <li>Revenu professionnel : 500 000 DH</li>
                  <li>Revenu foncier net : (240 000 x 60%) = 144 000 DH</li>
                  <li>Revenu global = 500 000 + 144 000 = 644 000 DH</li>
                </ul>
                
                <p><strong>Calcul de l'IR sur ce revenu global (en utilisant le barème progressif de l'IR prévu à l'article 73-I du CGI) :</strong></p>
                <div className="calculation-formula">
                  IR dû = (644 000 x 37%) - 27 400 = <strong>210 880 DH</strong>
                </div>
                
                <p><strong>Déduction de la RAS de 15% sur les loyers :</strong></p>
                <p>Le montant prélevé chaque mois est de (20 000 x 15%) = 3000 DH, soit 36 000 DH pour 12 mois.</p>
                <div className="calculation-formula">
                  Montant de l'IR à verser (reliquat) = 210 880 - 36 000 = <strong>174 880 DH</strong>
                </div>
              </div>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Option du Taux Libératoire pour les Revenus Fonciers</h3>
              
              <p className="section-content">
                Prenons le même exemple, mais maintenant le contribuable opte pour <strong>le système libératoire pour les revenus fonciers</strong>. Ce système permet de ne pas inclure les revenus fonciers dans le revenu global soumis à l'impôt, mais de payer un impôt distinct sur ces revenus.
              </p>
              
              <div className="calculation-steps">
                <p><strong>Calcul avec le système libératoire :</strong></p>
                <ul className="calculation-list">
                  <li>Revenu foncier brut : 240 000 DH (loyer annuel)</li>
                  <li>Taux libératoire sur les loyers : 20%</li>
                  <li>Impôt libératoire sur les loyers : 240 000 × 20% = <strong>48 000 DH</strong></li>
                </ul>
                
                <p><strong>Calcul du revenu global du contribuable pour l'année 2025 :</strong></p>
                <ul className="calculation-list">
                  <li>Revenu professionnel : 500 000 DH</li>
                </ul>
                
                <p>L'impôt sur ce revenu est calculé indépendamment des loyers, en utilisant le barème progressif :</p>
                <div className="calculation-formula">
                  500 000 × 37% − 27 400 = <strong>157 600 DH</strong>
                </div>
                
                <p><strong>Total d'impôt à payer avec le système libératoire :</strong></p>
                <ul className="calculation-list">
                  <li>Impôt sur le revenu professionnel : 157 600 DH</li>
                  <li>Impôt libératoire sur les loyers : 48 000 DH</li>
                  <li>Montant total d'impôt à payer : <strong>205 600 DH</strong></li>
                </ul>
              </div>
              
              <div className="conclusion-box advantage">
                <p className="conclusion-text">
                  Dans cet exemple, le contribuable paie un total de <strong>210 880 DH</strong> d'impôt avec le système classique et <strong>205 600 DH</strong> avec le système libératoire, soit <strong>une économie de 5 280 DH</strong>. Le système libératoire est plus avantageux car il applique un impôt fixe de 20% sur les loyers, ce qui évite de majorer la base d'imposition pour le revenu global. Ce système est <strong>particulièrement favorable</strong> lorsque le contribuable a plusieurs sources de revenus, surtout si les revenus locatifs sont importants.
                </p>
              </div>
            </div>
          </section>

          <section className="article-section">
            <h2 className="section-title">Conclusion et recommandations</h2>
            
            <div className="summary-box">
              <h3 className="summary-title">Quand choisir le taux libératoire?</h3>
              <div className="two-columns">
                <div className="column">
                  <h4>Privilégier le régime normal lorsque :</h4>
                  <ul className="summary-list">
                    <li>Vous avez <strong>uniquement</strong> des revenus fonciers</li>
                    <li>L'abattement de 40% réduit significativement la base imposable</li>
                    <li>Le taux marginal applicable est inférieur à 20%</li>
                    <li>Vous avez droit à une restitution d'impôt</li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Privilégier le taux libératoire lorsque :</h4>
                  <ul className="summary-list">
                    <li>Vous avez <strong>plusieurs sources</strong> de revenus</li>
                    <li>Votre taux marginal d'imposition global est élevé (supérieur à 30&nbsp;%)</li>
                    <li>Les revenus fonciers sont importants</li>
                    <li>Vous cherchez à simplifier vos obligations fiscales</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="section-content">
              Il est recommandé d'effectuer une simulation personnalisée selon votre situation spécifique afin de déterminer le régime fiscal le plus avantageux pour vos revenus fonciers.
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

export default RevenusFonciers2025;