$(document).ready(function () {

    /**
     * Generates a random phrase in the headline
     */
    const generateRandomPhrase = () => {
        $("#clickOnProjectButtons").append("<label>Click on the buttons below to view some of my most significant individual and group projects.</label>");
        
        const phrases = [
            "make a difference.",
            "solve a problem.",
            "improve workflow.",
            "involve innovation.",
            "involve new concepts.",
            "help other people.",
            "involve critical thinking.",
            "demonstrate my skills."
        ];

        const phrasesArrayLength = phrases.length;
        let randomPhrase = Math.floor(Math.random() * (phrasesArrayLength - 1 + 1)) + 1;
        
        switch (randomPhrase) {
            case 1: $("#randomPhrase").append(phrases[0]);
                break;
            case 2: $("#randomPhrase").append(phrases[1]);
                break;
            case 3: $("#randomPhrase").append(phrases[2]);
                break;
            case 4: $("#randomPhrase").append(phrases[3]);
                break;
            case 5: $("#randomPhrase").append(phrases[4]);
                break;
            case 6: $("#randomPhrase").append(phrases[5]);
                break;
            case 7: $("#randomPhrase").append(phrases[6]);
                break;
            case 8: $("#randomPhrase").append(phrases[7]);
        }
    };

    /**
     * Change the background to reflect the northern hemisphere seasons
     */
    const getBackgroundImageForCurrentSeason = () => {
        let date = new Date();
        let month = date.getMonth();
        
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

    /**
     * Enables smooth scrolling when navigating back to top of page
     */
    const scrollSpy = () => {
        $("body").scrollspy({ target: ".navbar", offset: 50 });
        $("a").on("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                $("html, body").animate({
                    scrollTop: $(hash).offset().top
                }, 500, function () {
                    window.location.hash = hash;
                });
            };
        });
    };

    generateRandomPhrase();
    getBackgroundImageForCurrentSeason();
    scrollSpy();
});
