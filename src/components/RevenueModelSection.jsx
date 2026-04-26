import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const RevenueModelSection = () => {
  const data = [
    { name: 'Grade-A Offices', value: 21.0, color: '#1B2A4A' },
    { name: 'Lifestyle Retail', value: 9.0, color: '#2A3F6D' },
    { name: 'Theme Park', value: 8.8, color: '#C9A84C' },
    { name: 'Serviced Apts', value: 7.2, color: '#D4B86A' },
    { name: 'F&B Street', value: 4.8, color: '#E0C988' },
    { name: 'Conf & Fitness', value: 3.0, color: '#8C9BB4' },
    { name: 'Car Park', value: 2.5, color: '#B0BCCF' },
  ];

  return (
    <section className="section" id="revenue">
      <div className="container">
        <h2 className="section-title">Stabilised Revenue Model — Year 7</h2>
        
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* Left: Table */}
          <div className="card" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--navy)', textAlign: 'left' }}>
                  <th style={{ padding: '1rem', color: 'var(--navy)' }}>Asset Zone</th>
                  <th style={{ padding: '1rem', color: 'var(--navy)', textAlign: 'right' }}>Annual NOI (€M)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '12px', height: '12px', backgroundColor: item.color, borderRadius: '2px' }}></div>
                      {item.name}
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '500' }}>€{item.value.toFixed(1)}</td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: 'rgba(201, 168, 76, 0.1)', borderTop: '2px solid var(--gold)' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold', color: 'var(--navy)' }}>Total Stabilised NOI</td>
                  <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 'bold', color: 'var(--gold)', fontSize: '1.2rem' }}>€56.3</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right: Chart */}
          <div className="flex flex-col items-center justify-center">
            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={140}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `€${value.toFixed(1)}M`} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', color: '#666' }}>Total NOI</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--navy)' }}>€56.3M</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueModelSection;
