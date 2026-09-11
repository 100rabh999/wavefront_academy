import React from 'react';
import { PageSEO } from '../components/seo/PageSEO';
import { About } from '../components/sections/About';
import { CallToAction } from '../components/sections/CallToAction';

export function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      <PageSEO 
        title="About Us | Trusted Coaching Institute in Virar"
        description="Learn about Wavefront Academy's mission, expert faculty, and structured teaching methodology that helps students in Virar excel in their academic and competitive exams."
        canonicalPath="/about"
      />
      <About />
      <CallToAction />
    </div>
  );
}
