// Google Sheets Integration Utility - Hardcoded Web App Deployment URL
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzlOWqPbjCsu8oLAqr1zSNqQWKDiwMcuSUkexOtNf-ebMk8inZbp27a73X7HBJiTgDaAA/exec';

export interface FormSubmissionData {
  name: string;
  phone: string;
  slot: string;
  date: string;
  age?: string;
  formSource?: string;
}

/**
 * Sends form submission data to Google Sheets via Google Apps Script Web App URL
 */
export async function sendToGoogleSheet(data: FormSubmissionData): Promise<boolean> {
  const scriptUrl = GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.warn('Google Script URL is not configured yet. Form submission data:', data);
    return false;
  }

  try {
    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      name: data.name,
      phone: data.phone,
      age: data.age || 'N/A',
      date: data.date,
      slot: data.slot,
      formSource: data.formSource || 'General Consultation Registration'
    };

    // Use mode: 'no-cors' with 'text/plain' to avoid CORS preflight failures in Google Apps Script
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log('✅ Consultation lead sent to Google Sheets successfully:', payload);
    return true;
  } catch (error) {
    console.error('❌ Error submitting form data to Google Sheets:', error);
    return false;
  }
}
