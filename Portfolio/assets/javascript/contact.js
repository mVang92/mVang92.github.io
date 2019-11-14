$(document).ready(() => {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyAMDmuZhf-oPcfOPoS9jRWyiDjrQ2mZr8s",
        authDomain: "portfolio-8415c.firebaseapp.com",
        databaseURL: "https://portfolio-8415c.firebaseio.com",
        projectId: "portfolio-8415c",
        storageBucket: "portfolio-8415c.appspot.com",
        messagingSenderId: "96566099123"
    };
    firebase.initializeApp(config);

    const database = firebase.database();

    // Initially set the submit button to disable
    $("#submitButton").prop("disabled", true);

    // Enables the submit button only when there is text in the dialog box
    // Disables the button if text is not present
    $(".input").keyup(() => {
        if ($("#commentInput").val() == "") {
            $("#submitButton").prop("disabled", true);
        } else {
            $("#submitButton").removeAttr("disabled");
        };
    });

    // Submit button click function
    $("#submitButton").on("click", e => {
        e.preventDefault();

        // Take the inputs from the user and assign them to variables
        const comment = $("#commentInput").val().trim();

        // Pushing the values to the database
        database.ref().push({
            comment: comment
        })
        reset();
    });

    // Reset button click function
    $("#resetButton").on("click", () => {
        reset();
    });

    /**
     * Reset the comment input field and disable the submit button
     */
    const reset = () => {
        $("#submitButton").prop("disabled", true);
        $("#commentInput").val("");
    };
});

// Modal content
const modal = document.getElementById("modalBox");

// Get the button that opens the modal
const submitBtn = document.getElementById("submitButton");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
submitBtn.onclick = () => {
    modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = "none";
    };
};

// When the user clicks the close button,
// remove the modal and disable the sumbit button
$("#close").on("click", () => {
    modal.style.display = "none";
    $("#submitButton").prop("disabled", true);
});
