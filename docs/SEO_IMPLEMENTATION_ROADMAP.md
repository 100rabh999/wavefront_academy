# SEO Implementation Roadmap: Wavefront Academy

A phased, low-risk execution plan to achieve maximum organic and local visibility in Virar, Maharashtra.

---

## Phase 1: Immediate Fixes (Day 1 - Codebase Correction)
- [x] **Correct NAP Discrepancy Across Codebase (P0):** Fix address in `Footer.jsx` and `CallToAction.jsx` to "Shop No. 11, Maitry Pooja Apartment, Near Manvelpada Talav, Virar East, Maharashtra 401303".
- [x] **Fix Click-to-Call Functionality (P1):** Ensure all telephone references use clickable `<a href="tel:+917058107207">` tags.
- [x] **Replace Unsplash Stock Photo in `Faculty.jsx` (P1):** Replace generic Unsplash image with authentic `/classroom.jpg` from repository.
- [x] **Consolidate Obsolete Static Directories (P1):** Remove lingering static directories in `public/courses`, `public/about`, `public/contact`, `public/results` that conflict with Firebase SPA rewrites.
- [x] **Add Missing High-Intent Program Pages (P1):** Implement `/programs/neet`, `/programs/mht-cet`, `/programs/science`, and `/contact` in React Router.
- [x] **Upgrade Sitemaps with Image SEO Extension (P1):** Rewrite `sitemap.xml` with standard XML image extensions (`xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"`).
- [x] **Enhance LocalBusiness JSON-LD (P2):** Update `index.html` schema with precise geo-coordinates (`19.4582`, `72.8123`), opening hours, and Google Maps URL.

---

## Phase 2: First 7 Days (Webmaster Verification & Image Compression)
1. **Google Search Console (GSC) Setup:**
   - Verify domain or URL-prefix property (`https://wavefrontacademy.web.app/`).
   - Submit new `sitemap.xml`.
   - Run URL Inspection on `/`, `/programs/jee`, `/programs/neet`, `/programs/mht-cet`.
2. **Google Business Profile Alignment:**
   - Verify that GBP primary category is set to **"Coaching Center"** or **"Educational Institution"**.
   - Set secondary categories: *Tuition Centre*, *Test Preparation Center*, *Educational Consultant*.
   - Ensure the business name matches exactly: **Wavefront Academy**.
   - Align primary website link in GBP directly to `https://wavefrontacademy.web.app/`.
3. **Image Optimization & Compression:**
   - Convert oversized PNG files (`>1MB`) to modern WebP format (<150KB each).
   - Set descriptive filenames following the pattern `[program]-[topic]-virar.webp`.

---

## Phase 3: Days 8–30 (Local Authority & Review Generation)
1. **Ethical Parent & Student Review Drive:**
   - Create a short Google Maps review link (via GBP Dashboard).
   - Reach out to 2025/2026 toppers (Chandan Chaubey, Harsha Jha, Akshay Karande) and parents to share honest reviews mentioning specific exams (MHT-CET, JEE) and faculty attention.
2. **Local Citation Audit:**
   - Audit and claim consistent NAP on Justdial, Sulekha, IndiaMART, Facebook, and local education directories.
3. **Core Web Vitals Verification:**
   - Test production build on PageSpeed Insights for mobile LCP (<2.5s) and CLS (<0.1).

---

## Phase 4: Days 31–60 (Content Deepening & Long-Tail Capture)
1. **Syllabus & Exam Pattern Guides:**
   - Add downloadable or interactive MHT-CET and JEE syllabus breakdowns tailored for Maharashtra State Board students.
2. **Faculty Profiles (E-E-A-T):**
   - Expand `faculty.js` with individual teacher profiles, subject specializations, and qualifications to satisfy Google's Quality Rater Guidelines.

---

## Phase 5: Days 61–90 (Performance Tracking & Prerendering)
1. **Search Console Analytics Review:**
   - Track organic impressions for "best coaching in virar", "jee classes virar", "mht cet coaching virar".
   - Isolate Google Images performance report to check image impressions and click-through rates.
2. **Prerendering / SSG Evaluation:**
   - If Googlebot render budget delays indexation of dynamic text, evaluate Vite static site generation (`vite-plugin-prerender` or SSG) to emit pure HTML files per route at build time.
