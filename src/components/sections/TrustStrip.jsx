import React from 'react';

export function TrustStrip() {
  return (
    <div className="bg-navy-950 py-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xs md:text-sm font-bold text-navy-400 tracking-[0.2em] uppercase mb-4">
          Preparation for Every Next Step
        </h2>
        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-3 items-center text-sm md:text-base font-semibold text-accent-50/90 tracking-wide">
          <span>JEE Main & Adv</span>
          <span className="text-accent-500/50">•</span>
          <span>NEET</span>
          <span className="text-accent-500/50">•</span>
          <span>MHT-CET</span>
          <span className="text-accent-500/50">•</span>
          <span>NDA</span>
          <span className="text-accent-500/50">•</span>
          <span>School Academics</span>
          <span className="text-accent-500/50">•</span>
          <span>Foundation</span>
        </div>
      </div>
    </div>
  );
}
