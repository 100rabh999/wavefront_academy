import React from 'react';
import { PageSEO } from '../components/seo/PageSEO';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { WhyWavefront } from '../components/sections/WhyWavefront';
import { Methodology } from '../components/sections/Methodology';
import { CallToAction } from '../components/sections/CallToAction';

export function Home() {
  return (
    <>
      <PageSEO 
        title="Science & Coaching Classes in Virar East | Wavefront Academy"
        description="Premier coaching in Virar East near Manvelpada Talav for JEE, NEET, MHT-CET, 11th-12th Science & Classes 8-10. Small batches and expert mentorship."
        canonicalPath="/"
      />
      <Hero />
      <TrustStrip />
      <WhyWavefront />
      <Methodology />
      <CallToAction />
    </>
  );
}
