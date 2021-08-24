function doGet() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("Sheet1");
    const data = ws.getRange("A1").getDataRegion().getValues();
  
    const response = [{status: 200, data: data}];
  
    return ContentService
        .createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);
}