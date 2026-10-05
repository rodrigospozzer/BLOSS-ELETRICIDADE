import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Make lenis globally available
declare global {
  interface Window {
    lenis: Lenis;
  }
}

const initMotion = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: false,
  });
  
  window.lenis = lenis;

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  if (prefersReducedMotion) {
    document.documentElement.classList.add('motion-ready');
    return;
  }

  // Set motion-ready to prevent fallback reveal
  document.documentElement.classList.add('motion-ready');

  // Reveals
  const revealElements = document.querySelectorAll('[data-reveal]');
  revealElements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
      }
    );
  });

  // Hero Parallax (fail-proof)
  const heroParallax = document.querySelector('[data-hero-parallax]') as HTMLElement;
  if (heroParallax) {
    gsap.fromTo(
      heroParallax,
      { yPercent: 0 },
      {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroParallax.parentElement,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
  }

  // Scroll Drawn Lines
  const linePaths = document.querySelectorAll('[data-draw-line]') as NodeListOf<SVGPathElement>;
  linePaths.forEach((path) => {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: path,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });
  });

  // Split text (wait for fonts)
  if (document.fonts) {
    document.fonts.ready.then(() => {
      const splitTexts = document.querySelectorAll('[data-split-text]');
      splitTexts.forEach((el) => {
        // Basic naive line split implementation for demo purposes
        // Real implementation might use SplitText or similar
        const text = el.textContent || '';
        const tokens = text.split(/(\s+)/);
        el.innerHTML = '';
        tokens.forEach((token) => {
          if (!token) return;
          if (token.trim() === '') {
            el.appendChild(document.createTextNode(token));
            return;
          }
          
          const span = document.createElement('span');
          span.style.display = 'inline-block';
          span.style.overflow = 'hidden';
          span.style.paddingRight = '0.1em'; // Prevent clipping
          span.style.marginRight = '-0.1em';
          
          const innerSpan = document.createElement('span');
          innerSpan.style.display = 'inline-block';
          innerSpan.textContent = token;
          innerSpan.setAttribute('data-split-inner', 'true');
          
          span.appendChild(innerSpan);
          el.appendChild(span);
        });

        const inners = el.querySelectorAll('[data-split-inner]');
        gsap.fromTo(
          inners,
          { y: '100%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true,
            },
            onComplete: () => {
              (el as HTMLElement).style.overflow = 'visible';
            }
          }
        );
      });
    });
  }
};

if (document.readyState === 'complete') {
  initMotion();
} else {
  window.addEventListener('load', initMotion);
}
