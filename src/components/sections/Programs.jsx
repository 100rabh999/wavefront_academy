import React from 'react';
import { motion } from 'framer-motion';
import { courses } from '../../data/courses';
import { SectionHeading } from '../ui/SectionHeading';
import { BookOpen, GraduationCap, Trophy } from 'lucide-react';
import { Button } from '../ui/Button';

const ProgramCard = ({ course, index, highlight = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className={`bg-white rounded-3xl p-10 border ${highlight ? 'border-accent-200 shadow-premium hover:shadow-premium-hover' : 'border-navy-50 shadow-sm hover:shadow-md'} transition-all duration-300 flex flex-col h-full`}
  >
    <div className={`text-xs font-bold tracking-[0.15em] uppercase mb-5 ${highlight ? 'text-accent-600' : 'text-navy-500'}`}>
      {highlight ? 'Flagship Program' : 'Academic Program'}
    </div>
    <h3 className="text-2xl font-display font-bold text-navy-950 mb-4">{course.title}</h3>
    <p className="text-charcoal mb-8 text-base leading-relaxed flex-grow">{course.description}</p>
    
    <div className="bg-navy-50/50 rounded-2xl p-5 mb-8">
      <ul className="space-y-4">
        {course.features.slice(0, 3).map((feature, i) => (
          <li key={i} className="flex items-start text-sm text-navy-800 font-medium leading-relaxed">
            <span className="text-accent-500 mr-3 mt-0.5 text-lg">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    
    <a href="#contact" className="mt-auto">
      <Button variant={highlight ? 'primary' : 'outline'} className="w-full text-base py-3.5">
        Enquire Now
      </Button>
    </a>
  </motion.div>
);

export function Programs() {
  const foundation = courses.filter(c => c.id === '5-10');
  const school = courses.filter(c => c.id === '11-12-science');
  const competitive = courses.filter(c => ['jee', 'neet', 'mht-cet', 'nda'].includes(c.id));
  
  // Create an 'Other Competitive Programs' object for NDA/IMUCET/Nursing to group them cleaner if needed, but we'll just rename it in UI
  const otherCompetitive = competitive.filter(c => c.id === 'nda');
  const coreCompetitive = competitive.filter(c => c.id !== 'nda');

  return (
    <section className="relative pt-12 pb-20 md:pb-24 bg-warmwhite" id="programs">
      {/* Subtle Wave Transition from Results (bg-white) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[32px] md:h-[48px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <SectionHeading 
          title="Programs Designed Around Every Stage" 
          subtitle="Academic Pathways" 
        />
        
        {/* Competitive Preparation - Flagship */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
            <Trophy className="w-7 h-7 text-accent-500" />
            <h3 className="text-3xl font-display font-bold text-navy-950">Competitive Preparation</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCompetitive.map((course, index) => (
              <ProgramCard key={course.id} course={course} index={index} highlight={true} />
            ))}
            
            {otherCompetitive.map((course, index) => (
              <ProgramCard 
                key={course.id} 
                course={{...course, title: 'Other Competitive Programs'}} 
                index={index + 3} 
                highlight={false} 
              />
            ))}
          </div>
        </div>

        {/* Foundation & School Academics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <GraduationCap className="w-6 h-6 text-navy-500" />
              <h3 className="text-2xl font-display font-bold text-navy-950">School Academics</h3>
            </div>
            <div className="grid grid-cols-1 gap-8 h-[calc(100%-4rem)]">
              {school.map((course, index) => (
                <ProgramCard key={course.id} course={course} index={index} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <BookOpen className="w-6 h-6 text-navy-500" />
              <h3 className="text-2xl font-display font-bold text-navy-950">Foundation</h3>
            </div>
            <div className="grid grid-cols-1 gap-8 h-[calc(100%-4rem)]">
              {foundation.map((course, index) => (
                <ProgramCard key={course.id} course={course} index={index} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
