# Google Images SEO Inventory: Wavefront Academy

This inventory covers all existing image assets in the repository, their current technical state, discoverability issues, and proposed optimization actions.

---

## 1. Audit Table of Visual Assets

| File Path in Repo | Public URL / Ref | Current Dimensions & Size | Content & Context | Issues Identified | Proposed Optimization | Priority | Human Review |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `public/walogo.png` | `/walogo.png` | 55 KB | Official Wavefront Academy Logo | Good, used across header/footer | Add descriptive alt text (`Wavefront Academy Official Logo`), define explicit width/height | P2 | No |
| `public/325bd5ca-e006-44f3-b6d7-54739ab80c99.png` | Direct asset | **2.87 MB** | Hero / Academic Banner | Heavy payload, UUID filename, no explicit width/height | Compress & convert to WebP; rename to `wavefront-academy-classroom-virar.webp` | **P1** | Yes (Confirm visual crop) |
| `public/4e5d5e82-b91d-48ff-89f7-a08127b84f87.png` | Used in `JeePage.jsx` | **2.11 MB** | JEE classroom / problem solving | Heavy file size, UUID filename | Rename to `jee-coaching-classroom-virar.webp`, compress to <150KB | **P1** | No |
| `public/945e73cd-3054-4eb7-944f-99d1fb39047a.png` | Direct asset | **1.99 MB** | Classroom / Study Session | Heavy payload, UUID filename | Convert to WebP, rename to `student-study-session-virar.webp` | **P1** | Yes |
| `public/2a0f3774-d32f-4174-bf10-606e748b3690.png` | Direct asset | **1.96 MB** | Academic Session | Heavy payload, UUID filename | Convert to WebP, rename to `science-practical-session-virar.webp` | **P1** | Yes |
| `public/image-1.png` | Used in `About.jsx` | **1.37 MB** | Students in classroom | Generic filename, 1.37MB PNG | Rename to `wavefront-students-classroom-virar.webp`, compress to <120KB, set explicit width/height | **P1** | No |
| `public/classroom.jpg` | Direct asset | 91 KB | Authentic classroom photo | Unused in components | Use in `Faculty.jsx` to replace the third-party Unsplash stock photo | **P1** | No |
| `public/chandan.jpeg` | Used in `achievements.js` | 20 KB | Chandan Chaubey (99.30%ile MHT-CET) | Generic alt text in `Results.jsx` | Update alt text: `Chandan Chaubey - 99.30%ile MHT-CET Topper Wavefront Academy Virar` | P2 | No |
| `public/harsh.jpeg` | Used in `achievements.js` | 77 KB | Harsha Jha (98.56%ile MHT-CET) | Alt text is just student name | Update alt text: `Harsha Jha - 98.56%ile MHT-CET Topper Wavefront Academy Virar` | P2 | No |
| `public/tejraj.jpeg` | Used in `achievements.js` | 64 KB | Tejraj Mehtre (96.03%ile MHT-CET) | Alt text is just student name | Update alt text: `Tejraj Mehtre - 96.03%ile MHT-CET Wavefront Academy Virar` | P2 | No |
| `public/newstudent.png` | Used in `achievements.js` | 201 KB | Akshay Karande (98.33%ile JEE Mains) | Generic filename `newstudent.png` | Rename to `akshay-karande-jee-mains.png` and update alt text | P2 | No |
| `public/aditya.jpg` | Used in `achievements.js` | 121 KB | Aditya Jha (90% 10th Board) | Needs contextual alt text | Update alt text: `Aditya Jha - 10th Board Topper (90%) Wavefront Academy` | P2 | No |
| `public/om.jpg` | Used in `achievements.js` | 176 KB | Om Jha (90% 10th Board) | Needs contextual alt text | Update alt text: `Om Jha - 10th Board Topper (90%) Wavefront Academy` | P2 | No |
| `public/krishna.jpg` | Used in `achievements.js` | 118 KB | Krishna Gupta (88% 10th Board) | Needs contextual alt text | Update alt text: `Krishna Gupta - 10th Board (88%) Wavefront Academy` | P2 | No |
| `public/class_student.jpg` | Direct asset | 109 KB | Real classroom session | Unused in main site | Integrate into `About.jsx` or Program pages | P2 | No |
| `public/picnic.jpeg` | Direct asset | 826 KB | Student outing/annual activity | Large JPEG, unlinked | Useful for Student Life / About section with WebP compression | P3 | No |

---

## 2. Technical Best Practices for Google Images

1. **Include Images in XML Sitemap:**
   Googlebot discovers images through the `<image:image>` extension inside the XML sitemap. Every primary landing page in `sitemap.xml` will be supplied with its primary image URL, caption, and title.
2. **Explicit Width and Height Attributes:**
   Every `<img>` tag must include `width` and `height` (or an explicit CSS `aspect-ratio`) to prevent Layout Shifts (CLS) while downloading.
3. **Lazy-Loading Strategy:**
   - Hero and above-the-fold images: `loading="eager" fetchpriority="high"`
   - Below-the-fold classroom photos and student grids: `loading="lazy" decoding="async"`
