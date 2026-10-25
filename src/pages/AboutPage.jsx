import React from 'react';
import { PageSEO } from '../components/seo/PageSEO';
import { About } from '../components/sections/About';
import { CallToAction } from '../components/sections/CallToAction';

export function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      <PageSEO 
        title="About Wavefront Academy | Coaching in Virar"
        description="Learn about Wavefront Academy's mission, expert faculty, and structured teaching methodology that helps students in Virar excel in their academic and competitive exams."
        canonicalPath="/about"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-accent-50 text-accent-700 font-bold text-xs md:text-sm mb-4 tracking-wide uppercase">
          About Our Academy
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-4">
          Dedicated Coaching Institute in Virar East
        </h1>
        <p className="text-base md:text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
          Focused on concept-first learning, disciplined practice, and personalized mentoring to help students achieve their potential in school and competitive examinations.
        </p>
      </div>
      <About />
      <CallToAction />
    </div>
  );
}
