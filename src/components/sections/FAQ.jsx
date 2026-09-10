import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Which classes do you teach?",
    answer: "We teach students from 8th to 12th standard (Science), covering SSC and CBSE boards, along with dedicated foundation programs."
  },
  {
    question: "Do you offer JEE, NEET, and MHT-CET preparation?",
    answer: "Yes, we provide specialized and rigorous coaching for JEE Mains & Advanced, NEET, MHT-CET, as well as NDA and other entrance exams."
  },
  {
    question: "Where is the academy located?",
    answer: "We are located at Shop No. 11, Maitry Pooja Bldg.1, Near Viva College, Virar West, Palghar 401303."
  },
  {
    question: "How can I enquire or enroll?",
    answer: "You can reach out to us via the contact form below, call or WhatsApp us at +91 7058107207, or visit our center directly."
  },
  {
    question: "What is the fee structure?",
    answer: "Fees vary based on the specific program (Foundation, Board, or Competitive) and the duration of the course. Please enquire with us for the detailed and current fee structure."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 md:py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Common Queries" 
        />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-accent-200 bg-accent-50/30' : 'border-gray-200 bg-white'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-inset"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-navy-950 pr-8">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-accent-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-charcoal text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
