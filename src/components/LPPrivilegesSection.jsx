import React from 'react';
import { Crown, Star, Key, Plane, Ticket, Wine, ShieldCheck, MapPin } from 'lucide-react';

const LPPrivilegesSection = () => {
  const privileges = [
    { icon: <Crown size={32} />, title: 'Platinum Concierge', text: '24/7 dedicated lifestyle concierge for all bookings within the destination.' },
    { icon: <Star size={32} />, title: 'Michelin Dining Priority', text: 'Guaranteed reservations at our signature fine dining restaurants.' },
    { icon: <Key size={32} />, title: 'Private Vault Access', text: 'Exclusive access to high-security private vaults for Founding LPs.' },
    { icon: <Plane size={32} />, title: 'Helipad Access', text: 'Direct helicopter transfer arrangements from Luxembourg Airport.' },
    { icon: <Ticket size={32} />, title: 'Unlimited VIP Access', text: 'Lifetime VIP fast-track access to the indoor theme park for your family.' },
    { icon: <Wine size={32} />, title: 'Private Wine Cellar', text: 'Complimentary personal sommelier service and private wine storage.' },
    { icon: <ShieldCheck size={32} />, title: 'VIP Parking & Valet', text: 'Lifetime dedicated parking spot with complimentary valet service.' },
    { icon: <MapPin size={32} />, title: 'Founder\'s Suite', text: '14 complimentary nights annually in the Presidential Serviced Suite.' },
  ];

  return (
    <section className="section bg-navy" id="privileges" style={{ backgroundImage: 'linear-gradient(rgba(27, 42, 74, 0.95), rgba(27, 42, 74, 0.95)), url("/concept_spa.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title light" style={{ marginBottom: '1rem' }}>Founding LP Privilege Programme</h2>
          <p style={{ color: 'var(--gold)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>Beyond exceptional financial returns, joining as a Founding LP grants you unparalleled access to Luxembourg's most exclusive lifestyle destination.</p>
        </div>
        
        <div className="grid grid-cols-4 gap-6" style={{ marginBottom: '3rem' }}>
          {privileges.map((privilege, idx) => (
            <div key={idx} style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius)', border: '1px solid rgba(201, 168, 76, 0.3)', backdropFilter: 'blur(5px)', transition: 'all 0.3s ease' }} className="privilege-card">
              <div style={{ color: 'var(--gold)', marginBottom: '1.5rem', background: 'rgba(201, 168, 76, 0.1)', padding: '1rem', borderRadius: '50%' }}>{privilege.icon}</div>
              <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.8rem' }}>{privilege.title}</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>{privilege.text}</p>
            </div>
          ))}
        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .privilege-card:hover {
          background: rgba(201, 168, 76, 0.15) !important;
          border-color: var(--gold) !important;
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
      `}} />
    </section>
  );
};

export default LPPrivilegesSection;
