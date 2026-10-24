import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { businessInfo } from '../../data/businessInfo';
import { trackEnquirySubmit, trackWhatsAppClick } from '../../utils/analytics';
import { ShieldCheck, MessageSquare, PhoneCall, CheckCircle } from 'lucide-react';

export function CallToAction({ defaultProgram = 'JEE' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    studentClass: '11th',
    program: defaultProgram,
    locality: '',
    parentConsent: true,
    website_hp: '' // Honeypot field for spam prevention
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.website_hp) {
      console.warn('Bot detected via honeypot.');
      setStatus('success');
      return;
    }

    // Phone validation (Indian 10-digit mobile number)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    setStatus('submitting');
    trackEnquirySubmit(formData.program, formData.studentClass);

    setTimeout(() => {
      setSubmittedData({ ...formData });
      setStatus('success');
    }, 600);
  };

  const handleInstantWhatsAppChat = () => {
    const msg = `Hello Wavefront Academy, my name is ${formData.name || 'a student/parent'}. I am enquiring about ${formData.program} for Class ${formData.studentClass}. Please share batch timings and admission details.`;
    const waUrl = `https://wa.me/917058107207?text=${encodeURIComponent(msg)}`;
    trackWhatsAppClick(formData.program, 'lead_form_instant');
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden" id="contact">
      {/* Subtle backdrop glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-900 opacity-20 blur-3xl pointer-events-none transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="max-w-xl">
            <span className="inline-block py-1.5 px-3.5 rounded-full bg-accent-500/10 text-accent-400 font-bold tracking-[0.15em] uppercase text-xs mb-4 border border-accent-500/20">
              Admissions Open 2026–27
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              Connect Directly with Academic Mentors
            </h2>
            <p className="text-navy-100 text-base md:text-lg mb-8 leading-relaxed">
              Find the right course, assess batch timings, and receive personalized counseling for your child's academic goals in Virar East.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h4 className="font-semibold text-white text-base mb-1">Center Location</h4>
                <p className="text-navy-200 text-sm leading-relaxed">{businessInfo.address.full}</p>
                <p className="text-accent-400 text-xs mt-2 font-medium">Landmark: Near Manvelpada Talav (Easily reachable from Virar Station)</p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-navy-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent-400" />
                  <span>Verified Faculty & Proven Toppers</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent-400" />
                  <span>Small Batch Sizes</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-accent-400" />
                <span>Call {businessInfo.phone}</span>
              </a>
              <button 
                onClick={handleInstantWhatsAppChat}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-medium text-sm transition-colors border border-[#25D366]/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick WhatsApp</span>
              </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl relative z-20 text-navy-950"
          >
            {status === 'success' ? (
              <div className="text-center py-10 md:py-12">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-2">Enquiry Received!</h3>
                <p className="text-charcoal text-sm md:text-base max-w-md mx-auto mb-6">
                  Thank you, <strong>{submittedData?.name || 'Student'}</strong>. Our academic counselor will call you at <strong>{submittedData?.phone}</strong> shortly to discuss {submittedData?.program} batches.
                </p>

                <div className="bg-warmwhite p-4 rounded-xl border border-navy-50 mb-6 text-left text-xs text-charcoal">
                  <p><strong>Selected Program:</strong> {submittedData?.program}</p>
                  <p><strong>Target Class:</strong> {submittedData?.studentClass}</p>
                  <p className="mt-1 text-navy-500">Need instant answers right now? You can connect straight away via WhatsApp.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    variant="primary" 
                    className="bg-[#25D366] hover:bg-[#20ba59] border-none text-white text-sm"
                    onClick={handleInstantWhatsAppChat}
                  >
                    Open in WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="text-sm px-6"
                    onClick={() => {
                      setStatus('idle');
                      setFormData(prev => ({ ...prev, name: '', phone: '', locality: '' }));
                    }}
                  >
                    Submit Another Query
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-navy-950 mb-1">Request a Counseling Callback</h3>
                  <p className="text-xs text-charcoal">Fill in the details below to receive syllabus information and batch details.</p>
                </div>

                {/* Spam honeypot field - visually hidden */}
                <input 
                  type="text" 
                  name="website_hp" 
                  value={formData.website_hp} 
                  onChange={handleChange} 
                  tabIndex="-1" 
                  autoComplete="off" 
                  className="hidden" 
                  aria-hidden="true" 
                />

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-navy-900 mb-1">Student / Parent Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-navy-100 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-sm text-navy-900 bg-warmwhite/40" 
                    placeholder="e.g. Rahul Sharma" 
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-navy-900 mb-1">Mobile / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-navy-100 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-sm text-navy-900 bg-warmwhite/40" 
                    placeholder="e.g. 98765 43210" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="studentClass" className="block text-xs font-semibold text-navy-900 mb-1">Class / Standard</label>
                    <select 
                      id="studentClass" 
                      name="studentClass"
                      value={formData.studentClass}
                      onChange={handleChange}
                      className="w-full px-3 py-3 rounded-xl border border-navy-100 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-sm text-navy-900 bg-warmwhite/40"
                    >
                      <option value="8th">Class 8th</option>
                      <option value="9th">Class 9th</option>
                      <option value="10th">Class 10th (SSC/CBSE)</option>
                      <option value="11th">Class 11th Science</option>
                      <option value="12th">Class 12th Science</option>
                      <option value="Repeater">12th Passed / Repeater</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="program" className="block text-xs font-semibold text-navy-900 mb-1">Target Program</label>
                    <select 
                      id="program" 
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-3 py-3 rounded-xl border border-navy-100 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-sm text-navy-900 bg-warmwhite/40"
                    >
                      <option value="JEE">JEE Mains & Advanced</option>
                      <option value="NEET">NEET-UG</option>
                      <option value="MHT-CET">MHT-CET</option>
                      <option value="Science">11th/12th Board Science</option>
                      <option value="Foundation">School Foundation (8-10)</option>
                      <option value="NDA">NDA / IMUCET</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="locality" className="block text-xs font-semibold text-navy-900 mb-1">Area / Locality in Virar (Optional)</label>
                  <input 
                    type="text" 
                    id="locality" 
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-100 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-xs text-navy-900 bg-warmwhite/40" 
                    placeholder="e.g. Manvelpada, Viva College Road, Virar East" 
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input 
                    type="checkbox" 
                    id="parentConsent" 
                    name="parentConsent" 
                    checked={formData.parentConsent}
                    onChange={handleChange}
                    className="mt-1 h-3.5 w-3.5 rounded border-gray-300 text-accent-600 focus:ring-accent-500" 
                  />
                  <label htmlFor="parentConsent" className="text-[11px] text-gray-500 leading-tight">
                    I agree to be contacted by Wavefront Academy regarding batch details and course counseling. Minors have parental or guardian consent.
                  </label>
                </div>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-full py-3.5 text-sm font-semibold shadow-md mt-2" 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Submitting Enquiry...' : 'Submit Admission Enquiry'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
