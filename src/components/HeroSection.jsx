import React from 'react';

const HeroSection = () => {
  return (
    <section className="section bg-navy" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center',
      backgroundImage: 'linear-gradient(rgba(27, 42, 74, 0.8), rgba(27, 42, 74, 0.9)), url("/hero_bg.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container">
        <h4 className="text-gold" style={{ letterSpacing: '2px', marginBottom: '1rem', fontWeight: 'bold' }}>BELVAL CAPITAL PARTNERS</h4>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>Luxembourg's Premier Work-Life Real Estate Fund</h1>
        
        <div className="grid grid-cols-3 gap-8" style={{ marginBottom: '4rem', maxWidth: '900px', margin: '0 auto 4rem auto' }}>
          <div className="card" style={{ background: 'rgba(255, 255, 255, 0.05)', borderColor: 'var(--gold)' }}>
            <h2 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>€200M</h2>
            <p style={{ color: 'var(--off-white)' }}>Target Fund Size</p>
          </div>
          <div className="card" style={{ background: 'rgba(255, 255, 255, 0.05)', borderColor: 'var(--gold)' }}>
            <h2 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>15 Years</h2>
            <p style={{ color: 'var(--off-white)' }}>Fund Life (5+10)</p>
          </div>
          <div className="card" style={{ background: 'rgba(255, 255, 255, 0.05)', borderColor: 'var(--gold)' }}>
            <h2 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>12–15%</h2>
            <p style={{ color: 'var(--off-white)' }}>Target Net IRR</p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a href="#document-room" className="btn btn-primary">Download Pitch Deck</a>
          <a href="#contact" className="btn btn-outline">Request a Meeting</a>
        </div>
        
        <p style={{ marginTop: '5rem', opacity: 0.6, fontSize: '0.85rem' }}>May 2026 · Strictly Confidential</p>
      </div>
    </section>
  );
};

export default HeroSection;
