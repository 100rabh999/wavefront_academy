import React from 'react';
import { PageSEO } from '../components/seo/PageSEO';
import { Pricing } from '../components/sections/Pricing';
import { CallToAction } from '../components/sections/CallToAction';

export function FeesPage() {
  return (
    <div className="pt-24 md:pt-28">
      <PageSEO 
        title="Course Fees & Scholarship Structure"
        description="View the transparent fee structure for Wavefront Academy's coaching programs in Virar, including JEE, NEET, Science, and school foundational courses."
        canonicalPath="/fees"
      />
      <Pricing />
      <CallToAction />
    </div>
  );
}
