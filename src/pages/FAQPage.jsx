import React from 'react';
import { PageSEO } from '../components/seo/PageSEO';
import { FAQ } from '../components/sections/FAQ';
import { CallToAction } from '../components/sections/CallToAction';

export function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which classes do you teach at Wavefront Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We teach students from 8th to 12th standard (Science), covering Maharashtra SSC, CBSE, and ICSE boards, along with dedicated competitive exam foundations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer JEE, NEET, and MHT-CET coaching in Virar East?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide specialized coaching for JEE Mains & Advanced, NEET-UG, MHT-CET, as well as NDA and IMUCET with small batch sizes and test series."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Wavefront Academy located in Virar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wavefront Academy is located at Shop No. 11, Maitry Pooja Apartment, Near Manvelpada Talav, Virar East, Maharashtra 401303 (easily reachable from Virar Railway Station East)."
        }
      },
      {
        "@type": "Question",
        "name": "How can students and parents enquire or enroll?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach out directly via call or WhatsApp at +91 70581 07207, submit our website enquiry form, or visit the center directly during working hours (8:00 AM - 9:00 PM)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the fee structure for coaching programs at Wavefront Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fees vary based on course level: foundational school coaching starts at affordable monthly rates, while comprehensive 2-year competitive programs (JEE, NEET, MHT-CET) have clear, transparent annual structures with available merit scholarships."
        }
      }
    ]
  };

  return (
    <div className="pt-24 md:pt-28">
      <PageSEO 
        title="Frequently Asked Questions (FAQ) | Wavefront Academy Virar East"
        description="Find answers to common questions about Wavefront Academy's coaching programs, batch sizes, test schedules, and admission processes in Virar East."
        canonicalPath="/faq"
        schema={faqSchema}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-accent-50 text-accent-700 font-bold text-xs md:text-sm mb-4 tracking-wide uppercase">
          Parent & Student Support
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-base md:text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
          Clear answers regarding admissions, batch structures, curriculum pathways, and our center location near Manvelpada Talav in Virar East.
        </p>
      </div>
      <FAQ />
      <CallToAction />
    </div>
  );
}
