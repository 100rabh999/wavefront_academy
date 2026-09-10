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
    className="bg-white rounded-2xl shadow-sm hover:shadow-premium transition-shadow p-6 text-center border border-navy-50"
  >
    <img 
      src={student.image} 
      alt={student.name}
      className="w-16 h-16 mx-auto rounded-full border-4 border-navy-50 shadow-sm mb-4 object-cover"
    />
    <h3 className="text-sm font-bold text-navy-950">{student.name}</h3>
    <p className="text-accent-600 font-semibold text-sm mt-1">{student.score}</p>
    <p className="text-charcoal text-[11px] mt-1 font-medium tracking-wide uppercase">{student.exam}</p>
  </motion.div>
);

export function Results() {
  return (
    <section className="py-20 md:py-24 bg-white" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Results That Speak for Themselves." 
          subtitle="Our Pride" 
        />
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-charcoal leading-relaxed text-lg">
            Our students' progress is the clearest measure of our approach. Focus on the fundamentals, and the results follow.
          </p>
        </div>

        {/* Featured Results */}
        <div className="mb-14">
          <h3 className="text-xl font-display font-bold text-navy-900 mb-6 text-center">Featured Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { score: '99.30', suffix: '%ile', label: 'MHT-CET', name: 'Chandan Chaubey' },
              { score: '98.56', suffix: '%ile', label: 'MHT-CET', name: 'Harsha Jha' },
              { score: '98.33', suffix: '%ile', label: 'JEE Mains', name: 'Akshay Karande' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-950 p-8 rounded-3xl border border-navy-800 text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-baseline justify-center text-white font-display font-bold mb-2 relative z-10">
                  <span className="text-5xl lg:text-6xl tracking-tight">{stat.score}</span>
                  <span className="text-2xl ml-1 text-accent-400">{stat.suffix}</span>
                </div>
                <p className="text-navy-200 font-medium tracking-wide text-sm mb-5 relative z-10">{stat.label}</p>
                <div className="w-12 h-1 bg-navy-800 mx-auto rounded-full mb-5 relative z-10"></div>
                <p className="text-white font-semibold text-lg relative z-10">{stat.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* More Student Achievements */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-display font-bold text-navy-900">More Student Achievements</h3>
            <div className="h-px bg-navy-100 flex-grow ml-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {achievements.twelfth.filter(s => !['Chandan Chaubey', 'Harsha Jha', 'Akshay Karande'].includes(s.name)).map((student, i) => (
              <AchievementCard key={student.id} student={student} index={i} />
            ))}
          </div>
        </div>

        {/* 10th Board Stars */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-display font-bold text-navy-900">10th Board Stars</h3>
            <div className="h-px bg-navy-100 flex-grow ml-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {achievements.tenth.map((student, i) => (
              <AchievementCard key={student.id} student={student} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
