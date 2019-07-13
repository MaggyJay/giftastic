var personList = [];
$(document).ready(function () {

    //passing customized value in as the functions argument(parameter)
    function callAPI(userInput) {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=PYBhZj8kiUoPbeAbyY26QynXWxzncbRX&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            //console.log(queryURL);
            //console.log('Youre searching by' + userInput);

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
        })
    }

    $('#submit-button').on('click', function mainStuff(event) {
        event.preventDefault();

        var userInput = $('#person').val().trim();
        personList.push(userInput);

        callAPI(userInput);

        renderButtons();   //console.log('Were logging the person' + person);
    })

    //previously i had this as click event on the person class but this was not working due it loading later in the webpage. what document does is say that anywhere on this html document anything with the person class is clicked to perform this action. 
    $(document).on('click', '.person', function () {

        console.log('Do you at least work?');
        console.log(this);
        callAPI(this.textContent);



    })

    function renderButtons() {

        $('#button-placer').empty();

        for (var y = 0; y < personList.length; y++) {
            var p = $('<button>');
            //p.addClass("person");
            p.addClass("person", personList[y])
            p.text(personList[y]);
            $('#button-placer').append(p);
        }


    }
});
