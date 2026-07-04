const SHEET_NAME = 'SOHub Leads';
const HEADERS = ['Timestamp', 'Full Name', 'Email', 'Portfolio', 'Application', 'Submitted At (ISO)'];

function ensureSheetAndHeaders() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.getSheets()[0] || spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getName() !== SHEET_NAME) {
      spreadsheet.renameActiveSheet(SHEET_NAME);
      sheet = spreadsheet.getSheetByName(SHEET_NAME);
    }
  }

  const existingHeaders = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
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
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      data = e.parameter || {};
    }

    sheet.appendRow([
      new Date(),
      data.fullName || data.fullname || '',
      data.email || '',
      data.portfolio || '',
      data.application || '',
      data.submittedAt || ''
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
