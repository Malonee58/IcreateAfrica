import { useState } from 'react';
import './Portfolio.css';

const projects = [
  { title: 'Corporate Identity Suite', cat: 'Branding' },
  { title: 'Event Banner Series', cat: 'Printing' },
  { title: 'Fleet Vehicle Wraps', cat: 'Branding' },
  { title: 'Premium Packaging Line', cat: 'Packaging' },
  { title: 'Business Card Collection', cat: 'Printing' },
  { title: 'Retail Signage System', cat: 'Printing' },
  { title: 'Brand Guidelines Book', cat: 'Branding' },
  { title: 'Custom Gift Packaging', cat: 'Packaging' },
];

const filters = ['All', 'Printing', 'Branding', 'Packaging'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? projects : projects.filter(p => p.cat === active);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <p className="section-label reveal">Our Work</p>
          <h2 className="section-title reveal reveal-delay-1">
            A Portfolio That<span> Speaks for Itself</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{marginTop:'0.75rem'}}>
            Browse our recent projects across printing, branding, and packaging.
          </p>
        </div>

        <div className="portfolio-filters reveal reveal-delay-3">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {visible.map(({ title, cat }, i) => (
            <div className={`portfolio-card reveal reveal-delay-${(i % 4) + 1}`} key={title}>
              <div className="img-placeholder portfolio-img">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                <span>Project Image</span>
              </div>
              <div className="portfolio-info">
                <span className="portfolio-cat">{cat}</span>
                <h3 className="portfolio-title">{title}</h3>
              </div>
              <div className="portfolio-overlay">
                <span className="portfolio-view">View Project →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
