import React from 'react';
import { Results } from '../components/sections/Results';
import { CallToAction } from '../components/sections/CallToAction';

export function ResultsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <Results />
      <CallToAction />
    </div>
  );
}
