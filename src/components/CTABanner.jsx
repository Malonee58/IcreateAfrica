import { scrollToSection } from '../utils/scroll';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-bg">
        <div className="cta-orb-1" />
        <div className="cta-orb-2" />
        <div className="cta-slash" />
      </div>
      <div className="container">
        <div className="cta-inner">
          <div className="cta-text">
            <p className="cta-eyebrow">Take the Next Step</p>
            <h2 className="cta-headline">Ready to Elevate Your Brand?</h2>
            <p className="cta-sub">Get a free, no-obligation quote for your next print or branding project. We'll respond within 2 business hours.</p>
          </div>
          <div className="cta-actions">
            <a
              href="#contact"
              className="cta-btn-main"
              onClick={e => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Request a Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="tel:+2348106258125"
              className="cta-btn-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 010 2.85 2 2 0 012 .67h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
