import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../../data/achievements';
import { SectionHeading } from '../ui/SectionHeading';

const AchievementCard = ({ student, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-white rounded-2xl shadow-sm hover:shadow-premium transition-shadow p-6 text-center border border-gray-100"
  >
    <img 
      src={student.image} 
      alt={student.name}
      className="w-24 h-24 mx-auto rounded-full border-4 border-wavefront-50 shadow-md mb-4 object-cover"
    />
    <h3 className="text-lg font-bold text-navy-900">{student.name}</h3>
    <p className="text-wavefront-600 font-semibold text-sm mt-1">{student.exam} {student.score}</p>
  </motion.div>
);

export function Results() {
  return (
    <section className="py-24 bg-white" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Results That Speak." 
          subtitle="Our Pride" 
        />

        {/* Highlight Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { score: '99.308', suffix: '%ile', label: 'MHT-CET' },
            { score: '98.33', suffix: '%ile', label: 'JEE Mains' },
            { score: '90', suffix: '%', label: '10th Board' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-3xl bg-gradient-to-b from-wavefront-50 to-transparent border border-wavefront-100"
            >
              <div className="flex items-baseline justify-center text-navy-900 font-display font-bold">
                <span className="text-5xl md:text-6xl">{stat.score}</span>
                <span className="text-2xl ml-1 text-wavefront-600">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-gray-600 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 12th Results */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 border-b-2 border-wavefront-100 inline-block pb-2">12th Science Stars</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {achievements.twelfth.map((student, i) => (
              <AchievementCard key={student.id} student={student} index={i} />
            ))}
          </div>
        </div>

        {/* 10th Results */}
        <div>
          <h3 className="text-2xl font-bold text-navy-900 mb-8 border-b-2 border-wavefront-100 inline-block pb-2">10th Board Stars</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {achievements.tenth.map((student, i) => (
              <AchievementCard key={student.id} student={student} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
