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
            fetch_data('SCRIPT API URL')
        }
    }, delayInMilliseconds)
}

function main(data) {
    console.log(data)
    var rows = data[0].data
    for (var row_num in rows) {
        document.getElementById("table").innerHTML += "<tr id='" + row_num + "'></tr>"
        for (var element_num in rows[row_num]) {
            document.getElementById(row_num).innerHTML += "<th>" + rows[row_num][element_num] + "</th>"
        }
    }
}

window.onload = function() {
    start()
}
