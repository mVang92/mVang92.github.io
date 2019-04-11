$(document).ready(function () {

    // Greeting phases
    const greetings = () => {
        $("#clickMe").append("<label>Click on the buttons below to view some of my most significant "
            + "individual and group projects.</label>");
        const greetings = [
            "make a difference.",
            "solve a problem.",
            "improve workflow.",
            "involve innovation.",
            "involve new concepts.",
            "help other people.",
            "involve critical thinking.",
            "demonstrate my skills."
        ];
        const greetingsLength = greetings.length;
        let greetPhrase = Math.floor(Math.random() * (greetingsLength - 1 + 1)) + 1;
        switch (greetPhrase) {
            case 1: $("#phrase").append(greetings[0]);
                break;
            case 2: $("#phrase").append(greetings[1]);
                break;
            case 3: $("#phrase").append(greetings[2]);
                break;
            case 4: $("#phrase").append(greetings[3]);
                break;
            case 5: $("#phrase").append(greetings[4]);
                break;
            case 6: $("#phrase").append(greetings[5]);
                break;
            case 7: $("#phrase").append(greetings[6]);
                break;
            case 8: $("#phrase").append(greetings[7]);
        }
    };

    // Change the background image depending on the season based on northern hemi months
    const getBgSeasons = () => {
        let date = new Date();
        let month = date.getMonth();
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

    // Enable smooth scrolling
    const scrollSpy = () => {
        // Add scrollspy to <body>
        $("body").scrollspy({ target: ".navbar", offset: 50 });
        // Add smooth scrolling on all links inside the navbar
        $("a").on("click", function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                event.preventDefault();
                // Store hash
                const hash = this.hash;
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $("html, body").animate({
                    scrollTop: $(hash).offset().top
                }, 500, function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            };
        });
    };

    greetings();
    getBgSeasons();
    scrollSpy();
});
