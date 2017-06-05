// array of original buttons

var natureArr = ["beach", "jungle", "mountain", "ocean", "volcano",
    "waves", "desert", "river", "woodlands"
];
var animate = 0;
// ready the doc
$(document).ready(function() {
	console.log("READY")
            // grabs input
            var nature = $("#nature").val().trim()
                //function that creates the buttons from list and input.
            function buttonGen() {
                for (var i = 0; i < natureArr.length; i++) {
                    var newButton = $("<button>");
                    newButton.attr("data-name", natureArr[i]);
                    newButton.text(topics[i]);
                    $("#natureButtons").append(newButton);
                }
            }
            //function for getting the gifs on the page
            function gifPush() {
                // query url w api key and limit
                var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
                    input + "&limit=10&api_key=dc6zaTOxFJmzC";

                var input = $(this).attr("data-name");
                //ajax call
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).done(function(response) {

                    //console logging response
                    console.log(response);

                    for (var i = 0; i < natureArr.length; i++) {

                        var rating = results.data[i].rating;

                        var natureDiv = $("<div class = nature>");

                        var p = $("<p>").text("Rating: " + rating);

                        var natureImage = $("<img>");

                        natureImage.attr("src", results[i].images.fixed_height.url);

                        natureDiv.append(p);
                        natureDiv.append(natureImage);

                        $("#natures").prepend(natureDiv);
                  
                
                    }
                });
            };
			});

		//tip for the still gif
            //     $(".gif").on("click", function() {
            //         // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            //         var state = $(this).attr("data-state");
            //         // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            //         // Then, set the image's data-state to animate
            //         // Else set src to the data-still value
            //         if (state === "still") {
            //             $(this).attr("src", $(this).attr("data-animate"));
            //             $(this).attr("data-state", "animate");
            //         } else {
            //             $(this).attr("src", $(this).attr("data-still"));
            //             $(this).attr("data-state", "still");
            //         }
            //     });
            // });