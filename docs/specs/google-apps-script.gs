const SPREADSHEET_ID = '1Bah27H4QMAk4U4i7j4lQZBUrTJoWzhDJeSpcUOgTXdQ';
const SHEET_NAME = 'Sheet1';
const HEADERS = ['Timestamp', 'Full Name', 'Email', 'Portfolio', 'Application', 'Submitted At (ISO)'];

function ensureSheetAndHeaders() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const existingHeaders = sheet.getRange(1, 1, 1, HEADERS.length).getDisplayValues()[0];
  const isEmpty = existingHeaders.every(value => (value || '').toString().trim() === '');

  if (isEmpty) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }

  return sheet;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const sheet = ensureSheetAndHeaders();
    let data = {};

    try {
      const raw = e.postData.contents;
      if (raw) {
        data = JSON.parse(raw);
      }
    } catch (err) {
      data = e.parameter || {};
    }

    const fullName = data.fullName || data.fullname || data.name || '';
    const email = data.email || '';
    const portfolio = data.portfolio || '';
    const application = data.application || '';
    const submittedAt = data.submittedAt || '';

    sheet.appendRow([
      new Date(),
      fullName,
      email,
      portfolio,
      application,
      submittedAt
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    Logger.log(err);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
