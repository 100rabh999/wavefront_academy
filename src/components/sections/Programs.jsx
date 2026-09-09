import React from 'react';
import { motion } from 'framer-motion';
import { courses } from '../../data/courses';
import { SectionHeading } from '../ui/SectionHeading';
import { BookOpen } from 'lucide-react';

export function Programs() {
  return (
    <section className="py-24 bg-warmwhite" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Programs Offered" 
          subtitle="Your Academic Journey" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-premium transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-wavefront-50 text-wavefront-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-wavefront-500 group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{course.description}</p>
              
              <ul className="space-y-2">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700">
                    <span className="text-wavefront-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
