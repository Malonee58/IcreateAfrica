import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { scrollToCurrentHash } from './utils/scroll';
import './styles/global.css';

// Below-the-fold sections are code-split so the initial bundle stays small
// and the first paint (Navbar + Hero) loads as fast as possible.
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Process = lazy(() => import('./components/Process'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CTABanner = lazy(() => import('./components/CTABanner'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Nothing more to do once revealed; stop observing to avoid
            // unnecessary work on future scroll/resize events.
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observeRevealTargets = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
    };

    observeRevealTargets();

    // Below-the-fold sections are lazy-loaded, so their .reveal elements
    // mount after this effect first runs. Watch the DOM and pick them up
    // as they arrive.
    const mutationObserver = new MutationObserver(observeRevealTargets);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    // Preserve the current section on refresh / direct link.
    scrollToCurrentHash();

    // Keep Back/Forward navigation working when the hash changes.
    const onPopState = () => scrollToCurrentHash();
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <CTABanner />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
