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
        title="Best Coaching Classes in Virar East | JEE, NEET, MHT-CET & Science"
        description="Wavefront Academy is Virar East's leading coaching institute near Manvelpada Talav. Expert preparation for JEE, NEET, MHT-CET, 11th-12th Science & Classes 8-10."
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
