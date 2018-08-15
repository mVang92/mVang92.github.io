// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
    $("#submit").prop("disabled", true);
    // Enables the submit button only when there is text in the dialog box
    // Diables the button if text is not present
    $("#newBurger").keyup(function () {
        if ($("#newBurger").val() == "") {
            $("#submit").prop("disabled", true);
        } else {
            $("#submit").removeAttr("disabled");
        };
    });
});

$(function () {
    $(".devourBurger").click(function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var objColVals = {
            devoured: true
        };
        console.log(id);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: objColVals
        }).then(function () {
            console.log("Devoured burger number: ", id);
            location.reload();
        }
        );
    });

    $(".createForm").submit(function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger: ", newBurger.burger_name);
            $("#newBurger").val("");
            $("#submit").prop("disabled", true);
            location.reload();
        }
        );
    });

    $(".deleteBurger").click(function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Deleted burger: ", id);
                location.reload();
            }
        );
    });
});