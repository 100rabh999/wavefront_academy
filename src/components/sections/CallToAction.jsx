import React from 'react';
import { Button } from '../ui/Button';

export function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-wavefront-600"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/80 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          Your preparation starts here.
        </h2>
        <p className="text-wavefront-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join Wavefront Academy today and take the first step towards your dream career in Engineering, Medicine, or Defense.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:7058107207">
            <Button variant="secondary" className="w-full sm:w-auto font-bold text-wavefront-600">
              Call Now
            </Button>
          </a>
          <a href="https://wa.me/917058107207" target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-lg">
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
