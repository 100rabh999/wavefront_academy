import React from 'react';
import { PageSEO } from '../../components/seo/PageSEO';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { CallToAction } from '../../components/sections/CallToAction';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, BookOpen, Layers, Award } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export function SciencePage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "11th & 12th Science Coaching",
    "description": "Comprehensive HSC Maharashtra Board and CBSE Science coaching for Physics, Chemistry, Mathematics, and Biology in Virar East.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": businessInfo.name,
      "sameAs": businessInfo.website
    }
  };

  return (
    <div className="pt-24 md:pt-28 bg-warmwhite">
      <PageSEO 
        title="11th & 12th Science Classes in Virar East | HSC & CBSE Board"
        description="Master 11th and 12th Science (PCM/PCB) in Virar East. Comprehensive board preparation, concept clarity, practical guidance, and regular unit tests at Wavefront Academy."
        canonicalPath="/programs/science"
        schema={courseSchema}
      />

      {/* Breadcrumb & Hero */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex text-sm text-navy-400 mb-8 font-medium">
            <Link to="/" className="hover:text-accent-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 mt-0.5" />
            <Link to="/programs" className="hover:text-accent-600 transition-colors">Programs</Link>
            <ChevronRight className="w-4 h-4 mx-2 mt-0.5" />
            <span className="text-navy-900">11th & 12th Science</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent-50 text-accent-700 font-bold text-xs md:text-sm mb-6 tracking-wide uppercase">
              Higher Secondary Section
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-950 mb-6 leading-tight">
              11th & 12th Science Classes <span className="text-accent-600">in Virar East</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8">
              Build rock-solid conceptual mastery in Physics, Chemistry, Mathematics, and Biology. Our curriculum balances board examination excellence with competitive foundations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button variant="primary" className="px-8 py-3.5">Enquire for Science Batches</Button>
              </a>
              <Link to="/fees">
                <Button variant="outline" className="px-8 py-3.5 bg-white">View Fee Structure</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Subjects */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Subject-Wise Academic Depth" 
            subtitle="Core Disciplines" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-accent-500" />,
                title: "Physics & Chemistry",
                desc: "Emphasis on derivation steps, numerical solving, and theoretical definitions required for high marks in Maharashtra State Board and CBSE papers."
              },
              {
                icon: <Layers className="w-8 h-8 text-accent-500" />,
                title: "Mathematics & Biology",
                desc: "Step-by-step problem sets for calculus and algebra; detailed diagram and terminology focus for botanical and zoological concepts."
              },
              {
                icon: <Award className="w-8 h-8 text-accent-500" />,
                title: "Prelim Exams & Moderation",
                desc: "Rigorous preliminary examinations graded strictly according to official board moderation schemes to identify scoring bottlenecks."
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

      {/* Why Wavefront Context */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 mb-6">
                Structured Support for Board Examinations
              </h2>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                The transition from 10th to 11th Science can be overwhelming. We guide students with manageable milestones, chapter-end revisions, and clear textbook notes.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated guidance for both PCM (Engineering) and PCB (Medical) combinations",
                  "Chapter-wise test series with parent progress updates",
                  "Small batches ensuring individual focus during doubt hours",
                  "Convenient batch timings for college-going students in Virar East"
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
                src="/class.jpeg" 
                alt="11th and 12th science class at Wavefront Academy Virar East"
                width="800"
                height="600"
                loading="lazy"
                className="rounded-[2rem] shadow-premium object-cover w-full aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction defaultProgram="Science" />
    </div>
  );
}
