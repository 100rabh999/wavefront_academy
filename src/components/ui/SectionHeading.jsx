import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-wavefront-600 font-semibold tracking-wider uppercase text-sm mb-3"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="h-1 bg-wavefront-500 mx-auto mt-6 rounded-full"
      />
    </div>
  );
}
