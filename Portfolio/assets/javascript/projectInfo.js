$(document).ready(function () {
    const gitHubLogo = "assets/images/github.png";

    const projects = [
        {
            title: "Astronomy Trivia",
            projectImage: "assets/images/TriviaGame.png",
            alternative: "Astronomy Trivia Game",
            target: ".triviaGame",
            id: "triviaGame",
            class: "triviaGame",
            hrefLiveApplication: "https://mvang92.github.io/TriviaGame-/",
            hrefGitHubRepository: "https://github.com/mVang92/mVang92.github.io/tree/master/TriviaGame-"
        },
        {
            title: "GifTastic",
            projectImage: "assets/images/pbjTime.gif",
            alternative: "GifTastic",
            target: ".gifTastic",
            id: "gifTastic",
            class: "gifTastic",
            hrefLiveApplication: "https://mvang92.github.io/GifTastic/",
            hrefGitHubRepository: "https://github.com/mVang92/mVang92.github.io/tree/master/GifTastic"
        },
        {
            title: "Friend Finder",
            projectImage: "assets/images/friendFinder.png",
            alternative: "Friend Finder",
            target: ".friendFinder",
            id: "friendFinder",
            class: "friendFinder",
            hrefLiveApplication: "https://friend-finder-mvang92.herokuapp.com/",
            hrefGitHubRepository: "https://github.com/mVang92/mVang92.github.io/tree/master/Friend-Finder"
        },
        {
            title: "Eat-Da-Burger",
            projectImage: "assets/images/burger.png",
            alternative: "Eat-Da-Burger",
            target: ".burger",
            id: "burger",
            class: "burger",
            hrefLiveApplication: "https://burgers-app-mvang92.herokuapp.com/",
            hrefGitHubRepository: "https://github.com/mVang92/mVang92.github.io/tree/master/Burger"
        },
        {
            title: "NYT Scrubber",
            projectImage: "../nyt-react-search/client/public/favicon.png",
            alternative: "New York Times Scrubber",
            target: ".nytScrubber",
            id: "nytScrubber",
            class: "nytScrubber",
            hrefLiveApplication: "https://nty-scrubber-mvang92.herokuapp.com/",
            hrefGitHubRepository: "https://github.com/mVang92/nyt-react-search"
        },
        {
            title: "Crystal Clicky Game",
            projectImage: "../clicky/public/assets/images/crystalG.png",
            alternative: "Crystal Clicky Game",
            target: ".clicky",
            id: "clicky",
            class: "clicky",
            hrefLiveApplication: "https://mvang92.github.io/clickylive/",
            hrefGitHubRepository: "https://github.com/mVang92/clickylive"
        },
        {
            title: "EngineRev",
            projectImage: "assets/images/engineRevLogo.png",
            alternative: "EngineRev",
            target: ".engineRev",
            id: "engineRev",
            class: "engineRev",
            hrefLiveApplication: "https://engineRev.herokuapp.com/",
            hrefGitHubRepository: "https://github.com/mVang92/EngineRev"
        }
    ];

    const groupProjects = [
        {
            title: "BWCA",
            projectImage: "assets/images/bwatersLogo.png",
            alternative: "BWCA Advanture Tours",
            target: ".bwaters",
            id: "bwaters",
            class: "bwaters",
            hrefLiveApplication: "https://code-camp-p2.herokuapp.com/",
            hrefGitHubRepository: "https://github.com/mVang92/CodeCampProject2"
        },
        {
            title: "menuNOW",
            projectImage: "assets/images/menuNow.png",
            alternative: "menuNOW",
            target: ".menuNow",
            id: "menuNow",
            class: "menuNow",
            hrefLiveApplication: "https://menunow.herokuapp.com/",
            hrefGitHubRepository: "https://github.com/mVang92/menuNow"
        },
        {
            title: "AfterClass",
            projectImage: "assets/images/afterClassLogo.png",
            alternative: "Life After Class",
            target: ".afterClass",
            id: "afterClass",
            class: "afterClass",
            hrefLiveApplication: "https://lifeafterclass.herokuapp.com/",
            hrefGitHubRepository: "https://github.com/Trie0037/Afterclass"
        }
    ];

    /**
     * Create a card for individual and group projects
     */
    const createCard = () => {
        for (let counter = 0; counter < projects.length; counter++) {
            const projectId = projects[counter].id;
            const individualProjectCard = "<div id='" + projectId + "Card' class='col-md-4 cards' data-toggle='modal' data-target=''>"
                + "<div class='row'><div id='" + projectId + "Title' class='col-md-12 cardProjectName'></div></div>"
                + "<div class='row'><div class='col-md-12'><img id='" + projectId + "Image' class='projectImg'></div></div></div>";
            $("#individualProjectCardsRow").append(individualProjectCard);
        };

        for (let counter = 0; counter < groupProjects.length; counter++) {
            const projectId = groupProjects[counter].id;
            const groupProjectCard = "<div id='" + projectId + "Card' class='col-md-4 cards' data-toggle='modal' data-target=''>"
                + "<div class='row'><div id='" + projectId + "Title' class='col-md-12 cardProjectName'></div></div>"
                + "<div class='row'><div class='col-md-12'><img id='" + projectId + "Image' class='projectImg'></div></div></div>";
            $("#groupProjectCardsRow").append(groupProjectCard);
        };

        createIndividualProjectModal();
        createGroupProjectModal();
    };

    /**
     * Create a modal for each individual projects
     */
    const createIndividualProjectModal = () => {
        for (let counter = 0; counter < projects.length; counter++) {
            let title = projects[counter].title;
            let modalClassTarget = projects[counter].class;
            let projectImage = projects[counter].projectImage;
            let alternative = projects[counter].alternative;
            let hrefLiveApplication = projects[counter].hrefLiveApplication;
            let hrefGitHubRepository = projects[counter].hrefGitHubRepository;
            const individualProjectModal = generateModal(title, modalClassTarget, projectImage, alternative, hrefLiveApplication, hrefGitHubRepository);
            $("#projectModals").append(individualProjectModal);
        };

        createIndividualProjectContents();
    };

    /**
     * Create a modal for each group projects
     */
    const createGroupProjectModal = () => {
        for (let counter = 0; counter < groupProjects.length; counter++) {
            let title = groupProjects[counter].title;
            let modalClassTarget = groupProjects[counter].class;
            let projectImage = groupProjects[counter].projectImage;
            let alternative = groupProjects[counter].alternative;
            let hrefLiveApplication = groupProjects[counter].hrefLiveApplication;
            let hrefGitHubRepository = groupProjects[counter].hrefGitHubRepository;
            const groupProjectModal = generateModal(title, modalClassTarget, projectImage, alternative, hrefLiveApplication, hrefGitHubRepository);
            $("#projectModals").append(groupProjectModal);
        };

        createGroupProjectContents();
    };

    /**
     * Create unique contents inside of each card for an individual project
     */
    const createIndividualProjectContents = () => {
        for (let counter = 0; counter < projects.length; counter++) {
            let id = projects[counter].id;
            let individualProjectTitle = projects[counter].title;
            let individualProjectImage = projects[counter].projectImage;
            let individualProjectAlternative = projects[counter].alternative;
            let individualProjectTarget = projects[counter].target;
            $("#" + id + "Title").html(individualProjectTitle);
            $("#" + id + "Image").attr("src", individualProjectImage);
            $("#" + id + "Image").attr("alt", individualProjectAlternative);
            $("#" + id + "Card").attr("data-target", individualProjectTarget);
        };
    };

    /**
     * Create unique contents inside of each card for a group project
     */
    const createGroupProjectContents = () => {
        for (let counter = 0; counter < groupProjects.length; counter++) {
            let id = groupProjects[counter].id;
            let groupProjectTitle = groupProjects[counter].title;
            let groupProjectImage = groupProjects[counter].projectImage;
            let groupProjectAlternative = groupProjects[counter].alternative;
            let groupProjectTarget = groupProjects[counter].target;
            $("#" + id + "Title").html(groupProjectTitle);
            $("#" + id + "Image").attr("src", groupProjectImage);
            $("#" + id + "Image").attr("alt", groupProjectAlternative);
            $("#" + id + "Card").attr("data-target", groupProjectTarget);
        };
    };

    /**
    * Generate a modal for an indivudual project or group project
    * 
    * @param  {String} title                The title of the current project
    * @param  {String} modalClassTarget     The target name of the current project
    * @param  {String} image                The image for the current project
    * @param  {String} alternative          The alternative name for the current project
    * @param  {String} hrefLiveApplication  The project link to the live application
    * @param  {String} hrefGitHubRepository The project link to the GitHub repository
    */
    const generateModal = (title, modalClassTarget, image, alternative, hrefLiveApplication, hrefGitHubRepository) => {
        const modal = "<div class='modal fade " + modalClassTarget + "' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel' aria-hidden='true'>"
            + "<div class='modal-dialog modal-lg'><div class='modal-content draggable'><div class='projects'><div class='row'><div class='col-lg-4'>"
            + "<img class='modalProjectImg' src='" + image + "' alt='" + alternative + "'></div><div class='col-lg-8'><p class='projectName'><label>" + title + "</label></p>"
            + "<label><p id='" + modalClassTarget + "' class='projectDesc'></p></label></div></div><div class='row'><div class='col-md-6 btnBlock'>"
            + "<a title='" + title + " Live App' href='" + hrefLiveApplication + "' target='_blank'><button class='btn btn-default projectBtn'>"
            + "<img class='projectImg' src='" + image + "' style='width:25px'> View Project </button></a></div><div class='col-md-6 btnBlock'>"
            + "<a title='" + title + " Github Repository' href='" + hrefGitHubRepository + "' target='_blank'><button class='btn btn-default githubBtn'>"
            + "<img class='projectImg' src='" + gitHubLogo + "' style='width:25px'> Github Repo </button></a></div></div></div></div></div></div>";
        return modal;
    };

    createCard();
});

/**
* Allows draggable effect for modals with this className
*/
$(() => {
    $(".draggable").draggable();
});