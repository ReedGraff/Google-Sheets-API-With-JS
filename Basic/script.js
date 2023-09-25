
// NEW
function doGet() {
    var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();

    const response = [{status: 200, data: data}];
  
    return ContentService
        .createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);
}





// OLD
/*
function doGet() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("SHEET NAME");
    const data = ws.getRange("A1").getDataRegion().getValues();
  
    const response = [{status: 200, data: data}];
  
    return ContentService
        .createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);
}
*/
