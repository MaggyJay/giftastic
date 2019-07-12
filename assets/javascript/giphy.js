var personList = [];
$(document).ready(function () {

    $('#submit-button').on('click', function (event) {
        event.preventDefault();
        //function displayGifs() {
        //we have to use this so it can apply this to whatever person button exists

        //console.log('Nicki is being clicked');

        var userInput = $('#person').val().trim();

        //var person = $(this).attr("data-person");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=PYBhZj8kiUoPbeAbyY26QynXWxzncbRX&limit=10";


        $.ajax({
            url: queryURL,
            method: "GET"

        })

            .then(function (response) {
                console.log(queryURL);
                console.log('Youre searching by' + userInput);

                console.log(response);
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div>');

                    var rating = results[i].rating;
                    var a = $('<p>').text('Rating: ' + rating);

                    var personImage = $('<img>');

                    personImage.attr('src', results[i].images.fixed_height.url);
                    gifDiv.prepend(a);
                    gifDiv.prepend(personImage);

                    $('#fav-people-container').prepend(gifDiv);
                }

                console.log('this does as expected!');
                console.log(response);

               // var userInput = $('#person').val().trim();
                personList.push(userInput);


                console.log(personList);
                renderButtons();   //console.log('Were logging the person' + person);
            })


        // console.log(response);
    })

    // $('#submit-button').on('click', function (response) {
    //     response.preventDefault();
    //     console.log('this does as expected!');
    //     console.log(response);

    //     var userInput = $('#person').val().trim();
    //     personList.push(userInput);


    //     console.log(personList);
    //     //renderButtons();


    // })

    function renderButtons() {

        $('#button-placer').empty();

        for (var y = 0; y < personList.length; y++) {
            var p = $('<button>');
            p.addClass("person");
            p.attr("data-person", personList[y])
            p.text(personList[y]);
            $('#button-placer').append(p);
        }


    }

});
