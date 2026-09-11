import React from 'react';
import { Pricing } from '../components/sections/Pricing';
import { CallToAction } from '../components/sections/CallToAction';

export function FeesPage() {
  return (
    <div className="pt-24 md:pt-28">
      <Pricing />
      <CallToAction />
    </div>
  );
}
