
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  useEffect(() => {
    // Hero section animations
    gsap.fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero-title',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero-subtitle',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.hero-buttons', 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero-buttons',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Section titles
    gsap.fromTo('.section-title', 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Card animations with stagger
    gsap.fromTo('.animate-card', 
      { opacity: 0, y: 60, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.animate-card',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Feature grid animations
    gsap.fromTo('.feature-grid-item', 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.feature-grid-item',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Module showcase animation
    gsap.fromTo('.module-showcase', 
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.module-showcase',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Stats counter animation
    gsap.fromTo('.stat-number', 
      { opacity: 0, scale: 0.5 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        ease: 'back.out(1.7)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.stat-number',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Parallax effect for background elements
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-bg',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
