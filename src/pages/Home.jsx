import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { WhyWavefront } from '../components/sections/WhyWavefront';
import { Methodology } from '../components/sections/Methodology';
import { CallToAction } from '../components/sections/CallToAction';

export function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyWavefront />
      <Methodology />
      <CallToAction />
    </>
  );
}
