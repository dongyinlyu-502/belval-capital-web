import React from 'react';

const FundOverviewSection = () => {
  return (
    <section className="section bg-navy" id="fund">
      <div className="container">
        <h2 className="section-title light">Fund at a Glance</h2>
        
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* Left: Structure Diagram */}
          <div style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius)', border: '1px solid rgba(201, 168, 76, 0.3)' }}>
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-between w-full gap-4">
                <div style={{ flex: 1, padding: '1rem', border: '2px solid var(--gold)', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold' }}>Limited Partners (LPs)<br/><span style={{fontSize: '0.8rem', fontWeight: 'normal'}}>98% Capital</span></div>
                <div style={{ flex: 1, padding: '1rem', border: '2px solid var(--gold)', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold', background: 'var(--gold)', color: 'var(--navy)' }}>General Partner (GP)<br/><span style={{fontSize: '0.8rem', fontWeight: 'normal'}}>2% Capital</span></div>
              </div>
              <div style={{ height: '30px', width: '2px', background: 'var(--gold)' }}></div>
              <div style={{ width: '80%', padding: '1rem', border: '2px solid var(--gold)', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold' }}>Belval Capital Partners SCSp (RAIF)</div>
              <div style={{ height: '30px', width: '2px', background: 'var(--gold)' }}></div>
              <div style={{ width: '60%', padding: '1rem', border: '2px dashed var(--gold)', borderRadius: '4px', textAlign: 'center' }}>Asset SPV</div>
              <div style={{ height: '30px', width: '2px', background: 'var(--gold)' }}></div>
              <div style={{ width: '100%', padding: '1.5rem', border: '1px solid white', borderRadius: '4px', textAlign: 'center', background: 'white', color: 'var(--navy)', fontWeight: 'bold' }}>Kirchberg Work-Life Destination</div>
            </div>
          </div>

          {/* Right: Parameters Table */}
          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 'bold', color: 'var(--gold)' }}>Legal Structure</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right' }}>Luxembourg SCSp (RAIF)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 'bold', color: 'var(--gold)' }}>Target Fund Size</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right' }}>€200 Million</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 'bold', color: 'var(--gold)' }}>Fund Life</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right' }}>15 Years (5 Inv + 10 Harvest)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 'bold', color: 'var(--gold)' }}>Management Fee</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right' }}>2.0% (Inv) / 1.5% (Harvest)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 'bold', color: 'var(--gold)' }}>Carried Interest</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right' }}>20%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 'bold', color: 'var(--gold)' }}>Hurdle Rate</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right' }}>8% p.a.</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem 0', fontWeight: 'bold', color: 'var(--gold)' }}>Minimum Ticket</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right' }}>€500,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundOverviewSection;
