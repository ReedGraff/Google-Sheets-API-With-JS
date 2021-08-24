var try_num = 5
var delayInMilliseconds = 500;
function getVarFromUrl(url) { return url.match(/[?](.*)/)[1]; }

function fetch_data(url) {
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else if(response.status === 404) {
            return Promise.reject('error 404')
        } else {
            return Promise.reject('some other error: ' + response.status)
        }
    })
    .then(data => main(data))
    .catch(error => start());
}

function start() {
    setTimeout(function() {
        if (try_num >= 1) {
            try_num -= 1
            fetch_data('https://script.google.com/macros/s/AKfycbx_hqjJOoJMfukVKgatlPNsC1K38KYcN2PFT1eVzB4fuQMfMzcpHW38rokrv9g_GdEV/exec')
        }
    }, delayInMilliseconds)
}

function main(data) {
    console.log(data)
    var rows = data[0].data
    console.log(rows)
    for (var row_num in rows) {
        document.getElementById("table").innerHTML += "<tr id='" + row_num + "'></tr>"
        console.log(rows[row_num])
        for (var element_num in rows[row_num]) {
            console.log(rows[row_num][element_num])
            document.getElementById(row_num).innerHTML += "<th>" + rows[row_num][element_num] + "</th>"
        }
    }
}

window.onload = function() {
    start()
}
