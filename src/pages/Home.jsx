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
        title="Best Coaching Classes in Virar | JEE, NEET, MHT-CET & Science"
        description="Wavefront Academy is Virar's premier coaching institute offering expert preparation for JEE Mains, NEET, MHT-CET, 11th-12th Science, and foundational academics (5th-10th)."
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
