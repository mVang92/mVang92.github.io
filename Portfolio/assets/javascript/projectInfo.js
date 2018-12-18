$(document).ready(function () {
    var projects = [
        {
            title: "Astronomy Trivia",
            projectImg: "assets/images/TriviaGame.png",
            alt: "Astronomy Trivia Game",
            target: ".triviaGame"
        },
        {
            title: "GifTastic",
            projectImg: "assets/images/pbjTime.gif",
            alt: "GifTastic",
            target: ".giftastic"
        },
        {
            title: "Friend Finder",
            projectImg: "assets/images/friendFinder.png",
            alt: "Friend Finder",
            target: ".friendFinder"
        },
        {
            title: "Eat-Da-Burger",
            projectImg: "assets/images/burger.png",
            alt: "Eat-Da-Burger",
            target: ".burger"
        },
        {
            title: "NYT Scrubber",
            projectImg: "../nyt-react-search/client/public/favicon.png",
            alt: "New York Times Scrubber",
            target: ".nytScrubber"
        },
        {
            title: "Crystal Clicky Game",
            projectImg: "../clicky/public/assets/images/crystalF.png",
            alt: "Crystal Clicky Game",
            target: ".clicky"
        }
    ];

    var groupProjects = [
        {
            title: "BWCA Advanture Tours",
            projectImg: "assets/images/bwatersLogo.png",
            alt: "BWCA Advanture Tours"
        }
    ];

    for (var i = 0; i < projects.length; i++) {
        var title = projects[i].title;
        var img = projects[i].projectImg;
        var alt = projects[i].alt;
        var target = projects[i].target;

        $("#project" + (1 + i)).html(title);
        $("#projectImg" + (1 + i)).attr("src", img);
        $("#projectImg" + (1 + i)).attr("alt", alt);
        $("#block" + (1 + i)).attr("data-target", target);
    };
});
