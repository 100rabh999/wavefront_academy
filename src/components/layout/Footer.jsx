import { Phone, Mail, MapPin, Globe, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../../data/businessInfo';
import { trackPhoneClick, trackWhatsAppClick } from '../../utils/analytics';

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
              <a
                href={businessInfo.website}
                aria-label="Visit Wavefront Academy Website"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={businessInfo.whatsappUrl}
                aria-label="Chat with Wavefront Academy on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('general', 'footer')}
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
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
              {[
                { name: 'JEE Main & Advanced', path: '/programs/jee' },
                { name: 'NEET Medical', path: '/programs/neet' },
                { name: 'MHT-CET', path: '/programs/mht-cet' },
                { name: '11th & 12th Science', path: '/programs/science' },
                { name: 'School Foundation (8-10)', path: '/programs/foundation' }
              ].map((program) => (
                <li key={program.name}>
                  <Link to={program.path} className="text-navy-300 hover:text-white transition-colors text-sm">
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 tracking-wide text-sm text-navy-100 uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  onClick={() => trackPhoneClick('footer')}
                  className="text-navy-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${businessInfo.email}`} className="text-navy-300 hover:text-white transition-colors text-sm">
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-300 text-sm leading-relaxed">
                  {businessInfo.address.full}
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
