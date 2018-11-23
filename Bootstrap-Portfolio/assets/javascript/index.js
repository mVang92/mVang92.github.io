$(document).ready(function () {
    var greet = "";
    var greetings = ["Hello!", "Welcome!", "Hi!"];
    greet = randomGreetings();
    if (greet == 1) {
        $("#hello").html(greetings[0]);
    } else if (greet == 2) {
        $("#hello").html(greetings[1]);
    } else if (greet == 3) {
        $("#hello").html(greetings[2]);
    };
    function randomGreetings() {
        var greet = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        return greet;
    }
});