import React, { useState } from 'react';

const ContactSection = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('Success! An email confirmation has been sent to you and Partner E has been notified.');
      e.target.reset();
    }, 1500);
  };

  return (
    <section className="section bg-navy" id="contact" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        <h2 className="section-title light">Request a Meeting / Document Room</h2>
        
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-gold" style={{ marginBottom: '1rem' }}>Contact Investor Relations</h3>
            <p style={{ color: 'var(--off-white)', marginBottom: '2rem', opacity: 0.8 }}>
              Please fill out the form to request a one-on-one meeting with our Partners or to request access to the confidential Data Room.
            </p>
            
            <div style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--gold)' }}>
              <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Partner E</h4>
              <p style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '1rem' }}>Head of Investor Relations</p>
              <p style={{ color: 'white', fontSize: '0.9rem', marginBottom: '0.5rem' }}>📧 ir@belvalcapital.lu</p>
              <p style={{ color: 'white', fontSize: '0.9rem' }}>📞 +352 20 20 20 20</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', color: 'var(--navy)' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Full Name *</label>
                <input required type="text" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Institution / Family Office *</label>
                <input required type="text" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Email Address *</label>
                <input required type="email" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Estimated Investment Size</label>
                <select style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }}>
                  <option>€500k - €1M</option>
                  <option>€1M - €5M</option>
                  <option>€5M - €10M</option>
                  <option>{'>'} €10M</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Message</label>
                <textarea rows="4" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', border: 'none' }}>
                {status === 'Sending...' ? 'Sending...' : 'Submit Enquiry & Request Data Room Access'}
              </button>
              
              {status && status !== 'Sending...' && (
                <div style={{ marginTop: '1rem', padding: '1rem', background: '#e6f4ea', color: '#137333', borderRadius: '4px', fontSize: '0.9rem' }}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
