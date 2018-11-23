$(document).ready(function () {
    var greetings = [
        "make a difference.",
        "solve a problem.",
        "improve workflow.",
        "involve innovation.",
        "involve new concepts.",
        "help other people.",
        "demonstrate my skills."];
    var greet = randomGreetings();
    if (greet == 1) {
        $("#hello").append(greetings[0]);
    } else if (greet == 2) {
        $("#hello").append(greetings[1]);
    } else if (greet == 3) {
        $("#hello").append(greetings[2]);
    } else if (greet == 4) {
        $("#hello").append(greetings[3]);
    } else if (greet == 5) {
        $("#hello").append(greetings[4]);
    } else if (greet == 6) {
        $("#hello").append(greetings[5]);
    } else if (greet == 7) {
        $("#hello").append(greetings[6]);
    };
    function randomGreetings() {
        var greet = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
        return greet;
    }
});