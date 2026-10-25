import React from 'react';
import { PageSEO } from '../../components/seo/PageSEO';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { CallToAction } from '../../components/sections/CallToAction';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, BookOpen, GraduationCap, Users } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export function FoundationPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Classes 8th to 10th School Foundation (SSC / CBSE / ICSE)",
    "description": "Foundational academic coaching for classes 8th, 9th, and 10th across Maharashtra SSC, CBSE, and ICSE boards in Virar East.",
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
        title="Class 8th to 10th Coaching in Virar | Wavefront Academy"
        description="Strengthen school fundamentals in Mathematics and Science. Wavefront Academy provides personalized coaching for 8th, 9th, and 10th (SSC, CBSE, ICSE) in Virar East."
        canonicalPath="/programs/foundation"
        schema={courseSchema}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
          { name: 'School Foundation (8-10)', path: '/programs/foundation' }
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
            <span className="text-navy-900">Foundation (8th - 10th)</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent-50 text-accent-700 font-bold text-xs md:text-sm mb-6 tracking-wide uppercase">
              School Foundation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-950 mb-6 leading-tight">
              Class 8th to 10th Tuition <span className="text-accent-600">in Virar East</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8">
              Build conceptual clarity in Science, Mathematics, and English. Structured guidance for Maharashtra SSC, CBSE, and ICSE students to achieve top board results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button variant="primary" className="px-8 py-3.5">Enquire for School Batch</Button>
              </a>
              <Link to="/results">
                <Button variant="outline" className="px-8 py-3.5 bg-white">View 10th Board Toppers</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Pillars */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Building Early Academic Confidence" 
            subtitle="Foundation Focus" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-accent-500" />,
                title: "Concept-First Teaching",
                desc: "Moving away from rote learning. We help students truly understand the underlying logic of mathematical theorems and scientific laws."
              },
              {
                icon: <GraduationCap className="w-8 h-8 text-accent-500" />,
                title: "Board Exam Writing Skills",
                desc: "Regular answer writing drills, diagram practice, and question-paper solving aligned with SSC, CBSE, and ICSE marking guidelines."
              },
              {
                icon: <Users className="w-8 h-8 text-accent-500" />,
                title: "Personalized Focus",
                desc: "Small batches allow mentors to identify individual learning hurdles early and provide targeted remediation before school tests."
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
                Structured Academic Discipline & Support
              </h2>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                Consistent practice and early preparation are the keys to 90%+ scores in 10th boards. Our mentors ensure every child stays encouraged and academically disciplined.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated batches for SSC, CBSE, and ICSE students",
                  "Weekly chapter tests with comprehensive parent updates",
                  "Dedicated doubt hours and revision sessions before school exams",
                  "Convenient center location near Manvelpada Talav, Virar East"
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
                src="/image-1.png" 
                alt="School foundation batch at Wavefront Academy Virar East"
                width="800"
                height="600"
                loading="lazy"
                className="rounded-[2rem] shadow-premium object-cover w-full aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction defaultProgram="Foundation" />
    </div>
  );
}
