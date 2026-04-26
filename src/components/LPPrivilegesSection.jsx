import React from 'react';
import { ParkingCircle, Ticket, Gift, Building, Dumbbell, Calendar, Award, Map } from 'lucide-react';

const LPPrivilegesSection = () => {
  const privileges = [
    { icon: <ParkingCircle size={32} />, text: 'Lifetime Free Parking + Dedicated VIP Spot' },
    { icon: <Ticket size={32} />, text: 'VIP Theme Park Access + 20 Annual Passes' },
    { icon: <Gift size={32} />, text: 'Free Family Access on LP Birthdays' },
    { icon: <Building size={32} />, text: 'Free Conference Centre Use (4x per year)' },
    { icon: <Dumbbell size={32} />, text: 'Lifetime Premium Fitness Centre Membership' },
    { icon: <Calendar size={32} />, text: 'Exclusive Annual Holiday Gift Hampers' },
    { icon: <Award size={32} />, text: 'Name engraved on "Founding Partners" Wall' },
    { icon: <Map size={32} />, text: 'Annual Private Asset Tour & Strategy Update' },
  ];

  return (
    <section className="section bg-navy" id="privileges">
      <div className="container">
        <h2 className="section-title light">Founding LP Privilege Programme</h2>
        
        <div className="grid grid-cols-4 gap-8" style={{ marginBottom: '3rem' }}>
          {privileges.map((privilege, idx) => (
            <div key={idx} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius)', border: '1px solid rgba(201, 168, 76, 0.2)', transition: 'all 0.3s ease' }} className="privilege-card">
              <div style={{ color: 'var(--gold)', marginBottom: '1.5rem' }}>{privilege.icon}</div>
              <p style={{ color: 'var(--off-white)', fontWeight: '500', fontSize: '0.95rem', margin: 0 }}>{privilege.text}</p>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
          * All privileges effective from asset opening in Year 5. No application required.
        </p>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .privilege-card:hover {
          background: rgba(201, 168, 76, 0.1);
          border-color: var(--gold);
          transform: translateY(-5px);
        }
      `}} />
    </section>
  );
};

export default LPPrivilegesSection;
