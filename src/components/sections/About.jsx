import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function About() {
  return (
    <section className="relative pt-12 pb-20 md:pb-24 bg-white" id="about">
      {/* Subtle Wave Transition from Methodology (bg-navy-950) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[24px] md:h-[32px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent-50 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="/image-1.png" 
              alt="Students in classroom"
              className="rounded-[2rem] shadow-premium object-cover w-full"
              style={{ aspectRatio: '4/3' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent-600 font-bold tracking-widest uppercase text-xs mb-3">About Wavefront</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-950 leading-tight mb-6">
              Building Strong Academic Foundations
            </h2>
            
            <p className="text-xl font-medium text-navy-900 mb-6">
              Strong preparation starts long before the exam.
            </p>
            
            <div className="space-y-6 text-charcoal leading-relaxed text-base">
              <p>
                Wavefront Academy is focused on helping students build strong academic foundations while developing the discipline, clarity, and preparation required for competitive examinations.
              </p>
              <p>
                We believe that true academic excellence comes from a deep understanding of core concepts. Our approach ensures that students are prepared for immediate board exams while remaining conceptually ready to tackle rigorous tests like JEE, NEET, and MHT-CET.
              </p>
            </div>
            
            <div className="mt-10">
              <a href="#contact">
                <Button variant="secondary" className="px-8 py-3.5">Visit Our Campus</Button>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
