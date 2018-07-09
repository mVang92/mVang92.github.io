var name;
var email;
var message;

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
        if ($("#nameInput").val() == "" || $("#emailInput").val() == "" || $("#messageInput").val() == "") {
            $("#submitBtn").prop("disabled", true);
        } else {
            $("#submitBtn").removeAttr("disabled");
        };
    });

    // Submit button click function
    $("#submitBtn").on("click", function (evt) {
        evt.preventDefault();

        // Take the inputs from the user and assign them to variables
        name = $("#nameInput").val().trim();
        email = $("#emailInput").val().trim();
        message = $("#messageInput").val().trim();

        // Pushing the values to the database
        database.ref().push({
            name: name,
            email: email,
            message: message
        })
        reset();
    })

    // Reset button click function
    $("#resetBtn").on("click", function () {
        reset();
    })

    // Reset functiol
    function reset(){
        $("#submitBtn").prop("disabled", true);
        $("#nameInput").val("");
        $("#emailInput").val("");
        $("#messageInput").val("");
    }
})