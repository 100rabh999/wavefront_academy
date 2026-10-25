import React from 'react';
import { PageSEO } from '../components/seo/PageSEO';
import { Results } from '../components/sections/Results';
import { CallToAction } from '../components/sections/CallToAction';

export function ResultsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <PageSEO 
        title="JEE & MHT-CET Student Results | Wavefront Academy"
        description="Explore top results and competitive exam achievements of Wavefront Academy students in MHT-CET, JEE Mains, NEET, and school board exams in Virar East."
        canonicalPath="/results"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Results', path: '/results' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-accent-50 text-accent-700 font-bold text-xs md:text-sm mb-4 tracking-wide uppercase">
          Proven Academic Track Record
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-4">
          Student Results & Examination Achievements
        </h1>
        <p className="text-base md:text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
          Celebrating the hard work and competitive percentiles of our students in MHT-CET, JEE Mains, NEET, and Maharashtra Board examinations in Virar East.
        </p>
      </div>
      <Results />
      <CallToAction />
    </div>
  );
}
