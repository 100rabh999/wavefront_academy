# Wavefront Academy — Email & Messaging Operational Blueprint

## 1. Audit of Current Setup
- **Existing Mailbox**: Personal / Google Workspace Gmail (`wavefrontacademy07@gmail.com`).
- **Limitation**: Direct Gmail accounts are subject to strict outgoing limits (500 messages/day), lack automated DKIM alignment on custom domains, cannot process programmatic webhooks for web enquiries, and risk spam folder placement if used for newsletters.
- **Goal**: Maintain simplicity, avoid over-engineering or paid commitments, while establishing reliable, professional transactional & marketing email flows.

---

## 2. Recommended Email Service Architecture (Low-Cost / Zero-Commitment)

### Tier 1 (Immediate Free Recommended Stack): **Brevo (formerly Sendinblue) or Resend**
- **Free Tier Allowance**:
  - Brevo: 300 emails/day (~9,000/month) 100% free forever, includes drag-and-drop template designer, contacts CRM, and automated welcome sequences.
  - Resend: 3,000 emails/month free, excellent for React / Node API webhooks.
- **Serverless Webhook Flow**:
  1. Student fills out website enquiry form (`CallToAction.jsx`).
  2. Front-end posts to a secure Formspree / Brevo endpoint (or Firebase Cloud Function).
  3. Formspree/Brevo immediately dispatches:
     - **Parent/Student Email**: Instant acknowledgement + Course Overview PDF link + Center directions.
     - **Academy Notification**: Instant notification email / SMS to `wavefrontacademy07@gmail.com`.

### Tier 2 (Domain DNS Authentication: SPF, DKIM, DMARC)
When connecting the academy's official domain (`wavefrontacademy.in` or custom domain):
```dns
# SPF (TXT record on @)
v=spf1 include:spf.brevo.com ~all

# DKIM (TXT record on mail._domainkey)
v=DKIM1; k=rsa; p=[PUBLIC_KEY_PROVIDED_BY_ESP]

# DMARC (TXT record on _dmarc)
v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc-reports@wavefrontacademy.in
```

---

## 3. Ready-To-Use Production Email Templates

### Template 1: Instant Enquiry Acknowledgement (Transactional)
**Subject**: Thank you for contacting Wavefront Academy, Virar East — Admission & Course Details
```html
<p>Dear {{name}},</p>

<p>Thank you for expressing interest in <strong>Wavefront Academy</strong>, Virar East.</p>

<p>We have received your enquiry for <strong>{{program}}</strong> (Class {{studentClass}}). Our senior academic counselor will reach out to you within 24 hours at <strong>{{phone}}</strong> to address your specific queries regarding batch schedules, syllabus progress, and test series.</p>

<div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #0284c7; margin: 20px 0;">
  <strong>Wavefront Academy Center:</strong><br>
  Shop No. 11, Maitry Pooja Apartment, Near Manvelpada Talav, Virar East, Maharashtra 401303.<br>
  <strong>Direct Phone:</strong> +91 70581 07207<br>
  <strong>Google Maps:</strong> <a href="https://maps.app.goo.gl/xqBZftfyT7MTyN5FA">View Center Location & Directions</a>
</div>

<p>If you prefer an immediate discussion, you can message us directly on WhatsApp by clicking below:<br>
<a href="https://wa.me/917058107207?text=Hi%20Wavefront%20Academy,%20following%20up%20on%20my%20recent%20website%20enquiry" style="background-color: #25D366; color: white; padding: 10px 18px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; margin-top: 10px;">Chat on WhatsApp Now</a></p>

<p>Warm regards,<br>
<strong>Academic Admissions Team</strong><br>
Wavefront Academy, Virar East</p>
```

---

### Template 2: Course Information & Brochure Follow-up
**Subject**: {{program}} Curriculum Overview & Batch Details — Wavefront Academy
```html
<p>Dear Parent & Student,</p>

<p>Following up on your query, here is an overview of how we structure our <strong>{{program}}</strong> coaching in Virar East:</p>

<ul>
  <li><strong>Curriculum Alignment</strong>: Detailed syllabus mastery with step-by-step concept clarity.</li>
  <li><strong>Test Series</strong>: Weekly chapter-end tests and official CBT (Computer-Based Test) simulation mocks.</li>
  <li><strong>Batch Size</strong>: Limited students per batch for individual doubt clarification.</li>
  <li><strong>Proven Ranks</strong>: Home to MHT-CET 99.308 percentile topper Chandan Chaubey, 98.56 percentile Harsha Jha, and 98.33%ile JEE topper Akshay Karande.</li>
</ul>

<p>We invite you to visit our center near Manvelpada Talav for a complimentary 1-on-1 academic counseling session and study material preview.</p>

<p>Reply to this email or call <strong>+91 70581 07207</strong> to book your counseling slot.</p>
```

---

### Template 3: Admission Follow-up & Parent Counseling Invite
**Subject**: Invitation for Parent-Student Counseling Session at Wavefront Academy Virar
```html
<p>Dear {{name}},</p>

<p>Choosing the right coaching institute is one of the most critical decisions for a student's competitive and board exam success.</p>

<p>We would like to invite you and your child for a brief, no-obligation counseling session at our center:</p>
<p>📍 <strong>Location</strong>: Shop No. 11, Maitry Pooja Apartment, Near Manvelpada Talav, Virar East<br>
⏰ <strong>Visiting Hours</strong>: Monday to Sunday, 08:00 AM – 09:00 PM</p>

<p>During this session, we will assess the student's foundation, explain the roadmap to 95%+ marks, and provide transparent fee and scholarship details.</p>

<p>Best regards,<br>
Wavefront Academy Mentorship Team</p>
```

---

## 4. WhatsApp Business Workflow & Lead Status Pipeline

### Recommended WhatsApp Business App Setup
- **Business Profile**:
  - Name: Wavefront Academy
  - Category: Educational Consultant / Coaching Service
  - Description: Premier coaching classes in Virar East for JEE, NEET, MHT-CET, 11th & 12th Science, and School Foundation (8th–10th).
  - Business Address: Shop No. 11, Maitry Pooja Apartment, Near Manvelpada Talav, Virar East, Maharashtra 401303.
  - Hours: Mon–Sun 8:00 AM – 9:00 PM.

### Quick Reply Shortcuts (Saved in WhatsApp Business)
1. `/fees`: *"Our fee structure depends on the program (Foundational vs 2-Year Competitive). You can view the full transparent fee guide at https://wavefrontacademy.web.app/fees or visit us for merit scholarship details."*
2. `/directions`: *"Wavefront Academy is located at Shop No. 11, Maitry Pooja Apartment, Near Manvelpada Talav, Virar East. It is 5-7 minutes by auto from Virar Railway Station East. Map: https://maps.app.goo.gl/xqBZftfyT7MTyN5FA"*
3. `/timings`: *"We operate multiple morning and evening batches suitable for college and school hours. Our counselors are available at the center from 8:00 AM to 9:00 PM daily."*
4. `/toppers`: *"See our student results and scorecards, including 99.308%ile MHT-CET and 98.33%ile JEE Mains toppers, at https://wavefrontacademy.web.app/results"*

### Simple 6-Stage Lead Status Workflow (Labels in WhatsApp Business)
1. 🟡 **New Lead**: Uncontacted website or WhatsApp enquiry.
2. 🔵 **Contacted**: Initial response sent with program info and counseling offer.
3. 🟣 **Interested**: Student/parent confirmed program interest, discussing timings.
4. 🟢 **Visit Scheduled**: Appointment booked at Manvelpada Talav center.
5. 🏆 **Admitted**: Registration and fees completed.
6. ⚪ **Not Interested / Archive**: Follow-up concluded with respect for recipient preferences.
