import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function CallToAction() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <section className="py-24 md:py-32 bg-navy-950 text-white relative overflow-hidden" id="contact">
      {/* Decorative BG - Restricted to right side */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-900 opacity-20 blur-3xl pointer-events-none transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          <div className="max-w-xl">
            <p className="text-accent-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-navy-100 text-lg mb-12">
              Find the right academic path for your child. Fill out the form and our academic advisor will get back to you shortly.
            </p>
            
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h4 className="font-semibold text-white text-lg mb-2">Visit Our Center</h4>
              <p className="text-navy-200 leading-relaxed">Shop No. 11, Maitry Pooja Bldg.1, Near Viva College, Virar West, Palghar 401303</p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl relative z-20"
          >
            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-3">Thank You!</h3>
                <p className="text-charcoal text-lg">We have received your enquiry. Our team will contact you shortly.</p>
                <Button 
                  variant="outline" 
                  className="mt-8 px-8"
                  onClick={() => setStatus('idle')}
                >
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-950 mb-2">Student / Parent Name</label>
                  <input type="text" id="name" required className="w-full px-5 py-4 rounded-xl border border-navy-100 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-navy-900 bg-warmwhite/50" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-950 mb-2">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full px-5 py-4 rounded-xl border border-navy-100 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-navy-900 bg-warmwhite/50" placeholder="+91 00000 00000" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="class" className="block text-sm font-semibold text-navy-950 mb-2">Student Class</label>
                    <select id="class" className="w-full px-5 py-4 rounded-xl border border-navy-100 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-navy-900 bg-warmwhite/50">
                      <option>8th - 10th</option>
                      <option>11th</option>
                      <option>12th</option>
                      <option>Passed 12th</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="program" className="block text-sm font-semibold text-navy-950 mb-2">Program</label>
                    <select id="program" className="w-full px-5 py-4 rounded-xl border border-navy-100 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-navy-900 bg-warmwhite/50">
                      <option>JEE</option>
                      <option>NEET</option>
                      <option>MHT-CET</option>
                      <option>NDA</option>
                      <option>Foundation</option>
                    </select>
                  </div>
                </div>
                <Button variant="primary" type="submit" className="w-full py-4 text-base" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Request a Callback'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
