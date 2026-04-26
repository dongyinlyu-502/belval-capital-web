import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#0f172a', color: 'rgba(255,255,255,0.5)', padding: '3rem 5%', textAlign: 'center', fontSize: '0.85rem' }}>
      <div className="container">
        <div style={{ marginBottom: '1.5rem', color: 'var(--gold)', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '2px' }}>
          BELVAL CAPITAL PARTNERS
        </div>
        <p style={{ marginBottom: '1rem' }}>
          BELVAL CAPITAL PARTNERS SCSp · Luxembourg · May 2026 · Strictly Confidential
        </p>
        <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.6 }}>
          This document is highly confidential and intended solely for the use of the individual or entity to whom it is addressed. It does not constitute an offer to sell, or a solicitation of an offer to buy, any securities.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
