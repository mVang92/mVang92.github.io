// Array of topics. Topis is TV Shows
var topics = [
    "The Office",
    "The Simpsons",
    "Family Guy",
    "How I Met Your Mother",
    "King of the Hill"
];

$(document).ready(function(){
    // Initially disables the submit box
    $("#submit").prop("disabled", true);
    // Enables the submit button only when there is text in the dialog box
    // Diables the button if text is not present
    $("#showLength").keyup(function(){
        if($("#showLength").val() == ""){
            $("#submit").prop("disabled", true);
        } else {
            $("#submit").removeAttr("disabled");
        }
    })

    // First function, appends a button to each element
    // inside the topics array
    function renderButtons(){
        $("#movieButton").empty();
        // Loop appends a button for each string in the array
        for (i = 0; i < topics.length; i++){
            var mButton = $("<button>")
            mButton.addClass("showGif");
            mButton.attr("data-name", topics[i]);
            mButton.text(topics[i]);
            $("#movieButton").append(" ", mButton);
        }
        generateGif();
    }

    // Submit button function
    $("#submit").on("click", function(evt){
        // console.log("we hit the click")
        evt.preventDefault();
        var show = $("#showLength").val().trim();
        topics.push(show);
        mButton = $("<button>")
        mButton.addClass("showGif");
        mButton.attr("data-name", topics[i]).text(topics[i]);
        $("#movieButton").append(" ", mButton);
        // console.log(topics);
        $("#showLength").val("");
        // Disables the submit button when clicked
        $(this).prop("disabled", true);
        renderButtons();
    })

    // This function contains our Ajax and API code
    function generateGif(){
        // When the user clicks on a button, the page should grab 10 static, 
        // non-animated gif images from the GIPHY API and place them on the page.
        $(".showGif").on("click", function(){
            // This variable stores the data-name attribute (just the name of the button)
            // of the image that has been clicked (hence "this")
            var show = $(this).attr("data-name");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                show + "&api_key=whIW4NL8ItI77ZD3d2Yomtb0G40WFANS&limit=10";
            
            // Ajax Start
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response)
                var results = response.data;
                var image;  
                // Empty out the old gifs
                $("#gifs").empty();

                // This loop generates the gifs from the API.
                // We are looking for 10 results, hence limit=10
                // at the end of the url for the variable queryURL.
                // There will be 10 results for each topic (or result in this case)
                for (n = 0; n < results.length; n++) {
                    var div = $("<div class=" + 'display' + ">");
                    // Make an image tag with jQuery and store it in a variable named image.
                    var image = $("<img class='gifImage'>");
                    // Set the image's src to results[n]'s fixed_height_still.url.
                    image.attr("src", results[n].images.fixed_height_still.url);
                    // Create an attribute data-state and set it to still
                    image.attr("data-state", "still");
                    // Create an attribute data-still and set it to the still image
                    image.attr("data-still", results[n].images.fixed_height_still.url);
                    // Create a final attribute data-animate, set it to the fixed_height
                    image.attr("data-animate", results[n].images.fixed_height.url);
                    div.append(image);
                    div.append("<p class=" + 'tag' + ">Rating: " + results[n].rating + "</p>");
                    // Prepend the showDiv variable to the element with an id of gifs.
                    $("#gifs").prepend(div);
                    $("#gifs").prepend(" ");
                }

                // Click on anything with the img tag, and this function
                // will change the states from still to animate and vice versa
                $("img").on("click", function(){
                    // console.log("img clicked")
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                })
            })
        })
    }
    renderButtons();
})