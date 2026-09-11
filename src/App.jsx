import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

// Import Pages
import { Home } from './pages/Home'
import { ProgramsPage } from './pages/ProgramsPage'
import { ResultsPage } from './pages/ResultsPage'
import { FeesPage } from './pages/FeesPage'
import { AboutPage } from './pages/AboutPage'
import { FAQPage } from './pages/FAQPage'
import { JeePage } from './pages/programs/JeePage'
import { ScrollToTop } from './components/layout/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col selection:bg-accent-200 selection:text-navy-900 bg-warmwhite">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/jee" element={<JeePage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
