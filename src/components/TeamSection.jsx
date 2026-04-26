import React from 'react';

const TeamSection = () => {
  const partners = [
    {
      name: 'Partner A',
      title: 'Managing Partner, Real Estate',
      bio: ['20+ years in European Real Estate', 'Former Head of RE at Major PE Firm', 'Executed €5B+ in transactions']
    },
    {
      name: 'Partner B',
      title: 'Partner, Development & Construction',
      bio: ['15+ years in complex development', 'Oversaw 500k sqm of mixed-use builds', 'Expert in sustainable construction']
    },
    {
      name: 'Partner C',
      title: 'Partner, Capital Markets',
      bio: ['Ex-MD at Tier 1 Investment Bank', 'Raised €3B+ across 5 funds', 'Deep European LP relationships']
    },
    {
      name: 'Partner D',
      title: 'Partner, Asset Management',
      bio: ['Expert in retail & hospitality operations', 'Former CEO of major theme park group', 'Drove 30% NOI growth in prior portfolio']
    },
    {
      name: 'Partner E',
      title: 'Partner, Investor Relations',
      bio: ['10+ years in fund structuring & IR', 'Led communications for €10B AUM', 'Primary contact for LPs']
    }
  ];

  return (
    <section className="section" id="team">
      <div className="container">
        <h2 className="section-title">Five Partners. One Vision.</h2>
        
        <div className="grid grid-cols-5 gap-4" style={{ marginBottom: '3rem' }}>
          {partners.map((partner, idx) => (
            <div key={idx} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ width: '100%', aspectRatio: '1', backgroundColor: 'rgba(27, 42, 74, 0.1)', borderRadius: 'var(--radius)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                Photo
              </div>
              <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', color: 'var(--navy)' }}>{partner.name}</h3>
              <p style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem', minHeight: '40px' }}>{partner.title}</p>
              <ul style={{ paddingLeft: '1rem', fontSize: '0.85rem', color: '#555', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {partner.bio.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--gold)', color: 'var(--navy)', padding: '1.5rem', borderRadius: 'var(--radius)', textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>
          GP commits €4M (2% of fund) — fully aligned with LP interests
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
