import React from 'react';
import { MapPin, Building2, ShoppingBag, FerrisWheel, Home, Coffee, Mic, Car } from 'lucide-react';

const AssetSection = () => {
  const assets = [
    { icon: <Building2 size={24} />, name: 'Grade-A Offices', area: '42,000 sqm', rev: '€21.0M' },
    { icon: <ShoppingBag size={24} />, name: 'Lifestyle Retail', area: '18,000 sqm', rev: '€9.0M' },
    { icon: <FerrisWheel size={24} />, name: 'Theme Park', area: '22,000 sqm', rev: '€8.8M' },
    { icon: <Home size={24} />, name: 'Serviced Apts', area: '200 units', rev: '€7.2M' },
    { icon: <Coffee size={24} />, name: 'F&B Street', area: '8,000 sqm', rev: '€4.8M' },
    { icon: <Mic size={24} />, name: 'Conference & Fitness', area: '6,000 sqm', rev: '€3.0M' },
    { icon: <Car size={24} />, name: 'Car Park', area: '2,500 bays', rev: '€2.5M' },
  ];

  return (
    <section className="section bg-navy" style={{ background: 'var(--off-white)', color: 'var(--navy)' }} id="asset">
      <div className="container">
        <h2 className="section-title">Kirchberg Work-Life Destination</h2>
        
        <div className="grid grid-cols-3 gap-8 mb-12" style={{ marginBottom: '4rem' }}>
          {/* Left: Concept Art */}
          <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img src="/concept_interior.png" alt="Concept Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Middle: Asset Key Parameters */}
          <div className="card bg-navy text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 className="text-gold" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Key Parameters</h3>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>122,000</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Total SQM</div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>€430M</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Total Cost</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>Year 15</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Target Exit</div>
            </div>
          </div>

          {/* Right: Asset Classes */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Asset Classes</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {assets.map((asset, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                    <span style={{ color: 'var(--gold)' }}>{asset.icon}</span>
                    <span style={{ fontWeight: 'bold' }}>{asset.name}</span>
                  </div>
                  <div style={{ width: '80px', textAlign: 'right', color: '#666' }}>{asset.area}</div>
                  <div style={{ width: '70px', textAlign: 'right', fontWeight: 'bold', color: 'var(--navy)' }}>{asset.rev}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ marginTop: '4rem', padding: '2rem', background: 'white', borderRadius: 'var(--radius)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Development Timeline</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '24px', left: '10%', right: '10%', height: '4px', background: 'rgba(201, 168, 76, 0.3)', zIndex: 0 }}></div>
            
            {['Year 1', 'Year 5', 'Year 7', 'Year 15'].map((year, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, width: '25%' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--gold)', marginBottom: '1rem', border: '4px solid white', boxShadow: '0 0 0 2px var(--gold)' }}></div>
                <div style={{ fontWeight: 'bold', color: 'var(--navy)', marginBottom: '0.5rem' }}>{year}</div>
                <div style={{ fontSize: '0.85rem', color: '#666', textAlign: 'center' }}>
                  {idx === 0 && 'Permits & Construction Start'}
                  {idx === 1 && 'Asset Opening & Ramp-up'}
                  {idx === 2 && 'Stabilised Operations (95% occ)'}
                  {idx === 3 && 'Target Asset Sale'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetSection;
