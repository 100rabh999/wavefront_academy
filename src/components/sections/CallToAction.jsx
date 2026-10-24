import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { businessInfo } from '../../data/businessInfo';
import { trackEnquirySubmit, trackWhatsAppClick, trackFormStart, trackPhoneClick } from '../../utils/analytics';
import { ShieldCheck, MessageSquare, PhoneCall, CheckCircle, AlertCircle, Clock } from 'lucide-react';

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
  // idle | submitting | success | error | whatsapp_ready
  const [status, setStatus] = useState('idle');
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const formStartedRef = useRef(false);

  const handleChange = (e) => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackFormStart('admission_enquiry');
    }
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const getEncodedWhatsAppUrl = (data) => {
    const student = data.name ? data.name.trim() : 'a student';
    const locText = data.locality ? ` (Area: ${data.locality.trim()})` : '';
    const message = `Hello Wavefront Academy, my name is ${student}${locText}. I am enquiring about ${data.program} coaching for Class ${data.studentClass}. Please share batch timings, syllabus plan, and admission details.`;
    return `https://wa.me/917058107207?text=${encodeURIComponent(message)}`;
  };

  const handleInstantWhatsAppChat = () => {
    const waUrl = getEncodedWhatsAppUrl(formData);
    trackWhatsAppClick(formData.program, 'direct_cta_button');
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Spam honeypot detection
    if (formData.website_hp) {
      console.warn('Submission dropped via honeypot.');
      setStatus('success');
      setSubmittedData({ ...formData });
      return;
    }

    // 2. Client-side phone validation (Indian 10-digit mobile number)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Capture submission snapshot
    const submissionSnapshot = { ...formData };
    setSubmittedData(submissionSnapshot);

    const endpoint = (businessInfo.emailEndpoint || '').trim();

    // 3. Case A: If no backend endpoint is configured yet, initiate WhatsApp flow directly
    if (!endpoint) {
      setStatus('whatsapp_ready');
      const waUrl = getEncodedWhatsAppUrl(submissionSnapshot);
      trackWhatsAppClick(submissionSnapshot.program, 'lead_form_whatsapp_flow');
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    // 4. Case B: Endpoint is configured. Post payload to Google Apps Script / email backend
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8' // Text plain prevents CORS preflight in Apps Script
        },
        body: JSON.stringify(submissionSnapshot)
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      const result = await response.json();

      if (result && result.status === 'success') {
        setStatus('success');
        // Only fire generate_lead when the backend confirms successful receipt
        trackEnquirySubmit(submissionSnapshot.program, submissionSnapshot.studentClass);
      } else {
        throw new Error(result?.message || 'Server indicated an error processing enquiry.');
      }
    } catch (err) {
      console.error('Enquiry dispatch error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Network error while delivering enquiry.');
    }
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
                onClick={() => trackPhoneClick('cta_section')}
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
                <h3 className="text-2xl font-bold text-navy-950 mb-2">Enquiry Sent to Mentors!</h3>
                <p className="text-charcoal text-sm md:text-base max-w-md mx-auto mb-6">
                  Thank you, <strong>{submittedData?.name || 'Student'}</strong>. Your enquiry details have been delivered directly to <strong>{businessInfo.email}</strong>. Our counselors will call you at <strong>{submittedData?.phone}</strong> shortly.
                </p>

                <div className="bg-warmwhite p-4 rounded-xl border border-navy-50 mb-6 text-left text-xs text-charcoal">
                  <p><strong>Selected Program:</strong> {submittedData?.program}</p>
                  <p><strong>Target Class:</strong> {submittedData?.studentClass}</p>
                  {submittedData?.locality && <p><strong>Locality:</strong> {submittedData?.locality}</p>}
                  <p className="mt-2 text-navy-600">Want to speak right away? You can also message mentors directly on WhatsApp.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    variant="primary" 
                    className="bg-[#25D366] hover:bg-[#20ba59] border-none text-white text-sm"
                    onClick={() => {
                      const waUrl = getEncodedWhatsAppUrl(submittedData || formData);
                      trackWhatsAppClick(submittedData?.program || formData.program, 'success_state_chat');
                      window.open(waUrl, '_blank', 'noopener,noreferrer');
                    }}
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
            ) : status === 'whatsapp_ready' ? (
              <div className="text-center py-8 md:py-10">
                <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-5 border border-[#25D366]/20">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-2">WhatsApp Opened</h3>

                {/* Truthful status notice */}
                <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-4 mb-6 text-left text-xs leading-relaxed">
                  <div className="flex items-center gap-1.5 font-bold mb-1 text-amber-800">
                    <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Important: Press "Send" in WhatsApp</span>
                  </div>
                  <p>
                    Your enquiry details have been prepared with your course preferences. <strong>Please tap 'Send' in WhatsApp</strong> to deliver your message directly to Wavefront Academy mentors.
                  </p>
                  <p className="mt-2 text-amber-700">
                    <em>(Notice: Automatic background email dispatch is pending Google Apps Script endpoint deployment.)</em>
                  </p>
                </div>

                <div className="bg-warmwhite p-4 rounded-xl border border-navy-50 mb-6 text-left text-xs text-charcoal">
                  <p><strong>Student / Parent:</strong> {submittedData?.name}</p>
                  <p><strong>Phone:</strong> {submittedData?.phone}</p>
                  <p><strong>Program:</strong> {submittedData?.program} (Class {submittedData?.studentClass})</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="primary"
                    className="bg-[#25D366] hover:bg-[#20ba59] border-none text-white text-sm"
                    onClick={() => {
                      const waUrl = getEncodedWhatsAppUrl(submittedData || formData);
                      trackWhatsAppClick(submittedData?.program || formData.program, 'reopen_whatsapp');
                      window.open(waUrl, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Re-open WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="text-sm px-6"
                    onClick={() => {
                      setStatus('idle');
                    }}
                  >
                    Edit Details
                  </Button>
                </div>
              </div>
            ) : status === 'error' ? (
              <div className="text-center py-8 md:py-10">
                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-5">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-2">Notice: Email Delivery Failed</h3>
                <p className="text-charcoal text-sm max-w-md mx-auto mb-4">
                  {errorMessage || 'Unable to deliver your enquiry via the automatic email endpoint.'}
                </p>

                <div className="bg-warmwhite p-4 rounded-xl border border-navy-50 mb-6 text-left text-xs text-charcoal">
                  <p className="font-semibold text-navy-900 mb-1">Send via WhatsApp Instead (Recommended):</p>
                  <p className="text-navy-700">Your details are preserved. You can chat directly with our counselors right now.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="primary"
                    className="bg-[#25D366] hover:bg-[#20ba59] border-none text-white text-sm"
                    onClick={() => {
                      const waUrl = getEncodedWhatsAppUrl(submittedData || formData);
                      trackWhatsAppClick(submittedData?.program || formData.program, 'error_fallback_whatsapp');
                      window.open(waUrl, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Send via WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="text-sm px-6"
                    onClick={() => setStatus('idle')}
                  >
                    Try Again
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
