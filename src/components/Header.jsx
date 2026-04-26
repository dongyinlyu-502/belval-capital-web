import React from 'react';

const Header = () => {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(27, 42, 74, 0.95)', borderBottom: '1px solid rgba(201, 168, 76, 0.3)', backdropFilter: 'blur(10px)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', padding: '0 5%' }}>
        <div style={{ color: 'var(--gold)', fontWeight: 'bold', letterSpacing: '1px', fontSize: '1.2rem' }}>
          BELVAL CAPITAL
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#opportunity" style={{ color: 'var(--off-white)', textDecoration: 'none', fontSize: '0.9rem' }}>Opportunity</a>
          <a href="#fund" style={{ color: 'var(--off-white)', textDecoration: 'none', fontSize: '0.9rem' }}>The Fund</a>
          <a href="#asset" style={{ color: 'var(--off-white)', textDecoration: 'none', fontSize: '0.9rem' }}>Asset</a>
          <a href="#returns" style={{ color: 'var(--off-white)', textDecoration: 'none', fontSize: '0.9rem' }}>Returns</a>
          <a href="#team" style={{ color: 'var(--off-white)', textDecoration: 'none', fontSize: '0.9rem' }}>Team</a>
        </nav>
        <div>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Investor Portal</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
