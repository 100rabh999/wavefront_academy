import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const feeData = {
  'Pre-Primary': [
    { class: 'Junior', original: 260, discounted: 200 },
    { class: 'Senior', original: 325, discounted: 250 }
  ],
  'Primary': [
    { class: 'First', original: 390, discounted: 300 },
    { class: 'Second', original: 520, discounted: 400 },
    { class: 'Third', original: 650, discounted: 500 }
  ],
  'Secondary': [
    { class: 'Fourth', original: 780, discounted: 600 },
    { class: 'Fifth', original: 910, discounted: 700 },
    { class: 'Sixth', original: 1040, discounted: 800 },
    { class: 'Seventh', original: 1170, discounted: 900 },
    { class: 'Eighth', original: 1300, discounted: 1000 }
  ],
  'Higher Secondary & Competitive': [
    { class: 'Ninth', original: 15600, discounted: 12000 },
    { class: 'Tenth', original: 19500, discounted: 15000 },
    { class: 'Science 11th', original: 32500, discounted: 25000 },
    { class: 'Science 12th', original: 39000, discounted: 30000 },
    { class: 'MHTCET (11th & 12th)', original: 91000, discounted: 70000 },
    { class: 'JEE (11th & 12th)', original: 117000, discounted: 90000 },
    { class: 'NEET (11th & 12th)', original: 117000, discounted: 90000 },
    { class: 'NDA (11th & 12th)', original: 91000, discounted: 70000 }
  ]
};

export function Pricing() {
  const [activeTab, setActiveTab] = useState('Higher Secondary & Competitive');
  const categories = Object.keys(feeData);

  return (
    <section className="py-20 md:py-24 bg-warmwhite" id="fees">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Transparent Fee Structure" 
          subtitle="Investment in Education" 
        />
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === category
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-navy-700 hover:bg-navy-50 border border-navy-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {feeData[activeTab].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col"
                >
                  {/* Highlight Ribbon for specific courses */}
                  {(item.class.includes('JEE') || item.class.includes('NEET') || item.class === 'Tenth') && (
                    <div className="absolute top-0 right-0 bg-accent-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                      Popular
                    </div>
                  )}
                  
                  <h3 className="text-xl font-display font-bold text-navy-950 mb-4 pr-6">{item.class}</h3>
                  
                  <div className="mb-6 flex-grow">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-bold text-navy-900">₹{item.discounted.toLocaleString('en-IN')}</span>
                      <span className="text-sm text-gray-500 line-through">₹{item.original.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="text-green-600 text-sm font-semibold mt-1 bg-green-50 inline-block px-2 py-1 rounded-md">
                      Save ₹{(item.original - item.discounted).toLocaleString('en-IN')}!
                    </div>
                  </div>
                  
                  <a href="#contact" className="mt-auto block">
                    <Button variant="secondary" className="w-full text-sm">
                      Enroll Now
                    </Button>
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
