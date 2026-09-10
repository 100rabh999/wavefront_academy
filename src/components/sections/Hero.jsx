import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Hero() {
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
                Wavefront Academy
              </span>
              {/* Refined typography sizing: mobile 40px, tablet 48px, desktop 56-64px */}
              <h1 className="text-[40px] leading-[1.1] md:text-5xl lg:text-6xl font-display font-bold text-navy-950 mb-6">
                Build Strong Foundations.<br />
                <span className="text-accent-600">Prepare for What’s Next.</span>
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

          {/* Hero Visual - constrained to roughly 45-50% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end w-full lg:w-1/2"
          >
            {/* Soft decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-50 rounded-full blur-3xl opacity-70 -z-10"></div>
            
            <img
              src="/image-1.png"
              alt="Students preparing for competitive exams"
              className="w-full max-w-[440px] md:max-w-[480px] lg:max-w-[520px] rounded-[2rem] shadow-premium object-cover"
              style={{ aspectRatio: '4/5' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
