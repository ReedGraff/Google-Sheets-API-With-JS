// template.html?Quarantine_Kids

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

            var Date = Posts[num].Date
            var Title = Posts[num].Title
            var SubTitle = Posts[num].SubTitle
            var HexadecimalColor = Posts[num].HexadecimalColor
            var FrontPhoto = Posts[num].FrontPhoto
            var Photo1 = Posts[num].Photo1
            var Content = Posts[num].Content
            var Author = Posts[num].Author
            var AuthorEmail = Posts[num].AuthorEmail

            var added_post = "<div style='background-color:#" + HexadecimalColor + ";'>" + Title + "<br>" + SubTitle + "<br><strong>" + Content + "</strong></div>"

            document.querySelector("#posts").innerHTML += added_post
        }       
    })
