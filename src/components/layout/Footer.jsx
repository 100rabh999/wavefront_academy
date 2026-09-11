import React from 'react';
import { Phone, Mail, MapPin, Globe, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/walogo.png" alt="Wavefront Academy" className="h-12 w-12 rounded-full" />
              <div>
                <h2 className="text-2xl font-display font-bold text-white">Wavefront</h2>
                <p className="text-xs font-semibold text-accent-400 tracking-widest uppercase">Academy</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Best coaching classes in Virar & Nallasopara for JEE, NEET, MHT-CET, 11th-12th Science, and School sections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://wa.me/917058107207" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 tracking-wide text-sm text-navy-100 uppercase">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Programs', path: '/programs' },
                { name: 'Results', path: '/results' },
                { name: 'About', path: '/about' },
                { name: 'FAQ', path: '/faq' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-navy-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 tracking-wide text-sm text-navy-100 uppercase">Programs</h4>
            <ul className="space-y-4">
              {['JEE Main & Advanced', 'NEET', 'MHT-CET', 'NDA', 'School Academics'].map((program) => (
                <li key={program}>
                  <a href="#programs" className="text-navy-300 hover:text-white transition-colors text-sm">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 tracking-wide text-sm text-navy-100 uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-300 text-sm">+91 7058107207</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-300 text-sm">wavefrontacademy@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-300 text-sm leading-relaxed">
                  Shop No. 11, Maitry Pooja Bldg.1, Near Viva College, Virar West, Palghar 401303
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-xs">
            © {new Date().getFullYear()} Wavefront Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
