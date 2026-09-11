import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const resultBanners = [
  '/2a0f3774-d32f-4174-bf10-606e748b3690.png',
  '/945e73cd-3054-4eb7-944f-99d1fb39047a.png',
  '/4e5d5e82-b91d-48ff-89f7-a08127b84f87.png'
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % resultBanners.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

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
              <h1 className="inline-block py-1.5 px-4 rounded-full bg-navy-50 text-navy-800 font-semibold text-xs md:text-sm mb-6 border border-navy-100 tracking-wide uppercase">
                Wavefront Academy: Coaching Classes in Virar
              </h1>
              {/* Refined typography sizing: mobile 40px, tablet 48px, desktop 56-64px */}
              <h2 className="text-[40px] leading-[1.1] md:text-5xl lg:text-6xl font-display font-bold text-navy-950 mb-6">
                Build Strong Foundations.<br />
                <span className="text-accent-600">Prepare for What’s Next.</span>
              </h2>
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

          {/* Hero Visual - fast slide by slide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center justify-center lg:justify-end w-full lg:w-1/2"
          >
            {/* Soft decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-50 rounded-full blur-3xl opacity-70 -z-10"></div>

            <div className="relative w-full max-w-[440px] md:max-w-[480px] lg:max-w-[520px] flex flex-col items-center justify-center perspective-1000 mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex % resultBanners.length}
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className="w-full flex items-center justify-center"
                >
                  <img
                    src={resultBanners[currentIndex % resultBanners.length]}
                    alt={`Result banner ${(currentIndex % resultBanners.length) + 1}`}
                    className="w-full h-auto rounded-2xl shadow-2xl drop-shadow-xl"
                  />
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
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

