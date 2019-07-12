var personList = [];
$(document).ready(function () {

    function displayGifs () {
        //we have to use this so it can apply this to whatever person button exists
        var queryURL = "https://api.giphy.com/v1/gifs/searchq=" + person + "&api_key=PYBhZj8kiUoPbeAbyY26QynXWxzncbRX"
        var person= $(this).attr("data-person");

        $.ajax({
            url:queryURL,
            method:"GET"

        }).then(function(response) {

            console.log(response);
            var results = response.data;

            for (var i=0; i < results.length; i++){
                var gifDiv= $('<div>');

                var rating= results[i].rating;
                var a = $('<p>').text('Rating: ' + rating);
            }
            //$('#fav-people-container').text
        })
    }

    $('#submit-button').on('click', function (response) {
        response.preventDefault();
        //console.log('this does as expected!');

       
        var userInput = $('#person').val().trim();
        personList.push(userInput);

        
        console.log(personList);
        renderButtons();


    })

    function renderButtons() {

        $('fav-people-container').empty();

        for (var y = 0; y < personList.length; y++) {
            var p = $('<button>');
            p.addClass("person");
            p.attr("data-person", personList[y])
            p.text(personList[y]);
            $('#fav-people-container').append(p);
        }
       

    }
 
});
