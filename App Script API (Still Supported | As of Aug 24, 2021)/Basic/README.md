# Google-Sheets-API-With-JS
This is a very simple guide that shows how to make a google sheets endpoint with JS. Once the endpoint is made, I show how to scrape the data from the endpoint and push it into an HTML file.

**INSTRUCTIONS**
**Google Sheets Script Endpoint**

  1. Open a Google sheets
  2. Create a new spreadsheet (or use a pre-existing one)
  3. Fill the spreadsheet with data (for example, use the file titled: "Data.xlsx", or this google sheet: https://docs.google.com/spreadsheets/d/1kkxXL23Y8jvfhBSCYTtkC6G2FldEsykl347fA-AQQV8/edit?usp=sharing)
  4. Once the spreadsheet has data, in the ribbon, press tools > Script Editor.
  5. Next paste the contents of script.js from this GitHub Repository into your script editor 
  6. Now change "SHEET NAME" to the actual name of the sheet you want to target... It is most likely going to be "Sheet1"
  7. Now save the current page.
  8. Next you want to deploy your sheet using "New Deployment" button.
  9. Choose web app, and allow anyone to access
  10. The next page should return a link. You can paste that link into your browser to view the json data.
  11. You now have a JSON endpoint through Google sheets! (I recommend using a Chrome extension to make the data look a lot more aesthetically pleasing (I use "JSON Formatter" by callumlocke.co.uk : https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en))

**JavaScript Scraping**
  1. Open the "index.js" file, and replace "SCRIPT API URL" with the JSON endpoint URL you made in step 11

**HTML Live Server**
  1. Open up your HTML file on a server... If you are using VScode, use the "Live Server" extension, and start the "index.html" file in a live server. If you do not have this extension, there are many other ways to do this, on is with python: 1. Open up the command line or terminal, 2. Type: "python -m http.server" and enter (it should return something like: "Serving HTTP on :: port 8000 (http://[::]:8000/) ...", 3. Go into a web browser and type: "localhost:8000" then find the "index.html" file
  2. Once a live server is up, open up the inspector (inspect element), and open the "console" tab.
  3. Click the drop-down on "object"
  4. This is all of the data that has been scraped from the google sheet... The cells will likely be under data[0].data
  5. As a tip, if you want to Find the element path that you would like to show in HTML, highlight it in the chrome console, and right-click. Then copy the property path.


YOU ARE DONE!
Have Fun!
