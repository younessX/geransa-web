import React from 'react';
import './ClientsSection.css';

// Replace these with your actual client logo imports
import clientLogo1 from '../assets/client-1.jpeg';
import clientLogo3 from '../assets/client-3.png';
import clientLogo5 from '../assets/client-5.png';
// Add more imports as needed

const ClientsSection = () => {
  // Organize your client logos in rows with custom sizing
  const clientRows = [
    [
      {
        src: clientLogo1,
        alt: 'Client 1',
        customStyle: { width: '160px', height: '80px' },
        containerStyle: { width: '210px', height: '120px' }
      },
      {
        src: clientLogo3,
        alt: 'Client 3',
        customStyle: { width: '150px', height: '120px' },
        containerStyle: { width: '210px', height: '120px' }
      },
      {
        src: clientLogo5,
        alt: 'Client 5',
        customStyle: { width: '140px', height: '70px' },
        containerStyle: { width: '210px', height: '120px' }
      }
    ]
    // Add more rows as needed
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="section-title">PARMI NOS CLIENTS</h2>
        <div className="title-underline"></div>
        
        {clientRows.map((row, rowIndex) => (
          <div key={rowIndex} className="client-logos-row">
            {row.map((client, index) => (
              <div 
                key={index} 
                className="client-logo-wrapper"
                style={{
                  width: client.containerStyle?.width || '200px',
                  height: client.containerStyle?.height || '120px'
                }}
              >
                <img 
                  src={client.src} 
                  alt={client.alt} 
                  className="client-logo" 
                  style={{
                    width: client.customStyle.width,
                    height: client.customStyle.height,
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;