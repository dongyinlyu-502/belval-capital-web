import React from 'react';

const OpportunitySection = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Why Luxembourg. Why Now.</h2>
        
        <div className="grid grid-cols-4 gap-4" style={{ marginBottom: '4rem' }}>
          <div className="card text-center">
            <h3 className="text-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>66,000</h3>
            <p>Kirchberg Workers by 2040</p>
          </div>
          <div className="card text-center">
            <h3 className="text-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>4M+</h3>
            <p>Regional Catchment Population</p>
          </div>
          <div className="card text-center">
            <h3 className="text-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>228K</h3>
            <p>Daily Cross-Border Commuters</p>
          </div>
          <div className="card text-center">
            <h3 className="text-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Zero</h3>
            <p>Competing Experience-Led Destinations</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center" style={{ marginTop: '2rem' }}>
          <div>
            <h3 style={{ borderBottom: '2px solid var(--gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>Structural Demand</h3>
            <p style={{ marginTop: '1rem' }}>Robust economic growth driving an influx of high-income professionals needing premium work-life spaces.</p>
          </div>
          <div>
            <h3 style={{ borderBottom: '2px solid var(--gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>Zero Competition</h3>
            <p style={{ marginTop: '1rem' }}>No existing integrated lifestyle, entertainment, and Grade-A office destinations in the region.</p>
          </div>
          <div>
            <h3 style={{ borderBottom: '2px solid var(--gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>Unique Entry Window</h3>
            <p style={{ entryWindow: '1rem' }}>A generational opportunity to acquire prime Kirchberg land and define the future of Luxembourg's urban landscape.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
