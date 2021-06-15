# Google-Sheets-API-With-JS
This is a very simple guide that shows how to make a google sheets endpoint with JS. Once the endpoint is made, I show how to scrape the data from the endpoint and paste them into a html file.

**INSTRUCTIONS**
1. **Google Sheets Endpoint**
  2. Open a Google sheets
  3. Create a new spreadsheet (or use a pre-existing one)
  4. Fill the spreadsheet with data (for example, use the file titled: "Data.xlsx")
  5. Publish to the web (File --> Publish to the web) (Entire document, Web page)
  6. Once published, press the share button (typically found at the top right hand corner of the screen (in Google Docs))
  7. Copy and paste the link into a new tab
  8. From that link copy the sheet code. (It will typically come after a "/d/", and it will typically end right before a "/edit")
  9. Now, copy and paste this link into a new tab: "https://spreadsheets.google.com/feeds/cells/SHEETCODE/PAGENUMBER/public/full?alt=json".
  10. In the new link, replace "SHEETCODE" with your sheet code, and "PAGENUMBER" with whatever page number you would like (just type 1 if there is only one page)... 
  11. You now have a json endpoint through Google sheets! (I recccccomend using a Chrome extension in order to make the data look a lot more aesthetically pleasing (I use "JSON Formatter" by callumlocke.co.uk : https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en))
12. **JavaScript Scraping**
  13. Open the "main.js" file, and replace "ENDPOINT" with the json endpoint you made in step 10
14. **HTML Live Server**
  15. Open up your html file in a server... If you are using vscode, use the "Liver Server" extensiom, and start the "index.html" file in a live server. If you do nor have this extension, there are many other ways to do this, on is with python: 1. Open up the command line or terminal, 2. Type: "python -m http.server" and enter (it should return something like: "Serving HTTP on :: port 8000 (http://[::]:8000/) ...", 3. Go into a web browser and type: "localhost:8000" then find the "index.html" file
  16. Once a live server is up, open up the inspector (inspect element), and open the "console" tab.
  17. Click the drop down on "object"
  18. This is all of the data that has been scraped from the google sheet... The cells will likely be under "Object", "feed", and "entry"
  19. Find the element that you would like to show in html, highlight it and right click. Then copy the property path.
20. **JavaScript Value Setting**
  21. Replace "PROPERTYPATH" in "main.js" to the property path you copied in step 19

  YOU ARE DONE! Upate the page in your web browser, and it should now show the value that you selected from the google sheets json endpoint. Instead of showing "Not working yet". 
  
  Have Fun!
