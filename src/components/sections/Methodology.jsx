import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { BookOpen, Target, PenTool, BarChart, TrendingUp } from 'lucide-react';

const steps = [
  { icon: BookOpen, title: 'Learn', desc: 'Conceptual clarity from expert faculty.' },
  { icon: PenTool, title: 'Practice', desc: 'Extensive assignments and structured material.' },
  { icon: Target, title: 'Test', desc: 'Regular mock exams in actual exam format.' },
  { icon: BarChart, title: 'Analyse', desc: 'In-depth performance analysis & feedback.' },
  { icon: TrendingUp, title: 'Improve', desc: 'Targeted improvement on weak areas.' }
];

export function Methodology() {
  return (
    <section className="py-20 md:py-24 bg-navy-950 text-white relative overflow-hidden" id="methodology">
      <div className="absolute top-0 right-0 w-full h-full bg-accent-900 opacity-10 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent-400 font-semibold tracking-wider uppercase text-sm mb-3">Learning Approach</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">Our Proven Methodology</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative mt-16">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-white/10 -z-10"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center max-w-[150px] mb-12 md:mb-0"
              >
                <div className="w-16 h-16 rounded-full bg-navy-900 border-2 border-accent-500 flex items-center justify-center mb-6 shadow-lg shadow-accent-500/20">
                  <Icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-xs text-navy-200">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
