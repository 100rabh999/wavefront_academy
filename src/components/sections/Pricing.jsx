import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const pricingGroups = [
  {
    title: 'Competitive Preparation',
    programs: ['JEE Main & Advanced', 'NEET', 'MHT-CET', 'NDA'],
    description: 'Intensive 2-year and 1-year programs designed for top ranks.'
  },
  {
    title: 'School Academics & Foundation',
    programs: ['11th & 12th Science', '8th - 10th (SSC/CBSE)', 'Foundation Courses'],
    description: 'Comprehensive board preparation and concept building.'
  }
];

export function Pricing() {
  return (
    <section className="py-20 md:py-24 bg-warmwhite" id="fees">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Transparent Fee Structure" 
          subtitle="Investment in Education" 
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {pricingGroups.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center flex flex-col h-full"
            >
              <h3 className="text-xl font-display font-bold text-navy-950 mb-2">{group.title}</h3>
              <p className="text-sm text-charcoal mb-8">{group.description}</p>
              
              <div className="mb-8 flex-grow">
                <div className="text-navy-300 font-semibold text-sm tracking-widest uppercase mb-4">Programs Include</div>
                <ul className="space-y-3">
                  {group.programs.map((prog, i) => (
                    <li key={i} className="text-navy-900 font-medium">{prog}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto pt-8 border-t border-gray-100">
                <a href="#contact">
                  <Button variant="secondary" className="w-full">
                    Enquire for Current Fee Structure
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
