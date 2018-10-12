// $(function() { ... });
// is just jQuery short-hand for
// $(document).ready(function() { ... });
//  ensure that your function is called once 
// all the DOM elements of the page are ready to be used.


//Captures the search results after the end user presses (and releases)
//the ENTER button (keycode 13) & then storing them in the variable val
//This data is then sent to the server where the response will be handled,
//passed back to the client, & finally added to the document via another
//event handlers: $("#results").html(data)
$(function () {
    $("#search").on("keyup", function (e) {
        if (e.keyCode === 13) {
            //stores the value of what's inputted in search bar
            let parameters = { search: $(this).val() };
            $.get("/searching", parameters, function (data) {
                $("#results".html(data));
            });
        }
    });
});