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
import { ContactPage } from './pages/ContactPage'
import { JeePage } from './pages/programs/JeePage'
import { NeetPage } from './pages/programs/NeetPage'
import { MhtCetPage } from './pages/programs/MhtCetPage'
import { SciencePage } from './pages/programs/SciencePage'
import { FoundationPage } from './pages/programs/FoundationPage'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { MobileStickyBar } from './components/layout/MobileStickyBar'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col selection:bg-accent-200 selection:text-navy-900 bg-warmwhite pb-14 md:pb-0">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/jee" element={<JeePage />} />
            <Route path="/programs/neet" element={<NeetPage />} />
            <Route path="/programs/mht-cet" element={<MhtCetPage />} />
            <Route path="/programs/science" element={<SciencePage />} />
            <Route path="/programs/foundation" element={<FoundationPage />} />
            
            {/* Legacy URL Aliases to protect historical bookmarks/backlinks */}
            <Route path="/courses" element={<ProgramsPage />} />
            <Route path="/courses/jee-coaching-virar" element={<JeePage />} />
            <Route path="/courses/neet-coaching-virar" element={<NeetPage />} />
            <Route path="/courses/mht-cet-coaching-virar" element={<MhtCetPage />} />
            <Route path="/courses/11th-science" element={<SciencePage />} />
            <Route path="/courses/12th-science" element={<SciencePage />} />

            <Route path="/results" element={<ResultsPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileStickyBar />
      </div>
    </BrowserRouter>
  )
}

export default App
