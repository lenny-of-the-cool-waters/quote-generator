
$(document).ready(function() {
    //object containing parameters for ajax method
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://type.fit/api/quotes",
        "method": "GET"
    }

    //get quote from API and place it into appropriate field
    $.ajax(settings).done(function (response) {
        const data = JSON.parse(response);
        //randomIndex is used to fetch random quote
        let randomIndex = Math.floor(Math.random() * 1642);
        console.log(data[randomIndex]);
        $("#quote-text").text(data[randomIndex].text);
        $("#author").text(
            data[randomIndex].author == null ? 
                '-Anonymous' :
                `-${data[randomIndex].author}`
        );
    });

    //array of colors to choose from
    const colors = ['#A05BFD', '#777375', '#764A2C', '#F76915', '#72C075', 
                    '#072238', '#263E51', '#F5584C', '#16D298', '#EB2F6F', 
                    '#FB9901', '#37CB39', '#3D9DCE', '#5640D2', '#DF9326',
                    '#2B70A0'];

    //selecting random color
    let randomColorIndex = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomColorIndex];

    $('body').css({
        'background-color': randomColor,
        'color': randomColor
    });

    $('.button').css({ 'background-color': randomColor });

    $('#new-quote').click(function(e) {
        $.ajax(settings).done(function (response) {
            const data = JSON.parse(response);
            //randomIndex is used to fetch random quote
            let randomIndex = Math.floor(Math.random() * 1642);
            console.log(data[randomIndex]);
            $("#quote-text").text(data[randomIndex].text);
            $("#author").text(
                data[randomIndex].author == null ? 
                    '-Anonymous' :
                    `-${data[randomIndex].author}`
            );
        });

        let randomColorIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomColorIndex];

        $('body').css({
            'background-color': randomColor,
            'color': randomColor
        });
    
        $('.button').css({ 'background-color': randomColor });
    });
});