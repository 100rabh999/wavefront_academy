import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { faculty } from '../../data/faculty';
import { Users } from 'lucide-react';

export function Faculty() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="text-left mb-10">
              <p className="text-wavefront-600 font-semibold tracking-wider uppercase text-sm mb-3">Faculty & Mentorship</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">
                Guided by the Best.
              </h2>
              <div className="h-1 w-20 bg-wavefront-500 rounded-full mb-8" />
              <p className="text-gray-600 text-lg leading-relaxed">
                At Wavefront Academy, we understand that a teacher makes all the difference. Our educators don't just teach; they mentor, guide, and inspire students to achieve their highest potential.
              </p>
            </div>
            
            <div className="space-y-8">
              {faculty.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-wavefront-50 flex items-center justify-center text-wavefront-600">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900">{item.name}</h4>
                    <p className="text-wavefront-600 font-medium text-sm mb-2">{item.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-gray-100 border border-gray-200">
               {/* Note: Insert real faculty/classroom photo here */}
               <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent mix-blend-multiply" />
               <img 
                 src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Wavefront Classroom" 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border-2 border-wavefront-200 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-wavefront-100 rounded-full blur-2xl -z-10" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
