import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { trackPhoneClick, trackWhatsAppClick } from '../../utils/analytics';

export function MobileStickyBar({ courseName = '' }) {
  const handlePhone = () => {
    trackPhoneClick('mobile_sticky_bar');
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick(courseName || 'general', 'mobile_sticky_bar');
  };

  const whatsappLink = courseName 
    ? businessInfo.getWhatsAppUrl(courseName)
    : businessInfo.getWhatsAppUrl();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-navy-100 px-4 py-2.5 md:hidden flex items-center justify-between gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href={`tel:${businessInfo.phoneRaw}`}
        onClick={handlePhone}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-950 text-white font-semibold text-sm active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-accent-400" />
        <span>Call Now</span>
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsApp}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm active:scale-95 transition-transform shadow-sm"
      >
        <MessageSquare className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
