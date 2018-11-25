$(document).ready(function () {
    // Gretting phrases
    var greetings = [
        "make a difference.",
        "solve a problem.",
        "improve workflow.",
        "involve innovation.",
        "involve new concepts.",
        "help other people.",
        "demonstrate my skills."];

    var greet = Math.floor(Math.random() * (7 - 1 + 1)) + 1;

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

    function scrollSpy() {
        // Add scrollspy to <body>
        $('body').scrollspy({ target: ".navbar", offset: 50 });
        // Add smooth scrolling on all links inside the navbar
        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                event.preventDefault();
                // Store hash
                var hash = this.hash;
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 500, function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            };
        });
    };

    // Change the background image depending on the season based on northern hemi months
    function getBgSeasons() {
        var date = new Date();
        var month = date.getMonth();
        // console.log(month)
        if (month >= 0 && month < 2) {
            document.body.style.backgroundImage = "url('assets/images/winter.jpg')";
        } else if (month >= 2 && month < 5) {
            document.body.style.backgroundImage = "url('assets/images/spring.jpg')";
        } else if (month >= 5 && month < 8) {
            document.body.style.backgroundImage = "url('assets/images/summer.jpg')";
        } else if (month >= 8 && month < 11) {
            document.body.style.backgroundImage = "url('assets/images/fall.jpg')";
        } else {
            document.body.style.backgroundImage = "url('assets/images/winter.jpg')";
        };
    };

    getBgSeasons();
    scrollSpy();
});
