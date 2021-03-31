const colors = ['#A05BFD', '#777375', '#764A2C', '#F76915', '#72C075','#072238', '#263E51', '#F5584C', '#16D298', '#EB2F6F', '#FB9901', '#37CB39', '#3D9DCE', '#5640D2', '#DF9326', '#2B70A0'];

function randomColorPicker() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    $('body').animate({
        'background-color': randomColor,
        'color': randomColor
    }, 500);

    $('.button').animate({'background-color': randomColor}, 500);
}

function getQuote() {
    //get quote from API and place it into appropriate field
    $.getJSON("https://type.fit/api/quotes", function(data) {
        //randomIndex is used to fetch random quote
        let randomIndex = Math.floor(Math.random() * data.length);
        let quote = data[randomIndex].text;
        let author = 
            data[randomIndex].author == null ? 
                '-Anonymous' :
                `-${data[randomIndex].author}`;

        // $('#quote-text').css({'opacity': 0});
        // $('#author').css({'opacity': 0});

        $("#quote-text").text(quote);
        $("#author").text(author);
        $('.quote').fadeIn(500);
        $('a#tweet-quote').attr({'href': `https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=${quote} ${author}`});
        $('a#tumblr-quote').attr({'href': `https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=${author};content=${quote};canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button`});
    });
}

$(document).ready(function() {
    randomColorPicker();
    getQuote();    

    $('#new-quote').click(function(e) {
        $(".quote").fadeOut(400);

        randomColorPicker();
        getQuote();
    });
});
