import React from 'react';
import { Programs } from '../components/sections/Programs';
import { CallToAction } from '../components/sections/CallToAction';

export function ProgramsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <Programs />
      <CallToAction />
    </div>
  );
}
