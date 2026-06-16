/**
 * AOB India — Contact Form Handler
 *
 * SETUP STEPS:
 * 1. Go to https://script.google.com and create a new project.
 * 2. Paste this entire file into the editor.
 * 3. Update SHEET_ID and NOTIFY_EMAIL below.
 * 4. Click Deploy → New deployment → Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the web app URL and paste it into your .env file:
 *    VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
 * 6. On redeployment (code changes), always create a NEW deployment version.
 */

// ── Config ──────────────────────────────────────────────────────────────────
var SHEET_ID = '';          // Leave blank to use the active spreadsheet
var SHEET_NAME = 'Leads';   // Tab name inside the spreadsheet
var NOTIFY_EMAIL = 'umeshsahu32@gmail.com';
// ────────────────────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    var params = JSON.parse(e.postData.contents);
    saveToSheet_(params);
    sendNotificationEmail_(params);
    return jsonResponse_({ status: 'success' });
  } catch (err) {
    return jsonResponse_({ status: 'error', message: err.message });
  }
}

// Handles preflight / direct browser visits gracefully
function doGet() {
  return jsonResponse_({ status: 'ok', message: 'AOB India contact endpoint is live.' });
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function saveToSheet_(data) {
  var ss = SHEET_ID
    ? SpreadsheetApp.openById(SHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  // Write header row on first submission
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'First Name', 'Last Name', 'Email', 'Phone', 'Message']);
    sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#2F80FF').setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    data.firstName  || '',
    data.lastName   || '',
    data.email      || '',
    data.phone      || '',
    data.message    || '',
  ]);

  // Auto-resize columns for readability
  sheet.autoResizeColumns(1, 6);
}

function sendNotificationEmail_(data) {
  var subject = 'New Lead — ' + data.firstName + ' ' + data.lastName + ' | AOB India';

  var htmlBody = [
    '<div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;border-radius:8px;overflow:hidden;">',
    '  <div style="background:#060B14;padding:32px 36px;">',
    '    <h1 style="color:#2F80FF;font-size:22px;margin:0;">AOB India</h1>',
    '    <p style="color:#B6C2D1;margin:6px 0 0;font-size:13px;">New Contact Form Submission</p>',
    '  </div>',
    '  <div style="padding:32px 36px;background:#ffffff;">',
    '    <table style="width:100%;border-collapse:collapse;font-size:14px;">',
    '      <tr><td style="padding:10px 0;color:#6B7280;width:130px;vertical-align:top;">Name</td>',
    '          <td style="padding:10px 0;color:#111827;font-weight:600;">' + data.firstName + ' ' + data.lastName + '</td></tr>',
    '      <tr><td style="padding:10px 0;color:#6B7280;vertical-align:top;">Email</td>',
    '          <td style="padding:10px 0;color:#2F80FF;"><a href="mailto:' + data.email + '" style="color:#2F80FF;">' + data.email + '</a></td></tr>',
    '      <tr><td style="padding:10px 0;color:#6B7280;vertical-align:top;">Phone</td>',
    '          <td style="padding:10px 0;color:#111827;">' + data.phone + '</td></tr>',
    '      <tr><td style="padding:10px 0;color:#6B7280;vertical-align:top;border-top:1px solid #F3F4F6;">Message</td></tr>',
    '    </table>',
    '    <div style="background:#F9FAFB;border-left:3px solid #2F80FF;padding:16px 20px;margin-top:4px;border-radius:0 6px 6px 0;font-size:14px;color:#374151;line-height:1.7;">',
    escapeHtml_(data.message || ''),
    '    </div>',
    '  </div>',
    '  <div style="padding:20px 36px;background:#F3F4F6;font-size:12px;color:#9CA3AF;text-align:center;">',
    '    Submitted via AOB India contact form',
    '  </div>',
    '</div>',
  ].join('\n');

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    replyTo: data.email || '',
  });
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml_(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}
