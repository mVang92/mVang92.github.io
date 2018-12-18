$(document).ready(function () {
    // Individual projects information
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

    // Group project information
    var groupProjects = [
        {
            title: "BWCA Advanture Tours",
            projectImg: "assets/images/bwatersLogo.png",
            alt: "BWCA Advanture Tours",
            target: ".bwaters"
        }
    ];

    function createCard() {
        // Create the cards first for individual projects...
        for (var i = 0; i < projects.length; i++) {
            var iCounter = i + 1;
            var iCard = "<div id='target" + iCounter + "' class='col-md-4 cards' data-toggle='modal' data-target=''>"
            + "<div class='row'><div class='col-md-12'><div id='project" + iCounter + "' class='col-md-12 cardProjectName'></div></div></div>"
            + "<div class='row'><div class='col-md-12'><img id='projectImg" + iCounter + "' class='projectImg'></div></div></div>";
            $("#iProjects").append(iCard);
        };

        // ...then group projects
        for (var j = 0; j < groupProjects.length; j++) {
            var gCounter = j + 1;
            var gCard = "<div id='gTarget" + gCounter + "' class='col-md-4 cards' data-toggle='modal' data-target=''>"
            + "<div class='row'><div class='col-md-12'><div id='gProject" + gCounter + "' class='col-md-12 cardProjectName'></div></div></div>"
            + "<div class='row'><div class='col-md-12'><img id='gProjectImg" + gCounter + "' class='projectImg'></div></div></div>";
            $("#gProjects").append(gCard);
        };

        getIndividualProjects();
        getGroupProjects();
    };

    // For individual projects
    function getIndividualProjects() {
        for (var i = 0; i < projects.length; i++) {
            var title = projects[i].title;
            var img = projects[i].projectImg;
            var alt = projects[i].alt;
            var target = projects[i].target;
            $("#project" + (1 + i)).html(title);
            $("#projectImg" + (1 + i)).attr("src", img);
            $("#projectImg" + (1 + i)).attr("alt", alt);
            $("#target" + (1 + i)).attr("data-target", target);
        };
    };

    // For group projects
    function getGroupProjects() {
        for (var j = 0; j < groupProjects.length; j++) {
            var gTitle = groupProjects[j].title;
            var gImg = groupProjects[j].projectImg;
            var gAlt = groupProjects[j].alt;
            var gTarget = groupProjects[j].target;
            $("#gProject" + (1 + j)).html(gTitle);
            $("#gProjectImg" + (1 + j)).attr("src", gImg);
            $("#gProjectImg" + (1 + j)).attr("alt", gAlt);
            $("#gTarget" + (1 + j)).attr("data-target", gTarget);
        };
    };

    createCard();
});
