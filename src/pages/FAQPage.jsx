import React from 'react';
import { FAQ } from '../components/sections/FAQ';
import { CallToAction } from '../components/sections/CallToAction';

export function FAQPage() {
  return (
    <div className="pt-24 md:pt-28">
      <FAQ />
      <CallToAction />
    </div>
  );
}
