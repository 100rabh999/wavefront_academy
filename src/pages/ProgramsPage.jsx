import React from 'react';
import { PageSEO } from '../components/seo/PageSEO';
import { Programs } from '../components/sections/Programs';
import { CallToAction } from '../components/sections/CallToAction';

export function ProgramsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <PageSEO 
        title="Our Coaching Programs | JEE, NEET, MHT-CET & School"
        description="Explore Wavefront Academy's structured academic programs. We offer specialized coaching for JEE, NEET, MHT-CET, Science, and foundational batches in Virar."
        canonicalPath="/programs"
      />
      <Programs />
      <CallToAction />
    </div>
  );
}
