/**
 * Google Apps Script for Medcy IVF - Consultation Leads Sheet
 * 
 * INSTRUCTIONS TO DEPLOY:
 * 1. Open Google Sheets (create a new blank spreadsheet, e.g. "Medcy IVF - Patient Leads").
 * 2. Click "Extensions" > "Apps Script".
 * 3. Delete any default code in Code.gs and paste this entire code.
 * 4. Click the blue "Deploy" button (top right) > "New deployment".
 * 5. Click the gear icon next to "Select type" and choose "Web app".
 * 6. Set the following options:
 *    - Description: "Medcy IVF Leads Webhook"
 *    - Execute as: "Me (your email)"
 *    - Who has access: "Anyone" (IMPORTANT! Otherwise submissions from website will be blocked).
 * 7. Click "Deploy".
 * 8. Authorize permissions when prompted (Click "Advanced" > "Go to ... (unsafe)" > "Allow").
 * 9. Copy the "Web app URL" (ends in /exec).
 * 10. Paste the URL into your project's .env file:
 *     VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
 */

function setupHeaders(sheet) {
  var headers = [
    "Timestamp (IST)",
    "Patient Name",
    "Mobile Number",
    "Age",
    "Consultation Date",
    "Time Slot",
    "Lead Source / Campaign",
    "Lead Status",
    "Doctor / Staff Notes"
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format Header Row
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground("#652D6C");       // Medcy Signature Purple
  headerRange.setFontColor("#FFFFFF");        // White text
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(11);
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  sheet.setRowHeight(1, 38);
  sheet.setFrozenRows(1);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 30 seconds for other concurrent submissions to complete
  try {
    lock.waitLock(30000);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: "Server busy, please retry" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();

    // Auto-setup headers if sheet is brand new or empty
    if (sheet.getLastRow() === 0) {
      setupHeaders(sheet);
    }

    var data = {};

    // 1. Parse JSON body if available
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Extract fields
    var timestamp = data.timestamp || Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy HH:mm:ss");
    var name = data.name || "N/A";
    var phone = data.phone ? "'" + data.phone.toString() : "N/A"; // Prefix with ' to ensure formatted as text
    var age = data.age || "N/A";
    var date = data.date || "N/A";
    var slot = data.slot || "N/A";
    var formSource = data.formSource || "Website Consultation Form";
    var status = "New Lead";
    var notes = "";

    // Append lead row
    var nextRow = sheet.getLastRow() + 1;
    var rowValues = [
      timestamp,
      name,
      phone,
      age,
      date,
      slot,
      formSource,
      status,
      notes
    ];

    sheet.getRange(nextRow, 1, 1, rowValues.length).setValues([rowValues]);

    // Format new row styling
    var dataRange = sheet.getRange(nextRow, 1, 1, rowValues.length);
    dataRange.setFontSize(10);
    dataRange.setVerticalAlignment("middle");
    sheet.setRowHeight(nextRow, 30);

    // Center align specific columns (Timestamp, Phone, Age, Date, Slot, Status)
    sheet.getRange(nextRow, 1).setHorizontalAlignment("center");
    sheet.getRange(nextRow, 3).setHorizontalAlignment("center");
    sheet.getRange(nextRow, 4).setHorizontalAlignment("center");
    sheet.getRange(nextRow, 5).setHorizontalAlignment("center");
    sheet.getRange(nextRow, 6).setHorizontalAlignment("center");
    sheet.getRange(nextRow, 8).setHorizontalAlignment("center");

    // Highlight "New Lead" status in soft yellow/purple badge
    var statusCell = sheet.getRange(nextRow, 8);
    statusCell.setBackground("#FFF9E6");
    statusCell.setFontColor("#8A6D00");
    statusCell.setFontWeight("bold");

    return ContentService
      .createTextOutput(JSON.stringify({ 
        result: "success", 
        row: nextRow, 
        message: "Lead recorded successfully" 
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        result: "error", 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Support GET requests for easy browser endpoint verification
function doGet(e) {
  if (e && e.parameter && e.parameter.name) {
    return doPost(e);
  }
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "active",
      service: "Medcy IVF Consultation Leads Webhook",
      timestamp: Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy HH:mm:ss")
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
