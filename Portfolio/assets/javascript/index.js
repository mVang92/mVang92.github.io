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
        $("#phrase").append(greetings[0]);
    } else if (greet == 2) {
        $("#phrase").append(greetings[1]);
    } else if (greet == 3) {
        $("#phrase").append(greetings[2]);
    } else if (greet == 4) {
        $("#phrase").append(greetings[3]);
    } else if (greet == 5) {
        $("#phrase").append(greetings[4]);
    } else if (greet == 6) {
        $("#phrase").append(greetings[5]);
    } else if (greet == 7) {
        $("#phrase").append(greetings[6]);
    };
    function randomGreetings() {
        var greet = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
        return greet;
    }
});