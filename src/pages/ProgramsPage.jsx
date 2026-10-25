import React from 'react';
import { PageSEO } from '../components/seo/PageSEO';
import { Programs } from '../components/sections/Programs';
import { CallToAction } from '../components/sections/CallToAction';

export function ProgramsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <PageSEO 
        title="Coaching Programs & Courses | Wavefront Academy"
        description="Explore structured coaching for JEE, NEET, MHT-CET, 11th-12th Science, and 8th-10th school foundation batches at Wavefront Academy in Virar East."
        canonicalPath="/programs"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-accent-50 text-accent-700 font-bold text-xs md:text-sm mb-4 tracking-wide uppercase">
          Academic Offerings
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-4">
          Coaching Programs & Academic Pathways
        </h1>
        <p className="text-base md:text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
          Comprehensive preparation for competitive entrance exams (JEE, NEET, MHT-CET), 11th & 12th Science board courses, and secondary school foundation classes in Virar East.
        </p>
      </div>
      <Programs />
      <CallToAction />
    </div>
  );
}
