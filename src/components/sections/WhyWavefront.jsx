import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    title: 'Concept Clarity',
    desc: 'Understand the "why", not just memorize the answer. We focus on building deep fundamentals.'
  },
  {
    title: 'Structured Preparation',
    desc: 'A clear academic pathway with regular practice, assessments, and continuous feedback.'
  },
  {
    title: 'Personal Attention',
    desc: 'Identify learning gaps and address them systematically to ensure no student is left behind.'
  },
  {
    title: 'Exam Readiness',
    desc: 'Preparation aligned strictly with the current demands of school boards and competitive examinations.'
  },
  {
    title: 'Doubt Support',
    desc: 'Dedicated sessions to help students move forward instantly instead of getting stuck on complex problems.'
  },
  {
    title: 'Parent Visibility',
    desc: 'Transparent and clear communication around academic progress and areas of improvement.'
  }
];

export function WhyWavefront() {
  return (
    <section className="py-20 md:py-24 bg-white" id="why-wavefront">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Why Choose Wavefront" 
          subtitle="The Wavefront Advantage" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 md:mt-16">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-warmwhite rounded-3xl p-8 lg:p-10 border border-navy-50 hover:shadow-md transition-shadow group flex flex-col h-full"
            >
              <div className="mb-6">
                <CheckCircle2 className="w-8 h-8 text-accent-500 group-hover:text-accent-600 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-navy-950 mb-3">{pillar.title}</h3>
                <p className="text-charcoal text-base leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
