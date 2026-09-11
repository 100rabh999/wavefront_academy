import React from 'react';
import { PageSEO } from '../../components/seo/PageSEO';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { CallToAction } from '../../components/sections/CallToAction';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Calculator, FileText, HelpCircle, Activity } from 'lucide-react';

export function JeePage() {
  return (
    <div className="pt-24 md:pt-28 bg-warmwhite">
      <PageSEO 
        title="JEE Coaching Classes in Virar | Mains & Advanced Prep"
        description="Rigorous JEE Mains and Advanced training at Wavefront Academy in Virar. We focus on advanced problem solving, mock tests, and doubt clearing for engineering aspirants."
        canonicalPath="/programs/jee"
      />

      {/* Breadcrumb & Hero */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex text-sm text-navy-400 mb-8 font-medium">
            <Link to="/" className="hover:text-accent-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 mt-0.5" />
            <Link to="/programs" className="hover:text-accent-600 transition-colors">Programs</Link>
            <ChevronRight className="w-4 h-4 mx-2 mt-0.5" />
            <span className="text-navy-900">JEE Mains & Advanced</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent-50 text-accent-700 font-bold text-xs md:text-sm mb-6 tracking-wide uppercase">
              Engineering Entrance
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-950 mb-6 leading-tight">
              JEE Mains & Advanced <span className="text-accent-600">Coaching in Virar</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8">
              Rigorous, structured training designed to build strong fundamentals and advanced problem-solving skills for India's most competitive engineering entrance examinations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button variant="primary" className="px-8 py-3.5">Enquire for JEE Batch</Button>
              </a>
              <Link to="/results">
                <Button variant="outline" className="px-8 py-3.5 bg-white">View Past Results</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Approach */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="How We Prepare Students for JEE" 
            subtitle="Our Methodology" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Calculator className="w-8 h-8 text-accent-500" />,
                title: "Advanced Problem Solving",
                desc: "We push beyond basic theory. Our classes focus heavily on application, numerical solving, and the high-order thinking required for JEE Advanced."
              },
              {
                icon: <FileText className="w-8 h-8 text-accent-500" />,
                title: "Mock Tests & Analysis",
                desc: "Regular testing aligned with the latest NTA pattern. We track speed, accuracy, and subject-wise performance to continuously optimize preparation."
              },
              {
                icon: <HelpCircle className="w-8 h-8 text-accent-500" />,
                title: "Doubt Clearing Sessions",
                desc: "No student is left behind. We hold dedicated doubt-solving sessions to ensure complex concepts are completely understood before moving forward."
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
                Building Concept Clarity for Engineering
              </h2>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                Success in JEE isn't about memorizing formulas—it requires a deep, intuitive understanding of Mathematics, Physics, and Chemistry. At Wavefront Academy, we emphasize the "why" behind every concept.
              </p>
              <ul className="space-y-4">
                {[
                  "Structured preparation with clear academic pathways",
                  "Personal attention to identify learning gaps early",
                  "Strict alignment with competitive exam demands",
                  "Transparent parent visibility into academic progress"
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
              {/* Note: Using existing asset from results */}
              <img 
                src="/4e5d5e82-b91d-48ff-89f7-a08127b84f87.png" 
                alt="JEE Advanced Preparation at Wavefront Academy"
                className="rounded-[2rem] shadow-premium object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
