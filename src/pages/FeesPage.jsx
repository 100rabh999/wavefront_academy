import React from 'react';
import { PageSEO } from '../components/seo/PageSEO';
import { Pricing } from '../components/sections/Pricing';
import { CallToAction } from '../components/sections/CallToAction';

export function FeesPage() {
  return (
    <div className="pt-24 md:pt-28">
      <PageSEO 
        title="Coaching Fees & Scholarships | Wavefront Academy"
        description="Transparent fee structure and scholarship details for JEE, NEET, MHT-CET, 11th-12th Science, and school coaching programs at Wavefront Academy Virar."
        canonicalPath="/fees"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Fees', path: '/fees' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-accent-50 text-accent-700 font-bold text-xs md:text-sm mb-4 tracking-wide uppercase">
          Admissions & Enrollment
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-4">
          Course Fee Structure & Programs
        </h1>
        <p className="text-base md:text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
          Transparent, structured academic pricing across foundational school classes, higher secondary board education, and competitive exam batches in Virar East.
        </p>
      </div>
      <Pricing />
      <CallToAction />
    </div>
  );
}
