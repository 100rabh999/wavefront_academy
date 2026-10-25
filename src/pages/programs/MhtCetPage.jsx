import React from 'react';
import { PageSEO } from '../../components/seo/PageSEO';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { CallToAction } from '../../components/sections/CallToAction';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Zap, Target, BookOpen } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export function MhtCetPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "MHT-CET Coaching Classes",
    "description": "Maharashtra State Board aligned MHT-CET coaching for Engineering and Pharmacy entrance examinations. Home to 99.308 percentile state toppers in Virar East.",
    "provider": {
      "@type": "EducationalOrganization",
      "@id": `${businessInfo.website}/#organization`,
      "name": businessInfo.name,
      "url": businessInfo.website
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "In-Person",
      "location": {
        "@type": "Place",
        "name": businessInfo.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": businessInfo.address.street,
          "addressLocality": businessInfo.address.locality,
          "addressRegion": businessInfo.address.state,
          "postalCode": businessInfo.address.postalCode,
          "addressCountry": businessInfo.address.country
        }
      }
    }
  };

  return (
    <div className="pt-24 md:pt-28 bg-warmwhite">
      <PageSEO 
        title="MHT-CET Coaching in Virar | Wavefront Academy"
        description="Learn from proven 99.30%ile toppers in MHT-CET. Wavefront Academy offers Maharashtra State Board curriculum coaching, speed drills, and mock tests in Virar East."
        canonicalPath="/programs/mht-cet"
        schema={courseSchema}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
          { name: 'MHT-CET', path: '/programs/mht-cet' }
        ]}
      />

      {/* Breadcrumb & Hero */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex text-sm text-navy-400 mb-8 font-medium">
            <Link to="/" className="hover:text-accent-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 mt-0.5" />
            <Link to="/programs" className="hover:text-accent-600 transition-colors">Programs</Link>
            <ChevronRight className="w-4 h-4 mx-2 mt-0.5" />
            <span className="text-navy-900">MHT-CET Coaching</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent-50 text-accent-700 font-bold text-xs md:text-sm mb-6 tracking-wide uppercase">
              State Engineering & Pharmacy Entrance
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-950 mb-6 leading-tight">
              MHT-CET Coaching <span className="text-accent-600">in Virar East</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8">
              Proven results including 99.308 percentile in MHT-CET. Comprehensive Maharashtra State Board textbook coverage paired with speed enhancement strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button variant="primary" className="px-8 py-3.5">Enquire for MHT-CET Batch</Button>
              </a>
              <Link to="/results">
                <Button variant="outline" className="px-8 py-3.5 bg-white">View Toppers & Percentiles</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Toppers Spotlight */}
      <section className="py-12 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-4xl lg:text-5xl font-display font-bold text-accent-400 mb-2">99.308%ile</p>
              <p className="text-lg font-semibold text-white">Chandan Chaubey</p>
              <p className="text-xs uppercase text-navy-200 mt-1">MHT-CET Top Ranker</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-4xl lg:text-5xl font-display font-bold text-accent-400 mb-2">98.56%ile</p>
              <p className="text-lg font-semibold text-white">Harsha Jha</p>
              <p className="text-xs uppercase text-navy-200 mt-1">MHT-CET Top Ranker</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-4xl lg:text-5xl font-display font-bold text-accent-400 mb-2">96.398%ile</p>
              <p className="text-lg font-semibold text-white">Pratiksha Bare</p>
              <p className="text-xs uppercase text-navy-200 mt-1">MHT-CET Top Ranker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Why Wavefront Dominates MHT-CET Preparation" 
            subtitle="Targeted Strategy" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-accent-500" />,
                title: "State Board Syllabus Mastery",
                desc: "MHT-CET questions derive strictly from the Maharashtra State Board curriculum. We conduct thorough textbook drills across Physics, Chemistry, and Math/Biology."
              },
              {
                icon: <Zap className="w-8 h-8 text-accent-500" />,
                title: "Speed & Shortcut Techniques",
                desc: "With 150 questions in limited time, speed is decisive. Our faculties teach elimination methods, calculation shortcuts, and time allocation frameworks."
              },
              {
                icon: <Target className="w-8 h-8 text-accent-500" />,
                title: "Computer-Based Test (CBT) Mocks",
                desc: "Complete simulation of the official online examination interface to build test-taking confidence and eliminate examination anxiety."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-navy-50 shadow-sm">
                <div className="mb-6 bg-accent-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-navy-950 mb-3">{feature.title}</h3>
                <p className="text-charcoal leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom Environment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 mb-6">
                Achieve Admission into Premier Engineering Colleges
              </h2>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                Whether aiming for COEP, VJTI, SPIT, or top pharmacy institutes in Maharashtra, securing a 98+ percentile requires disciplined practice and expert guidance.
              </p>
              <ul className="space-y-4">
                {[
                  "Complete integration with 12th Board exam schedules",
                  "Over 5,000+ chapter-wise and full-length MCQs practiced",
                  "Dedicated performance analytics to track weak subjects",
                  "Center conveniently located near Manvelpada Talav, Virar East"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent-500 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-navy-900 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent-50 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="/class_student.jpg" 
                alt="MHT-CET study sessions at Wavefront Academy Virar"
                width="800"
                height="600"
                loading="lazy"
                className="rounded-[2rem] shadow-premium object-cover w-full aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction defaultProgram="MHT-CET" />
    </div>
  );
}
