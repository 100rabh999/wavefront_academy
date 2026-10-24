import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const resultBanners = [
  {
    avif: '/hero-banner-1.avif',
    fallback: '/hero-banner-1.jpg',
    alt: 'MHT-CET Toppers 2024–25 Results at Wavefront Academy Virar'
  },
  {
    avif: '/hero-banner-2.avif',
    fallback: '/hero-banner-2.jpg',
    alt: 'JEE Main and Advanced Achievers Wavefront Academy Virar'
  },
  {
    avif: '/hero-banner-3.avif',
    fallback: '/hero-banner-3.jpg',
    alt: 'Board Exam and Competitive Exam Milestones Wavefront Academy'
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Respect user reduced-motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return; // Do not auto-advance if reduced motion is preferred
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % resultBanners.length);
    }, 4000); // 4 seconds provides adequate reading time without aggressive thread churn
    return () => clearInterval(timer);
  }, []);

  const activeBanner = resultBanners[currentIndex % resultBanners.length];
  const isLcp = currentIndex === 0;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-warmwhite" id="home">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#102a43 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left pt-4 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-navy-50 text-navy-800 font-semibold text-xs md:text-sm mb-6 border border-navy-100 tracking-wide uppercase">
                Wavefront Academy • Virar East
              </span>
              {/* Refined typography sizing: mobile 40px, tablet 48px, desktop 56-64px */}
              <h1 className="text-[40px] leading-[1.1] md:text-5xl lg:text-6xl font-display font-bold text-navy-950 mb-6">
                Coaching Classes in Virar East.<br />
                <span className="text-accent-600">Build Strong Academic Foundations.</span>
              </h1>
              <p className="text-base md:text-lg text-charcoal mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Expert academic guidance and structured preparation for students pursuing school excellence, JEE, NEET, MHT-CET, and other competitive pathways.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#programs">
                  <Button variant="primary" className="w-full sm:w-auto text-base">Explore Programs</Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary" className="w-full sm:w-auto text-base">Talk to an Advisor</Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual - optimized carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center justify-center lg:justify-end w-full lg:w-1/2"
          >
            {/* Soft decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-50 rounded-full blur-3xl opacity-70 -z-10"></div>

            <div className="relative w-full max-w-[440px] md:max-w-[480px] lg:max-w-[520px] aspect-[4/3] flex flex-col items-center justify-center perspective-1000 mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex % resultBanners.length}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <picture className="w-full h-full">
                    <source srcSet={activeBanner.avif} type="image/avif" />
                    <img
                      src={activeBanner.fallback}
                      alt={activeBanner.alt}
                      width={1040}
                      height={780}
                      loading={isLcp ? 'eager' : 'lazy'}
                      fetchPriority={isLcp ? 'high' : 'auto'}
                      decoding={isLcp ? 'sync' : 'async'}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl drop-shadow-xl aspect-[4/3]"
                    />
                  </picture>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicator Dots */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {resultBanners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === (currentIndex % resultBanners.length) ? 'w-8 bg-accent-500' : 'w-2.5 bg-navy-200 hover:bg-navy-300'
                    }`}
                  aria-label={`Go to result slide ${index + 1} of ${resultBanners.length}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

