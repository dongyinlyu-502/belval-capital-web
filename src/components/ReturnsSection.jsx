import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const ReturnsSection = () => {
  const jCurveData = [
    { year: 0, cashFlow: -54.75 },
    { year: 1, cashFlow: -109.5 },
    { year: 2, cashFlow: -164.25 },
    { year: 3, cashFlow: -219.0 },
    { year: 4, cashFlow: -188.68 },
    { year: 5, cashFlow: -149.41 },
    { year: 6, cashFlow: -104.14 },
    { year: 7, cashFlow: -57.86 },
    { year: 8, cashFlow: -10.56 },
    { year: 9, cashFlow: 37.79 },
    { year: 10, cashFlow: 87.19 },
    { year: 11, cashFlow: 137.69 },
    { year: 12, cashFlow: 189.29 },
    { year: 13, cashFlow: 242.01 },
    { year: 14, cashFlow: 1503.77 },
  ].map((d, i) => ({ ...d, label: `Yr ${i+1}` }));

  return (
    <section className="section bg-navy" id="returns">
      <div className="container">
        <h2 className="section-title light">Return Profile</h2>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-5 gap-4 mb-12" style={{ marginBottom: '4rem' }}>
          <div className="card text-center" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderTop: '2px solid var(--gold)' }}>
            <h3 className="text-gold" style={{ fontSize: '1.5rem', margin: 0 }}>~20%</h3>
            <p style={{ color: 'var(--off-white)', fontSize: '0.85rem' }}>Project IRR</p>
          </div>
          <div className="card text-center" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderTop: '2px solid var(--gold)' }}>
            <h3 className="text-gold" style={{ fontSize: '1.5rem', margin: 0 }}>~15%</h3>
            <p style={{ color: 'var(--off-white)', fontSize: '0.85rem' }}>Fund Net IRR</p>
          </div>
          <div className="card text-center" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderTop: '2px solid var(--gold)' }}>
            <h3 className="text-gold" style={{ fontSize: '1.5rem', margin: 0 }}>2.5×</h3>
            <p style={{ color: 'var(--off-white)', fontSize: '0.85rem' }}>MOIC</p>
          </div>
          <div className="card text-center" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderTop: '2px solid var(--gold)' }}>
            <h3 className="text-gold" style={{ fontSize: '1.5rem', margin: 0 }}>8%</h3>
            <p style={{ color: 'var(--off-white)', fontSize: '0.85rem' }}>Hurdle</p>
          </div>
          <div className="card text-center" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderTop: '2px solid var(--gold)' }}>
            <h3 className="text-gold" style={{ fontSize: '1.5rem', margin: 0 }}>{'>'}1.8×</h3>
            <p style={{ color: 'var(--off-white)', fontSize: '0.85rem' }}>DPI</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* J-Curve */}
          <div className="card" style={{ background: 'white' }}>
            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Cumulative Net Cash Flow (J-Curve)</h3>
            <div style={{ width: '100%', height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={jCurveData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="label" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} tickFormatter={(value) => `€${value}M`} />
                  <Tooltip formatter={(value) => [`€${value}M`, 'Cash Flow']} />
                  <ReferenceLine y={0} stroke="#999" />
                  <Line type="monotone" dataKey="cashFlow" stroke="var(--gold)" strokeWidth={3} dot={{ r: 4, fill: 'var(--navy)' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sensitivity Table */}
          <div className="card" style={{ background: 'white', overflowX: 'auto' }}>
            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Sensitivity: Exit Value (€M) vs Cap Rate</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'center' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--navy)', color: 'white' }}>
                  <th style={{ padding: '0.8rem', border: '1px solid #ddd' }}>NOI Scenario</th>
                  <th style={{ padding: '0.8rem', border: '1px solid #ddd' }}>4.0%</th>
                  <th style={{ padding: '0.8rem', border: '1px solid #ddd' }}>4.5% (Base)</th>
                  <th style={{ padding: '0.8rem', border: '1px solid #ddd' }}>5.0%</th>
                  <th style={{ padding: '0.8rem', border: '1px solid #ddd' }}>5.5%</th>
                  <th style={{ padding: '0.8rem', border: '1px solid #ddd' }}>6.0%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd', fontWeight: 'bold' }}>-20%</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,126</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,001</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>901</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>819</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>751</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd', fontWeight: 'bold' }}>-10%</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,267</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,126</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,013</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>921</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>845</td>
                </tr>
                <tr style={{ backgroundColor: 'rgba(201, 168, 76, 0.15)', fontWeight: 'bold' }}>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: 'var(--navy)' }}>Base Case</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: 'var(--navy)' }}>1,408</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: 'var(--gold)', border: '2px solid var(--gold)' }}>1,251</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: 'var(--navy)' }}>1,126</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: 'var(--navy)' }}>1,024</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd', color: 'var(--navy)' }}>938</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd', fontWeight: 'bold' }}>+10%</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,548</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,376</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,239</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,126</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,032</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd', fontWeight: 'bold' }}>+20%</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,689</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,501</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,351</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,228</td>
                  <td style={{ padding: '0.8rem', border: '1px solid #ddd' }}>1,126</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnsSection;
