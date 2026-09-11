import React from 'react';
import { PageSEO } from '../components/seo/PageSEO';
import { Results } from '../components/sections/Results';
import { CallToAction } from '../components/sections/CallToAction';

export function ResultsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <PageSEO 
        title="Student Results & Achievements"
        description="See why Wavefront Academy is the trusted choice in Virar. View our outstanding student achievements in JEE Mains, NEET, MHT-CET, and board exams."
        canonicalPath="/results"
      />
      <Results />
      <CallToAction />
    </div>
  );
}
