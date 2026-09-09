import React from 'react';
import { Phone, Mail, MapPin, Globe, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/walogo.png" alt="Wavefront Academy" className="h-12 w-12 rounded-full" />
              <div>
                <h2 className="text-2xl font-display font-bold text-white">Wavefront</h2>
                <p className="text-xs font-semibold text-wavefront-400 tracking-widest uppercase">Academy</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Best coaching classes in Virar & Nallasopara for JEE, NEET, MHT-CET, 11th-12th Science, and School sections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-wavefront-500 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://wa.me/917058107207" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h3 className="text-white font-bold mb-6 font-display">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-wavefront-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-wavefront-400 transition-colors">Our Programs</a></li>
              <li><a href="#results" className="hover:text-wavefront-400 transition-colors">Student Results</a></li>
              <li><a href="#contact" className="hover:text-wavefront-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Courses Col */}
          <div>
            <h3 className="text-white font-bold mb-6 font-display">Programs</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#courses" className="hover:text-wavefront-400 transition-colors">JEE Mains & Adv</a></li>
              <li><a href="#courses" className="hover:text-wavefront-400 transition-colors">NEET</a></li>
              <li><a href="#courses" className="hover:text-wavefront-400 transition-colors">MHT-CET</a></li>
              <li><a href="#courses" className="hover:text-wavefront-400 transition-colors">11th & 12th Science</a></li>
              <li><a href="#courses" className="hover:text-wavefront-400 transition-colors">8th - 10th (SSC/CBSE)</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-white font-bold mb-6 font-display">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-wavefront-400 flex-shrink-0 mt-1" />
                <span>Shop No. 11, Maitry Pooja Bldg.1, Near Viva College, Virar West, Palghar 401303</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-wavefront-400 flex-shrink-0" />
                <a href="tel:7058107207" className="hover:text-white transition-colors">+91 7058107207</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-wavefront-400 flex-shrink-0" />
                <a href="mailto:info@wavefrontacademy.in" className="hover:text-white transition-colors">info@wavefrontacademy.in</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Wavefront Academy. All rights reserved.</p>
          <p>Designed with ❤️ for Students</p>
        </div>
      </div>
    </footer>
  );
}
