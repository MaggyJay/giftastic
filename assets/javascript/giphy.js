var personList = [];
$(document).ready(function () {

    //passing customized value in as the functions argument(parameter)
    function callAPI(userInput) {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=PYBhZj8kiUoPbeAbyY26QynXWxzncbRX&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $('<div>');

                var rating = results[i].rating;
                var a = $('<p>').text('Rating: ' + rating);

                var personImage = $('<img>').addClass('gifImage');
                personImage.attr('src', results[i].images.fixed_height_still.url);
                personImage.attr('data-still', results[i].images.fixed_height_still.url);
                personImage.attr('data-animate', results[i].images.fixed_height.url);
                personImage.attr('data-state', 'still');


                //personImage.attr('src', results[i].images.fixed_height.url);
                gifDiv.prepend(a);
                gifDiv.prepend(personImage);

                $('#fav-people-container').prepend(gifDiv);

            }


        })
    }

    $(document).on('click', '.gifImage', function () {

        var state = $(this).attr('data-state')
        console.log(state);

        if (state === 'still') {
            $(this).attr('src', $(this).attr('data-animate'));
            $(this).attr('data-state', 'animate');

        }
        else {
            $(this).attr('src', $(this).attr('data-still'));
            $(this).attr('data-state', 'still');
        }

    });

    $('#submit-button').on('click', function (event) {
        event.preventDefault();

        var userInput = $('#person').val().trim();
        personList.push(userInput);

        callAPI(userInput);

        renderButtons();   //console.log('Were logging the person' + person);
        document.getElementById('person').value = '';
    })

    $(document).on('click', '.person', function () {

        callAPI(this.textContent);

    })


    function renderButtons() {
        


        $('#button-placer').empty();

        for (var y = 0; y < personList.length; y++) {
            var p = $('<button>');
            p.addClass("person", personList[y])
            p.text(personList[y]);
            $('#button-placer').append(p);
        }


    }
});
