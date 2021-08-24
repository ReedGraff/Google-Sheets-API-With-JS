fetch("ENDPOINT")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        // SET VALUES OF INNER TEXT
        document.querySelector("#output").innerHTML = data.PROPERTYPATH
    })
