# Google Sheets — Contact Form Backend

The contact modal posts JSON to an Apps Script Web App, which appends a row
to a Google Sheet. Free, no server, ~10 min setup.

## 1. Create the Sheet

1. Go to https://sheets.google.com → **+ Blank**
2. Name it `SOHub Leads` (or anything)
3. Add headers in row 1 (case-sensitive — script reads these names):

| Timestamp | Full Name | Email | Portfolio | Application | Submitted At (ISO) |
|-----------|-----------|-------|-----------|-------------|--------------------|

## 2. Add the Apps Script

1. In the Sheet: **Extensions → Apps Script**
2. Delete the placeholder `Code.gs` content and paste:

   ```javascript
   const SHEET_NAME = 'Sheet1'; // change if your tab is named differently

   function doPost(e) {
     const lock = LockService.getScriptLock();
     lock.waitLock(10000);
     try {
       const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
       if (!sheet) throw new Error('Sheet "' + SHEET_NAME + '" not found');
       const data = JSON.parse(e.postData.contents);
       sheet.appendRow([
         new Date(),
         data.fullName   || '',
         data.email      || '',
         data.portfolio  || '',
         data.application || '',
         data.submittedAt || ''
       ]);
       return ContentService
         .createTextOutput(JSON.stringify({ status: 'ok' }))
         .setMimeType(ContentService.MimeType.JSON);
     } catch (err) {
       return ContentService
         .createTextOutput(JSON.stringify({ status: 'error', message: String(err) }))
         .setMimeType(ContentService.MimeType.JSON);
     } finally {
       lock.releaseLock();
     }
   }
   ```

3. **Save** (Ctrl/Cmd+S), name the project `SOHub Leads`

## 3. Deploy as Web App

1. Top-right: **Deploy → New deployment**
2. Gear icon → **Web app**
3. Settings:
   - **Description**: `Contact form`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. **Deploy** → review permissions → **Allow**
5. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/AKfy.../exec`)

## 4. Wire it into the site

1. Open `src/js/config.js`
2. Replace the empty `sheetsEndpoint` with your URL:

   ```js
   window.SOHUB_CONFIG = {
     sheetsEndpoint: 'https://script.google.com/macros/s/AKfy.../exec'
   };
   ```

3. Reload the site. Submit the form once to verify a row appears in the Sheet.

## Notes

- **CORS**: the frontend uses `mode: 'no-cors'` so the response is opaque and
  the success state fires once the request completes. Errors during the script
  execution still write to the Sheet's execution log (Apps Script dashboard),
  they just don't surface in the UI. Switch to a CORS-mode fetch if you need
  fine-grained error reporting.
- **Spam protection**: this demo has none. For production add a reCAPTCHA token
  field and validate it in `doPost` before appending.
- **Locking**: `LockService.getScriptLock()` prevents concurrent writes from
  racing when multiple users submit at the same time.
- **Privacy**: anyone with the Web App URL can POST. Treat the URL as a soft
  secret — rotate by redeploying if it leaks.