import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { MobileStickyBar } from './components/layout/MobileStickyBar'

// Eager load Home for instant LCP and initial paint
import { Home } from './pages/Home'

// Route-based code splitting for secondary pages
const ProgramsPage = lazy(() => import('./pages/ProgramsPage').then(m => ({ default: m.ProgramsPage })))
const ResultsPage = lazy(() => import('./pages/ResultsPage').then(m => ({ default: m.ResultsPage })))
const FeesPage = lazy(() => import('./pages/FeesPage').then(m => ({ default: m.FeesPage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })))
const FAQPage = lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })))
const JeePage = lazy(() => import('./pages/programs/JeePage').then(m => ({ default: m.JeePage })))
const NeetPage = lazy(() => import('./pages/programs/NeetPage').then(m => ({ default: m.NeetPage })))
const MhtCetPage = lazy(() => import('./pages/programs/MhtCetPage').then(m => ({ default: m.MhtCetPage })))
const SciencePage = lazy(() => import('./pages/programs/SciencePage').then(m => ({ default: m.SciencePage })))
const FoundationPage = lazy(() => import('./pages/programs/FoundationPage').then(m => ({ default: m.FoundationPage })))

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col selection:bg-accent-200 selection:text-navy-900 bg-warmwhite pb-14 md:pb-0">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="min-h-[50vh] flex items-center justify-center">
              <div className="w-8 h-8 border-3 border-accent-500 border-t-transparent rounded-full animate-spin" role="status" aria-label="Loading page content"></div>
            </div>
          }>
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
          </Suspense>
        </main>
        <Footer />
        <MobileStickyBar />
      </div>
    </BrowserRouter>
  )
}

export default App
