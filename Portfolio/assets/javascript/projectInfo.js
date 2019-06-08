$(document).ready(function () {
    const gitHubImage = 'assets/images/github.png';
    
    // Individual projects information
    const projects = [
        {
            title: "Astronomy Trivia",
            projectImg: "assets/images/TriviaGame.png",
            alt: "Astronomy Trivia Game",
            target: ".triviaGame",
            class: "triviaGame",
            hrefLive: "https://mvang92.github.io/TriviaGame-/",
            hrefRepo: "https://github.com/mVang92/mVang92.github.io/tree/master/TriviaGame-"
        },
        {
            title: "GifTastic",
            projectImg: "assets/images/pbjTime.gif",
            alt: "GifTastic",
            target: ".gifTastic",
            class: "gifTastic",
            hrefLive: "https://mvang92.github.io/GifTastic/",
            hrefRepo: "https://github.com/mVang92/mVang92.github.io/tree/master/GifTastic"
        },
        {
            title: "Friend Finder",
            projectImg: "assets/images/friendFinder.png",
            alt: "Friend Finder",
            target: ".friendFinder",
            class: "friendFinder",
            hrefLive: "https://friend-finder-mvang92.herokuapp.com/",
            hrefRepo: "https://github.com/mVang92/mVang92.github.io/tree/master/Friend-Finder"
        },
        {
            title: "Eat-Da-Burger",
            projectImg: "assets/images/burger.png",
            alt: "Eat-Da-Burger",
            target: ".burger",
            class: "burger",
            hrefLive: "https://burgers-app-mvang92.herokuapp.com/",
            hrefRepo: "https://github.com/mVang92/mVang92.github.io/tree/master/Burger"
        },
        {
            title: "NYT Scrubber",
            projectImg: "../nyt-react-search/client/public/favicon.png",
            alt: "New York Times Scrubber",
            target: ".nytScrubber",
            class: "nytScrubber",
            hrefLive: "https://nty-scrubber-mvang92.herokuapp.com/",
            hrefRepo: "https://github.com/mVang92/nyt-react-search"
        },
        {
            title: "Crystal Clicky Game",
            projectImg: "../clicky/public/assets/images/crystalG.png",
            alt: "Crystal Clicky Game",
            target: ".clicky",
            class: "clicky",
            hrefLive: "https://mvang92.github.io/clickylive/",
            hrefRepo: "https://github.com/mVang92/clickylive"
        }
    ];

    // Group project information
    const groupProjects = [
        {
            title: "BWCA",
            projectImg: "assets/images/bwatersLogo.png",
            alt: "BWCA Advanture Tours",
            target: ".bwaters",
            class: "bwaters",
            hrefLive: "https://code-camp-p2.herokuapp.com/",
            hrefRepo: "https://github.com/mVang92/CodeCampProject2"
        },
        {
            title: "menuNOW",
            projectImg: "assets/images/menuNow.png",
            alt: "menuNOW",
            target: ".menuNow",
            class: "menuNow",
            hrefLive: "https://menunow.herokuapp.com/",
            hrefRepo: "https://github.com/mVang92/menuNow"
        },
    ];

    const createCard = () => {
        // Create the cards first for individual projects...
        for (let i = 0; i < projects.length; i++) {
            let iCounter = i + 1;
            const iCard = "<div id='target" + iCounter + "' class='col-md-4 cards' data-toggle='modal' data-target=''>"
                + "<div class='row'><div class='col-md-12'><div id='project" + iCounter + "' class='col-md-12 cardProjectName'></div></div></div>"
                + "<div class='row'><div class='col-md-12'><img id='projectImg" + iCounter + "' class='projectImg'></div></div></div>";
            $("#iProjects").append(iCard);
        };

        // ...then group projects
        for (let j = 0; j < groupProjects.length; j++) {
            let gCounter = j + 1;
            const gCard = "<div id='gTarget" + gCounter + "' class='col-md-4 cards' data-toggle='modal' data-target=''>"
                + "<div class='row'><div class='col-md-12'><div id='gProject" + gCounter + "' class='col-md-12 cardProjectName'></div></div></div>"
                + "<div class='row'><div class='col-md-12'><img id='gProjectImg" + gCounter + "' class='projectImg'></div></div></div>";
            $("#gProjects").append(gCard);
        };

        // With cards created, call the functions responsible for
        // creating the modals for each project
        createIndividualProjectModal();
        createGroupProjectModal();
    };

    const createIndividualProjectModal = () => {
        for (let i = 0; i < projects.length; i++) {
            let title = projects[i].title;
            let modalClassTarget = projects[i].class;
            let img = projects[i].projectImg;
            let alt = projects[i].alt;
            let hrefLive = projects[i].hrefLive;
            let hrefRepo = projects[i].hrefRepo;
            const iModal = generateModal(title, modalClassTarget, img, alt, hrefLive, hrefRepo);
            $("#createModals").append(iModal);
        };

        // After creating the modals, get the projects
        getIndividualProjects();
    };

    const createGroupProjectModal = () => {
        for (let j = 0; j < groupProjects.length; j++) {
            let title = groupProjects[j].title;
            let modalClassTarget = groupProjects[j].class;
            let img = groupProjects[j].projectImg;
            let alt = groupProjects[j].alt;
            let hrefLive = groupProjects[j].hrefLive;
            let hrefRepo = groupProjects[j].hrefRepo;
            const gModal = generateModal(title, modalClassTarget, img, alt, hrefLive, hrefRepo);
            $("#createModals").append(gModal);
        };

        // After creating the modals, get the projects
        getGroupProjects();
    };

    // For individual projects
    const getIndividualProjects = () => {
        for (let i = 0; i < projects.length; i++) {
            let id = i + 1;
            let title = projects[i].title;
            let img = projects[i].projectImg;
            let alt = projects[i].alt;
            let target = projects[i].target;
            $("#project" + id).html(title);
            $("#projectImg" + id).attr("src", img);
            $("#projectImg" + id).attr("alt", alt);
            $("#target" + id).attr("data-target", target);
        };
    };

    // For group projects
    const getGroupProjects = () => {
        for (let j = 0; j < groupProjects.length; j++) {
            let id = j + 1;
            let gTitle = groupProjects[j].title;
            let gImg = groupProjects[j].projectImg;
            let gAlt = groupProjects[j].alt;
            let gTarget = groupProjects[j].target;
            $("#gProject" + id).html(gTitle);
            $("#gProjectImg" + id).attr("src", gImg);
            $("#gProjectImg" + id).attr("alt", gAlt);
            $("#gTarget" + id).attr("data-target", gTarget);
        };
    };

    // Create modals for each project while taking in their respected parameters
    const generateModal = (title, modalClassTarget, img, alt, hrefLive, hrefRepo) => {
        const modal = "<div class='modal fade " + modalClassTarget + "' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel' aria-hidden='true'>"
            + "<div class='modal-dialog modal-lg'><div class='modal-content draggable'><div class='projects'><div class='row'><div class='col-lg-4'>"
            + "<img class='modalProjectImg' src='" + img + "' alt='" + alt + "'></div><div class='col-lg-8'><p class='projectName'><label>" + title + "</label></p>"
            + "<label><p id='" + modalClassTarget + "' class='projectDesc'></p></label></div></div><div class='row'><div class='col-md-6 btnBlock'>"
            + "<a title='" + title + " Live App' href='" + hrefLive + "' target='_blank'><button class='btn btn-default projectBtn'>"
            + "<img class='projectImg' src='" + img + "' style='width:25px'> View Project </button></a></div><div class='col-md-6 btnBlock'>"
            + "<a title='" + title + " Github Repository' href='" + hrefRepo + "' target='_blank'><button class='btn btn-default githubBtn'>"
            + "<img class='projectImg' src='" + gitHubImage + "' style='width:25px'> Github Repo </button></a></div></div></div></div></div></div>";
        return modal;
    };

    // Create the cards for the projects
    createCard();
});

// Draggable UI function
$(() => {
    $(".draggable").draggable();
});