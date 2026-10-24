# Wavefront Academy: Growth, Advanced SEO, AI Visibility & Conversion Roadmap

## 1. Executive Summary & Repository Audit Findings (Phase 1)

### Repository State & Architecture
- **Framework & Tooling**: Vite 8.2.2 + React 19.2.8 + React Router DOM 7.18.3 + Tailwind CSS 3.4.19 + `react-helmet-async` 3.0.0.
- **Hosting**: Firebase Hosting (`wavefrontacademy.web.app`), clean URLs enabled, 301 redirects configured for legacy URLs (`/courses/*` -> `/programs/*`).
- **Git Status**: Working tree clean, last commit `16c15e1` (updated SEO). Build and oxlint passing.
- **Existing Strengths**:
  - Consistent NAP (`businessInfo.js`) with coordinates `19.4425421`, `72.8200961` (Shop No. 11, Maitry Pooja Apt, Near Manvelpada Talav, Virar East).
  - Dedicated pages for JEE, NEET, MHT-CET, Science, and School Foundation with Course schemas.
  - Image sitemap configured in `sitemap.xml`.
- **Gaps Identified**:
  - **Bot & AI Crawler Access**: `robots.txt` lacks explicit directives for `OAI-SearchBot`, `PerplexityBot`, and `ClaudeBot`.
  - **Conversion Engineering**:
    - The lead form in `CallToAction.jsx` is simulated via `setTimeout` without validation, course-context awareness, honeypot spam protection, or real submission handling.
    - Lack of persistent floating quick-action buttons (WhatsApp & Call) on mobile.
    - WhatsApp links use a generic URL (`https://wa.me/917058107207`) without course-specific prefilled messages.
  - **AI Engine Grounding**: Missing dedicated machine-readable `/llms.txt` and rich FAQ structured data for question-answering engines.
  - **Analytics & Attribution**: Zero analytics script installed (no Google Tag Manager / GA4 ID, no tracking on click-to-call, WhatsApp click, or form submission).
  - **Email Infrastructure**: Academy currently relies on a single raw Gmail account (`wavefrontacademy07@gmail.com`). No transactional email dispatch, webhook, or email service provider (ESP) connection.

---

## 2. Prioritized Implementation Plan

| Priority | Phase | Core Deliverables | Impact |
| :--- | :--- | :--- | :--- |
| **P0** | **Phase 4 & 6: Conversion & WhatsApp** | - Add persistent Mobile Sticky Action Bar (Call + WhatsApp).<br>- Dynamic pre-filled WhatsApp messages per course.<br>- Production-grade lead form with input sanitization, spam honeypot, course auto-select, privacy consent, and WhatsApp submission bridge. | Immediate lead capture & attribution. |
| **P0** | **Phase 2 & 3: Advanced SEO & AI Visibility** | - Update `robots.txt` with OAI-SearchBot, PerplexityBot, Google-Extended.<br>- Create machine-readable `/llms.txt` and `/academy-facts.json`.<br>- Embed FAQ schema (`FAQPage` LD+JSON) on `FAQPage.jsx` and center coordinates on all page breadcrumbs.<br>- Enhance internal linking across courses, fees, and contact. | Local search rankings & citation in generative AI engines. |
| **P1** | **Phase 7: Analytics & Attribution** | - Lightweight privacy-conscious event tracker utility (`trackEvent`).<br>- Track phone clicks, WhatsApp clicks, course selection, and form submission events.<br>- Ready hooks for Google Analytics 4 (GA4) / GTM without blocking rendering. | Accurate lead attribution and funnel visibility. |
| **P1** | **Phase 5: Email Communication Architecture** | - Email infrastructure recommendation & architecture (free/low-cost tiers like Resend / Brevo / Formspree).<br>- Deliver 4 ready-to-use email templates (Enquiry Acknowledgement, Course Brochure, Admission Follow-up, Announcement).<br>- SPF, DKIM, DMARC DNS configuration guide for custom domain or verified sender. | Professional student/parent lifecycle communication. |
| **P2** | **Phase 8: Local Reputation & Trust** | - Google Business Profile (GBP) optimization checklist (categories, attributes, photo cadence, review response playbook).<br>- QR code & direct review link strategy for enrolled parents and students. | Local 3-Pack domination in Virar East & Manvelpada. |

---

## 3. Detailed Architectural Specifications

### A. Phase 2 & 3 — Robots, LLMs.txt & Search Engine Grounding
1. **Robots.txt Upgrades**:
   - Explicitly permit Googlebot, Bingbot, OAI-SearchBot, PerplexityBot, and Applebot.
   - Point to `sitemap.xml` and `llms.txt`.
2. **`public/llms.txt`**:
   - Standard AI engine documentation format summarizing:
     - Entity name, physical location, landmark (Near Manvelpada Talav, Virar East).
     - Verified programs: JEE Mains/Advanced, NEET-UG, MHT-CET, 11th & 12th Science (State Board & CBSE), 8th-10th School Foundation.
     - Verified faculty and proven top ranks (99.308%ile Chandan Chaubey, 98.56%ile Harsha Jha, 98.33%ile Akshay Karande).
     - Working hours, contact numbers, transparent fee indicators.
3. **Structured Data Enhancements**:
   - Add `FAQPage` Schema to `FAQPage.jsx`.
   - Add `BreadcrumbList` Schema to Program pages.

### B. Phase 4 & 6 — Conversion Engine, Form & WhatsApp Workflow
1. **Mobile Quick Action Bar**:
   - Fixed bottom dock on mobile (`md:hidden`) with dual high-contrast action triggers:
     - 📞 Call (+91 70581 07207)
     - 💬 WhatsApp (with contextual message)
2. **Context-Aware Enquiry Form**:
   - Accept pre-selected course from page context or URL query (`?course=jee`).
   - Fields: Student/Parent Name, Mobile Number, Standard (Class), Target Program, Area/Locality in Virar.
   - Parental consent notice for students below 18 years ("I consent to Wavefront Academy contacting me regarding admissions").
   - Spam Honeypot field (hidden from humans, detects automated bot submissions).
   - Fallback Dual-Path Handler:
     1. Prepares instant WhatsApp direct enquiry redirect with formatted lead details.
     2. Dispatches payload to academy webhook/Formspree/Sheets API if configured.
3. **Course-Specific Pre-Filled WhatsApp Messages**:
   - JEE: *"Hello Wavefront Academy, I would like details regarding JEE Mains & Advanced batches for 2026/27."*
   - NEET: *"Hello Wavefront Academy, I want to enquire about NEET medical coaching and batch timings in Virar East."*
   - MHT-CET: *"Hello Wavefront Academy, please share information on MHT-CET batches and test series."*
   - 11th/12th Science: *"Hello Wavefront Academy, I am looking for 11th/12th Science coaching (PCM/PCB)."*
   - Foundation: *"Hello Wavefront Academy, I am enquiring for school foundation classes (8th–10th SSC/CBSE)."*

### C. Phase 5 — Email Infrastructure & Templates
- **Provider Recommendation**: Free tier of Brevo or Resend (up to 3,000 free transactional emails/month) or serverless Formspree with auto-responder.
- **DNS Records**: SPF (`v=spf1 include:... ~all`), DKIM (`k=rsa; p=...`), and DMARC (`v=DMARC1; p=none; rua=mailto:...`).
- **Templates**:
  1. *Immediate Enquiry Acknowledgment & Center Direction*
  2. *Program Curriculum & Schedule Brochure*
  3. *Admission Follow-Up & Free Counseling Invitation*
  4. *Academic Update & Scholarship Alert*

### D. Phase 7 — Analytics & Attribution
- Clean, non-intrusive event emitter in `src/utils/analytics.js`:
  - `trackPhoneClick(source)`
  - `trackWhatsAppClick(program, source)`
  - `trackFormSubmission(program, leadDataSummary)`
  - Supports Google Tag Manager / GA4 (`window.gtag`) if active, with graceful fallback.

### E. Phase 8 — Local Reputation & Review Strategy
- Action plan for Google Business Profile:
  - Exact Primary Category: "Coaching Center" / "Tutoring Service".
  - Secondary: "Test Preparation Center", "Science Academy".
  - Review generation protocol post-test series or board results.
