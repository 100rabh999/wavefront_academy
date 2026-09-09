import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Results } from './components/sections/Results'
import { Programs } from './components/sections/Programs'
import { Methodology } from './components/sections/Methodology'
import { Faculty } from './components/sections/Faculty'
import { CallToAction } from './components/sections/CallToAction'

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-wavefront-200 selection:text-navy-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Results />
        <Programs />
        <Methodology />
        <Faculty />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
