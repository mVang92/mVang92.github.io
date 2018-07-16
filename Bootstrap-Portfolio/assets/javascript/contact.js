$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAMDmuZhf-oPcfOPoS9jRWyiDjrQ2mZr8s",
        authDomain: "portfolio-8415c.firebaseapp.com",
        databaseURL: "https://portfolio-8415c.firebaseio.com",
        projectId: "portfolio-8415c",
        storageBucket: "portfolio-8415c.appspot.com",
        messagingSenderId: "96566099123"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    // Initially set the submit button to disable
    $("#submitBtn").prop("disabled", true);

    // Enables the submit button only when there is text in the dialog box
    // Disables the button if text is not present
    $(".input").keyup(function () {
        if ($("#commentInput").val() == "") {
            $("#submitBtn").prop("disabled", true);
        } else {
            $("#submitBtn").removeAttr("disabled");
        };
    });

    // Submit button click function
    $("#submitBtn").on("click", function (evt) {
        evt.preventDefault();

        // Take the inputs from the user and assign them to variables
        var comment = $("#commentInput").val().trim();

        // Pushing the values to the database
        database.ref().push({
            comment: comment
        })
        reset();
    })

    // Reset button click function
    $("#resetBtn").on("click", function () {
        reset();
    })

    // Reset function
    function reset() {
        $("#submitBtn").prop("disabled", true);
        $("#commentInput").val("");
    }
})

// Modal content
var modal = document.getElementById("modalBox");

// Get the button that opens the modal
var submitBtn = document.getElementById("submitBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
submitBtn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the user clicks the close button,
// remove the modal and disable the sumbit button
$("#close").on("click", function () {
    modal.style.display = "none";
    $("#submitBtn").prop("disabled", true);
})

