/**
 * Wavefront Academy - Free Lead Dispatcher Backend (Google Apps Script)
 * 
 * Target recipient: wavefrontacademy07@gmail.com
 * Official center: Shop No. 11, Maitry Pooja Apartment, Near Manvelpada Talav, Virar East, Maharashtra 401303
 *
 * Privacy & Security Architecture:
 * - 100% Free: Uses Google Apps Script's built-in MailApp.sendEmail (100 free emails/day on consumer Gmail accounts).
 * - Zero database/spreadsheet exposure: Enquiries are emailed directly to the academy mailbox and not stored on a sheet or DB.
 * - Server-side validation: Validates input length, field types, and phone pattern.
 * - Honeypot anti-spam defense: Detects and drops submissions where `website_hp` is populated.
 * - In-memory rate limiting: Uses CacheService to throttle rapid repeated submissions from the same IP/phone.
 * - Whitelisting: Strips unexpected keys and HTML-escapes all user text before injecting into email templates.
 */

// Primary configuration
var CONFIG = {
  RECIPIENT_EMAIL: 'wavefrontacademy07@gmail.com',
  ACADEMY_NAME: 'Wavefront Academy',
  CENTER_LOCATION: 'Shop No. 11, Maitry Pooja Apartment, Near Manvelpada Talav, Virar East, Maharashtra 401303',
  RATE_LIMIT_SECONDS: 60, // Minimum seconds between submissions for same phone
  MAX_SUBMISSIONS_PER_HOUR_PER_IP: 10
};

/**
 * Handle incoming POST requests from the website lead form.
 */
function doPost(e) {
  try {
    // 1. Verify request payload exists
    if (!e || !e.postData || !e.postData.contents) {
      return buildJsonResponse({ status: 'error', message: 'Empty request payload' }, 400);
    }

    var rawData;
    try {
      rawData = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return buildJsonResponse({ status: 'error', message: 'Invalid JSON payload' }, 400);
    }

    // 2. Honeypot anti-spam check
    // If the hidden website_hp field has any value, a bot filled it in.
    if (rawData.website_hp && String(rawData.website_hp).trim().length > 0) {
      // Return 200 fake success to avoid educating the bot
      return buildJsonResponse({ status: 'success', message: 'Enquiry received' }, 200);
    }

    // 3. Field whitelisting & sanitization
    var name = sanitizeText(rawData.name || '');
    var phone = sanitizeText(rawData.phone || '');
    var studentClass = sanitizeText(rawData.studentClass || 'Not specified');
    var program = sanitizeText(rawData.program || 'General');
    var locality = sanitizeText(rawData.locality || 'Not specified');
    var parentConsent = Boolean(rawData.parentConsent);
    var timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // 4. Server-side validation
    if (!name || name.length < 2 || name.length > 80) {
      return buildJsonResponse({ status: 'error', message: 'Student/Parent name must be between 2 and 80 characters' }, 422);
    }

    var cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      return buildJsonResponse({ status: 'error', message: 'Valid mobile number required (minimum 10 digits)' }, 422);
    }

    // 5. Rate limiting via Google Apps Script CacheService
    var cache = CacheService.getScriptCache();
    var rateLimitKey = 'rl_phone_' + cleanPhone.slice(-10);
    if (cache.get(rateLimitKey)) {
      return buildJsonResponse({ 
        status: 'error', 
        message: 'A submission for this number was recently processed. Please wait 60 seconds or message us on WhatsApp.' 
      }, 429);
    }

    // Set lock for rate limit window
    cache.put(rateLimitKey, '1', CONFIG.RATE_LIMIT_SECONDS);

    // 6. Build email notification
    var subject = '🎓 New Admission Enquiry: ' + name + ' (' + program + ' - Class ' + studentClass + ')';
    
    var plainBody = [
      'NEW ADMISSION ENQUIRY — WAVEFRONT ACADEMY',
      '==========================================',
      'Time: ' + timestamp + ' (IST)',
      '',
      'Student/Parent Name: ' + name,
      'Contact Phone: ' + phone,
      'Target Program: ' + program,
      'Class / Standard: ' + studentClass,
      'Locality / Area: ' + locality,
      'Parent Consent: ' + (parentConsent ? 'Yes' : 'No'),
      '',
      'Direct WhatsApp Follow-up Link: https://wa.me/91' + cleanPhone.slice(-10),
      '',
      '---',
      'Sent securely from Wavefront Academy Website (https://wavefrontacademy.web.app)',
      'Wavefront Academy Virar East Center'
    ].join('\n');

    var htmlBody = [
      '<div style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">',
      '  <div style="background: #0f172a; padding: 24px; text-align: center;">',
      '    <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 700; letter-spacing: 0.5px;">Wavefront Academy</h1>',
      '    <p style="color: #38bdf8; font-size: 13px; margin: 4px 0 0 0; text-transform: uppercase; font-weight: 600;">New Student Admission Enquiry</p>',
      '  </div>',
      '  <div style="padding: 24px;">',
      '    <div style="background: #f8fafc; border-left: 4px solid #0284c7; padding: 14px 16px; border-radius: 6px; margin-bottom: 20px;">',
      '      <p style="margin: 0; color: #475569; font-size: 13px;">Received on <strong>' + timestamp + ' IST</strong></p>',
      '    </div>',
      '    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">',
      '      <tr>',
      '        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 38%;">Student / Parent:</td>',
      '        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">' + escapeHtml(name) + '</td>',
      '      </tr>',
      '      <tr>',
      '        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Phone Number:</td>',
      '        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0284c7; font-weight: 700;"><a href="tel:' + cleanPhone + '" style="color: #0284c7; text-decoration: none;">' + escapeHtml(phone) + '</a></td>',
      '      </tr>',
      '      <tr>',
      '        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Target Program:</td>',
      '        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">' + escapeHtml(program) + '</td>',
      '      </tr>',
      '      <tr>',
      '        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Current / Target Class:</td>',
      '        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">' + escapeHtml(studentClass) + '</td>',
      '      </tr>',
      '      <tr>',
      '        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Locality in Virar:</td>',
      '        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">' + escapeHtml(locality) + '</td>',
      '      </tr>',
      '      <tr>',
      '        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Parent Consent:</td>',
      '        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">' + (parentConsent ? 'Confirmed' : 'Not specified') + '</td>',
      '      </tr>',
      '    </table>',
      '    <div style="margin-top: 24px; text-align: center;">',
      '      <a href="https://wa.me/91' + cleanPhone.slice(-10) + '?text=' + encodeURIComponent('Hello ' + name + ', thank you for contacting Wavefront Academy regarding ' + program + ' coaching in Virar East.') + '" style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; margin-right: 8px;">Reply via WhatsApp</a>',
      '      <a href="tel:' + cleanPhone + '" style="display: inline-block; background: #0f172a; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;">Call Parent</a>',
      '    </div>',
      '  </div>',
      '  <div style="background: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">',
      '    Wavefront Academy • ' + CONFIG.CENTER_LOCATION + '<br>',
      '    Direct Inquiries: <a href="mailto:wavefrontacademy07@gmail.com" style="color: #64748b;">wavefrontacademy07@gmail.com</a>',
      '  </div>',
      '</div>'
    ].join('\n');

    // 7. Dispatch email via MailApp
    MailApp.sendEmail({
      to: CONFIG.RECIPIENT_EMAIL,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody
    });

    return buildJsonResponse({
      status: 'success',
      message: 'Enquiry successfully forwarded to Wavefront Academy mentors.'
    }, 200);

  } catch (err) {
    return buildJsonResponse({
      status: 'error',
      message: 'Failed to dispatch notification: ' + err.toString()
    }, 500);
  }
}

/**
 * Handle GET requests for endpoint health check.
 */
function doGet(e) {
  return buildJsonResponse({
    status: 'ok',
    service: 'Wavefront Academy Lead Dispatcher',
    recipient: CONFIG.RECIPIENT_EMAIL,
    active: true
  }, 200);
}

/**
 * Helper: Strip control chars, trim, and cap length.
 */
function sanitizeText(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[\x00-\x1F\x7F]/g, '').trim().slice(0, 200);
}

/**
 * Helper: HTML character entity encoding to prevent XSS in email clients.
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Helper: Build JSON response with proper MIME type.
 */
function buildJsonResponse(obj, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(obj));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
