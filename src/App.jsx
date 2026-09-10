import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { TrustStrip } from './components/sections/TrustStrip'
import { Results } from './components/sections/Results'
import { Programs } from './components/sections/Programs'
import { WhyWavefront } from './components/sections/WhyWavefront'
import { Methodology } from './components/sections/Methodology'
import { About } from './components/sections/About'
import { Pricing } from './components/sections/Pricing'
import { FAQ } from './components/sections/FAQ'
import { CallToAction } from './components/sections/CallToAction'

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent-200 selection:text-navy-900 bg-warmwhite">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <Results />
        <Programs />
        <WhyWavefront />
        <Methodology />
        <About />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
