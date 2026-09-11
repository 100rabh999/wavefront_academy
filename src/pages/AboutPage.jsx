import React from 'react';
import { About } from '../components/sections/About';
import { CallToAction } from '../components/sections/CallToAction';

export function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      <About />
      <CallToAction />
    </div>
  );
}
