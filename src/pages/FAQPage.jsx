import React from 'react';
import { PageSEO } from '../components/seo/PageSEO';
import { FAQ } from '../components/sections/FAQ';
import { CallToAction } from '../components/sections/CallToAction';

export function FAQPage() {
  return (
    <div className="pt-24 md:pt-28">
      <PageSEO 
        title="Frequently Asked Questions (FAQ)"
        description="Find answers to common questions about Wavefront Academy's coaching programs, batch sizes, test schedules, and admission processes in Virar."
        canonicalPath="/faq"
      />
      <FAQ />
      <CallToAction />
    </div>
  );
}
