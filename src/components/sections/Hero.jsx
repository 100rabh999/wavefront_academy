import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-orb-1 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orb-2 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-wavefront-50 text-wavefront-600 font-semibold text-sm mb-6 border border-wavefront-100">
                Admissions Open 2026–27
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-900 leading-tight mb-6">
                Build Your Future With the <span className="text-wavefront-600">Right Guidance.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Wavefront Academy is Virar's premier institute for JEE, NEET, MHT-CET, and school section coaching. We focus on conceptual clarity and proven results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#courses">
                  <Button variant="primary" className="w-full sm:w-auto">Explore Courses</Button>
                </a>
                <a href="https://wa.me/917058107207" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto">Enquire on WhatsApp</Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <img
              src="/image-1.png"
              alt="Wavefront Academy"
              className="w-full max-w-lg lg:max-w-xl rounded-3xl shadow-2xl object-cover border-4 border-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
