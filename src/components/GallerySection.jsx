import React from 'react';

const GallerySection = () => {
  const row1 = [
    { src: '/concept_interior.png', alt: 'Lifestyle Retail & Atrium', title: 'Lifestyle Retail & Atrium' },
    { src: '/concept_office.png', alt: 'Grade-A Office Space', title: 'Grade-A Office Space' },
    { src: '/concept_dining.png', alt: 'Michelin-Star Dining Street', title: 'Michelin-Star Dining Street' },
    { src: '/concept_spa.png', alt: 'Ultra-Luxury Wellness Spa', title: 'Ultra-Luxury Wellness Spa' },
    { src: '/concept_themepark.png', alt: 'Indoor Theme Park', title: 'Indoor Theme Park' },
    { src: '/concept_event.png', alt: 'Corporate Event Space', title: 'Corporate Event Space' }
  ];

  const row2 = [
    { src: '/concept_rooftop.png', alt: 'Rooftop Infinity Pool & Bar', title: 'Rooftop Infinity Pool & Bar' },
    { src: '/concept_residential.png', alt: 'Luxury Serviced Apartments', title: 'Luxury Serviced Apartments' },
    { src: '/concept_lounge.png', alt: 'Exclusive VIP Lounge', title: 'Exclusive VIP Lounge' },
    { src: '/concept_atrium.png', alt: 'Grand Glass Atrium', title: 'Grand Glass Atrium' },
    { src: '/hero_bg.png', alt: 'Masterplan Overview', title: 'Masterplan Overview' }
  ];

  return (
    <section className="section bg-navy" id="gallery" style={{ padding: '6rem 0', overflow: 'hidden' }}>
      <div className="container" style={{ padding: '0 5%' }}>
        <h2 className="section-title light" style={{ marginBottom: '1rem' }}>The Destination</h2>
        <p style={{ textAlign: 'center', color: 'var(--gold)', maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
          An immersive, world-class experience. A place to work, live, play, and thrive. See the vision of Luxembourg's most iconic future landmark.
        </p>
      </div>
      
      <div className="marquee-wrapper">
        <div className="marquee-track track-left">
          {[...row1, ...row1].map((img, idx) => (
            <div key={idx} className="marquee-item">
              <img src={img.src} alt={img.alt} />
              <div className="overlay">
                <h3>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-wrapper" style={{ marginTop: '20px' }}>
        <div className="marquee-track track-right">
          {[...row2, ...row2].map((img, idx) => (
            <div key={idx} className="marquee-item">
              <img src={img.src} alt={img.alt} />
              <div className="overlay">
                <h3>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .marquee-track {
          display: flex;
          width: fit-content;
          gap: 20px;
        }
        .track-left {
          animation: scrollLeft 40s linear infinite;
        }
        .track-right {
          animation: scrollRight 40s linear infinite;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-item {
          position: relative;
          width: 450px;
          height: 300px;
          border-radius: var(--radius);
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .marquee-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .marquee-item:hover img {
          transform: scale(1.05);
        }
        .marquee-item .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 3rem 1.5rem 1.5rem;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .marquee-item:hover .overlay {
          opacity: 1;
        }
        .marquee-item .overlay h3 {
          margin: 0;
          font-size: 1.2rem;
          color: var(--gold);
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(calc(-50% - 10px)); }
          100% { transform: translateX(0); }
        }
      `}} />
    </section>
  );
};

export default GallerySection;
