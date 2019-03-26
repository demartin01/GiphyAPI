


var topics = ["salsa dancing", "tap dancing", "flamenco dancing", "paso doble dancing", "hip hop dancing", "ballet dancing"];

displayButtons();

function displayButtons() {
    $(".buttons").empty();

    for (var i = 0; i < topics.length; i++) {
        var btn = `<button class="renderBtn"> ${topics[i]} </button>`

        $(".buttons").append(btn);

    }
}

//event listner for buttons
$(document).on("click", ".button", function () {
    var dance = $(this).attr("data-dance");
    //Query Url that will search giphy
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + dance + "&api_key=Zt5bq1Jj1g5t5azZGfuSFcRZnX3dsuIz&limit=10";

    //Ajax Get Request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API

        .then(function (response) {
            // Storing an array of results in the results variable

            var results = response.data;

            console.log(results);

            // Looping for result item
            for (var i = 0; i < results.length; i++) {

                // rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                    // Creating a div for the gif
                    var gifDiv = $("<div>");

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Creating an image tag
                    var danceImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    danceImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and danceImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(danceImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);
                }
            }



        })
});
