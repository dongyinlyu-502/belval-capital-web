import React from 'react';

const OpportunitySection = () => {
  return (
    <section className="section" id="opportunity" style={{ background: 'white' }}>
      <div className="container">
        <h2 className="section-title">Why Luxembourg. Why Now.</h2>
        
        <div className="grid grid-cols-4 gap-4" style={{ marginBottom: '4rem' }}>
          <div className="card text-center" style={{ background: 'var(--off-white)' }}>
            <h3 className="text-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>66,000</h3>
            <p style={{ color: 'var(--navy)' }}>Kirchberg Workers by 2040</p>
          </div>
          <div className="card text-center" style={{ background: 'var(--off-white)' }}>
            <h3 className="text-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>4M+</h3>
            <p style={{ color: 'var(--navy)' }}>Regional Catchment Population</p>
          </div>
          <div className="card text-center" style={{ background: 'var(--off-white)' }}>
            <h3 className="text-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>228K</h3>
            <p style={{ color: 'var(--navy)' }}>Daily Cross-Border Commuters</p>
          </div>
          <div className="card text-center" style={{ background: 'var(--off-white)' }}>
            <h3 className="text-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Zero</h3>
            <p style={{ color: 'var(--navy)' }}>Competing Experience-Led Destinations</p>
          </div>
        </div>

        {/* Reasons with Images */}
        <div className="grid grid-cols-2 gap-8 items-center" style={{ marginBottom: '4rem' }}>
          <div>
            <h3 style={{ borderBottom: '2px solid var(--gold)', paddingBottom: '0.5rem', display: 'inline-block', color: 'var(--navy)' }}>Structural Demand</h3>
            <p style={{ marginTop: '1rem', color: '#555', fontSize: '1.1rem' }}>Robust economic growth driving an influx of high-income professionals needing premium work-life spaces. The Grade-A office market is heavily constrained, providing guaranteed high yields.</p>
          </div>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <img src="/concept_office.png" alt="Concept Office" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 items-center" style={{ marginBottom: '4rem' }}>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <img src="/concept_residential.png" alt="Concept Residential" style={{ width: '100%', display: 'block' }} />
          </div>
          <div>
            <h3 style={{ borderBottom: '2px solid var(--gold)', paddingBottom: '0.5rem', display: 'inline-block', color: 'var(--navy)' }}>Zero Competition</h3>
            <p style={{ marginTop: '1rem', color: '#555', fontSize: '1.1rem' }}>No existing integrated lifestyle, entertainment, and Grade-A office destinations in the region. Combining luxurious living with theme parks gives an unassailable moat.</p>
          </div>
        </div>

        <div className="text-center" style={{ padding: '3rem', background: 'var(--off-white)', borderRadius: 'var(--radius)' }}>
          <h3 style={{ borderBottom: '2px solid var(--gold)', paddingBottom: '0.5rem', display: 'inline-block', color: 'var(--navy)' }}>Unique Entry Window</h3>
          <p style={{ marginTop: '1rem', color: '#555', fontSize: '1.1rem', maxWidth: '800px', margin: '1rem auto 0' }}>A generational opportunity to acquire prime Kirchberg land and define the future of Luxembourg's urban landscape before values soar further.</p>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
