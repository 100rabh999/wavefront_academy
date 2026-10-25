import { PageSEO } from '../components/seo/PageSEO';
import { CallToAction } from '../components/sections/CallToAction';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics';

export function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Wavefront Academy Virar",
    "description": "Contact details, address, phone number, and directions to Wavefront Academy in Virar East.",
    "url": `${businessInfo.website}/contact`,
    "mainEntity": {
      "@type": "EducationalOrganization",
      "@id": `${businessInfo.website}/#organization`,
      "name": businessInfo.name,
      "url": businessInfo.website,
      "telephone": businessInfo.phoneRaw,
      "email": businessInfo.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessInfo.address.street,
        "addressLocality": businessInfo.address.locality,
        "addressRegion": businessInfo.address.state,
        "postalCode": businessInfo.address.postalCode,
        "addressCountry": businessInfo.address.country
      }
    }
  };

  return (
    <div className="pt-24 md:pt-28 bg-warmwhite">
      <PageSEO 
        title="Contact Wavefront Academy in Virar East"
        description="Visit Wavefront Academy in Virar East near Manvelpada Talav. Get directions, call +91 70581 07207, or chat on WhatsApp for admissions and batch timings."
        canonicalPath="/contact"
        schema={contactSchema}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' }
        ]}
      />

      {/* Header */}
      <section className="py-12 md:py-16 bg-white border-b border-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent-50 text-accent-700 font-bold text-xs md:text-sm mb-4 tracking-wide uppercase">
            Admissions & Enquiries
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-6">
            Get in Touch with Wavefront Academy
          </h1>
          <p className="text-lg text-charcoal leading-relaxed">
            Have questions about admissions, batch timings, or fee structures? Visit our center or reach out via phone or WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact Cards & Map */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            <div className="bg-white p-8 rounded-3xl border border-navy-50 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-accent-50 flex items-center justify-center text-accent-600 mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">Call Us</h3>
              <p className="text-sm text-charcoal mb-4">Direct academic guidance & batch info</p>
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                onClick={() => trackPhoneClick('contact_page')}
                className="text-accent-600 font-bold hover:underline"
              >
                {businessInfo.phone}
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-navy-50 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">WhatsApp</h3>
              <p className="text-sm text-charcoal mb-4">Chat directly for quick queries</p>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('general', 'contact_page')}
                className="text-[#25D366] font-bold hover:underline"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-navy-50 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-accent-50 flex items-center justify-center text-accent-600 mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">Email Us</h3>
              <p className="text-sm text-charcoal mb-4">Send questions or document requests</p>
              <a href={`mailto:${businessInfo.email}`} className="text-accent-600 font-bold hover:underline text-sm break-all">
                {businessInfo.email}
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-navy-50 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-accent-50 flex items-center justify-center text-accent-600 mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">Center Hours</h3>
              <p className="text-sm text-charcoal mb-1">Monday – Sunday</p>
              <p className="text-sm font-semibold text-navy-950">8:00 AM – 9:00 PM</p>
            </div>

          </div>

          {/* Location & Directions */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-navy-50 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent-600 font-bold tracking-widest uppercase text-xs mb-3 block">Center Address</span>
                <h2 className="text-3xl font-display font-bold text-navy-950 mb-4">
                  Visit Our Virar East Center
                </h2>
                <p className="text-charcoal leading-relaxed mb-6">
                  {businessInfo.address.full}
                </p>
                <div className="space-y-4 text-sm text-charcoal mb-8">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Landmark:</strong> Near Manvelpada Talav (Easily accessible from Virar Railway Station East).</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Transit:</strong> Frequent auto-rickshaws available from Virar Station to Manvelpada Talav.</span>
                  </div>
                </div>
                <a 
                  href={businessInfo.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-navy-950 text-white font-medium hover:bg-navy-900 transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>

              <div className="h-80 md:h-96 rounded-2xl overflow-hidden border border-navy-100 shadow-inner">
                <iframe 
                  title="Wavefront Academy Location Map"
                  src="https://maps.google.com/maps?q=Wavefront%20Academy%2C%20Shop%20No.%2011%2C%20Maitry%20Pooja%20Apartment%2C%20Near%20Manvelpada%20Talav%2C%20Virar%20East&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Enquiry Form */}
      <CallToAction />
    </div>
  );
}
