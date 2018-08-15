$(document).ready(function () {
    $(".modal").modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: "4%", // Starting top style attribute
        endingTop: "10%" // Ending top style attribute
    });
});

// Activate submit button
$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    // Gather user inputs
    var userInput = {
        name: $("#name").val().trim(),
        photo: $("#image").val().trim(),
        scores: [
            $("#q1").val().trim(),
            $("#q2").val().trim(),
            $("#q3").val().trim(),
            $("#q4").val().trim(),
            $("#q5").val().trim(),
            $("#q6").val().trim(),
            $("#q7").val().trim(),
            $("#q8").val().trim(),
            $("#q9").val().trim(),
            $("#q10").val().trim()
        ]
    };

    // Post user inputs to friends list
    $.post("/api/friends", userInput)
        .done(function (data) {

            // Set the name and image values of friend match
            $("#userMatch").html(data.matchName);
            $("#userMatchImage").attr("src", data.matchImage);

            // Pop open the modal dialog
            $("#modal1").modal("open");
        });
});