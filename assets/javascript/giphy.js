var personList = [];
$(document).ready(function () {


    $('#submit-button').on('click', function (response) {
        response.preventDefault();
        console.log('this does as expected!');

       
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
           // $('#fav-people-container').append(p);
        }
       

    }
 
});
