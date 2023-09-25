function getPostFromUrl(url) { return url.match(/[?](.*)/)[1]; }

var Post = getPostFromUrl(window.location.href)

fetch("https://spreadsheets.google.com/feeds/cells/10JoLUmML09fkz1ViFljMmk-pxZO5p785or6O4wTWiO0/1/public/full?alt=json")
    .then(response => response.json())
    .then(data => {
        // SET LETS
        let raw_cells = data.feed.entry
        // SET VARIABLES
        const Posts = []
        var len_post_attributes = 10
        var start_num_posts = 87
        var end_num_posts = Object.keys(raw_cells).length
        
        for (let step = start_num_posts; step < end_num_posts; step += len_post_attributes) {
            var Identifier = raw_cells[step].content.$t
            var Identifier = {
                Identifier: raw_cells[step].content.$t,
                Date: raw_cells[step+1].content.$t,
                Title: raw_cells[step+2].content.$t,
                SubTitle: raw_cells[step+3].content.$t,
                HexadecimalColor: raw_cells[step+4].content.$t,
                FrontPhoto: raw_cells[step+5].content.$t,
                Photo1: raw_cells[step+6].content.$t,
                Content: raw_cells[step+7].content.$t,
                Author: raw_cells[step+8].content.$t,
                AuthorEmail: raw_cells[step+9].content.$t
            };
            Posts.push(Identifier)
        }
        console.log(Posts)
        
        for (let num = 0; num < Posts.length; num++) {
            var Current_Identifier = Posts[num].Identifier
            console.log(Current_Identifier)
            
            if (Post == Current_Identifier) {
                document.querySelector("#Date").innerHTML = Posts[num].Date
                document.querySelector("#Title").innerHTML = Posts[num].Title
                document.querySelector("#SubTitle").innerHTML = Posts[num].SubTitle
                document.querySelector("#HexadecimalColor").innerHTML = Posts[num].HexadecimalColor
                document.querySelector("#FrontPhoto").innerHTML = Posts[num].FrontPhoto
                document.querySelector("#Photo1").innerHTML = Posts[num].Photo1
                document.querySelector("#Content").innerHTML = Posts[num].Content
                document.querySelector("#Author").innerHTML = Posts[num].Author
                document.querySelector("#AuthorEmail").innerHTML = Posts[num].AuthorEmail
            }
        }       
    })

