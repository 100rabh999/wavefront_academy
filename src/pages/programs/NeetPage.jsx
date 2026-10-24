import React from 'react';
import { PageSEO } from '../../components/seo/PageSEO';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { CallToAction } from '../../components/sections/CallToAction';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Dna, BookOpen, Award } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export function NeetPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "NEET Medical Entrance Coaching",
    "description": "Rigorous medical entrance exam coaching with deep NCERT Biology coverage, Physics numerical practice, and Chemistry problem solving in Virar East.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": businessInfo.name,
      "sameAs": businessInfo.website
    }
  };

  return (
    <div className="pt-24 md:pt-28 bg-warmwhite">
      <PageSEO 
        title="NEET Coaching in Virar East | Medical Entrance Classes"
        description="Comprehensive NEET preparation in Virar East at Wavefront Academy. Thorough NCERT Biology focus, Physics problem-solving, regular mock tests, and personalized mentoring."
        canonicalPath="/programs/neet"
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
            <span className="text-navy-900">NEET Preparation</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent-50 text-accent-700 font-bold text-xs md:text-sm mb-6 tracking-wide uppercase">
              Medical Entrance
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-950 mb-6 leading-tight">
              NEET Coaching Classes <span className="text-accent-600">in Virar East</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8">
              Target top medical colleges with concept-driven training in Biology, Physics, and Chemistry. Small batches with dedicated doubt solving at Manvelpada Talav, Virar East.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button variant="primary" className="px-8 py-3.5">Enquire for NEET Batch</Button>
              </a>
              <Link to="/results">
                <Button variant="outline" className="px-8 py-3.5 bg-white">View Student Results</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Approach */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Approach to NEET Mastery" 
            subtitle="Curriculum Strategy" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Dna className="w-8 h-8 text-accent-500" />,
                title: "NCERT-Centric Biology",
                desc: "Thorough line-by-line NCERT analysis for Botany and Zoology, ensuring complete command over high-yield factual and conceptual questions."
              },
              {
                icon: <BookOpen className="w-8 h-8 text-accent-500" />,
                title: "Physics & Chemistry Problem Solving",
                desc: "Dedicated numerical problem-solving sessions designed specifically for medical aspirants who need to master speed and formula application."
              },
              {
                icon: <Award className="w-8 h-8 text-accent-500" />,
                title: "NTA Pattern Mock Series",
                desc: "Full-syllabus OMR-based test series with granular negative-marking analysis to build time management and real examination stamina."
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

      {/* Learning Environment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-950 mb-6">
                Personalized Mentoring for Aspiring Doctors
              </h2>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                Clearing NEET requires unwavering consistency and timely doubt resolution. At Wavefront Academy, our mentors work closely with each student to address individual weak areas before test day.
              </p>
              <ul className="space-y-4">
                {[
                  "Complete 11th and 12th syllabus coverage aligned with NEET-UG",
                  "Small batch sizes ensuring individual attention and interaction",
                  "Daily practice papers (DPPs) with detailed solutions",
                  "Direct doubt sessions with experienced subject faculties"
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
                src="/classroom.jpg" 
                alt="NEET classroom environment at Wavefront Academy Virar East"
                width="800"
                height="600"
                loading="lazy"
                className="rounded-[2rem] shadow-premium object-cover w-full aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction defaultProgram="NEET" />
    </div>
  );
}
