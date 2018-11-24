document.write('\
<div class="jumbotron" style="margin-bottom:6%;">\
    <h2 class="text-black text-center rounded pageDesc">My Work</h2>\
    <div id="portfolioBtn" class="text-center">\
        <button id="indivProjects" class="btn" data-toggle="collapse" href=".projectCollapse" role="button" aria-expanded="false">Individual Projects</button>\
        <button id="groupProjects" class="btn" data-toggle="collapse" href=".groupCollapse" role="button" aria-expanded="false">Group Projects</button>\
    </div>\
    <!-- Project Row 1 -->\
    <div class="row text-center box collapse multi-collapse projectCollapse">\
        <!-- Project 1 -->\
        <div class="col-md-4 cards" data-toggle="modal" data-target=".triviaGame">\
            <div class="row">\
                <div class="col-md-12">\
                    <div class="col-md-12 cardProjectName">\
                        Astronomy Trivia\
                    </div>\
                </div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img class="projectImg" src="assets/images/TriviaGame.png" alt="Astronomy Trivia Game">\
                </div>\
            </div>\
        </div>\
        <!-- Project 2 -->\
        <div class="col-md-4 cards" data-toggle="modal" data-target=".giftastic">\
            <div class="row">\
                <div class="col-md-12 cardProjectName">\
                    GifTastic\
                </div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img class="projectImg" src="assets/images/pbjTime.gif" alt="GifTastic">\
                </div>\
            </div>\
        </div>\
        <!-- Project 3 -->\
        <div class="col-md-4 cards" data-toggle="modal" data-target=".friendFinder">\
            <div class="row">\
                <div class="col-md-12 cardProjectName">\
                    Friend Finder\
                </div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img class="projectImg" src="assets/images/friendFinder.png" alt="Friend Finder">\
                </div>\
            </div>\
        </div>\
    </div>\
    <!-- Project Row 2 -->\
    <div class="row text-center cardBackGround collapse multi-collapse projectCollapse">\
        <!-- Project 4 -->\
        <div class="col-md-4 cards" data-toggle="modal" data-target=".burger">\
            <div class="row">\
                <div class="col-md-12 cardProjectName">\
                    Eat-Da-Burger\
                </div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img class="projectImg" src="assets/images/burger.png" alt="Eat-Da-Burger">\
                </div>\
            </div>\
        </div>\
        <!-- Project 5 -->\
        <div class="col-md-4 cards" data-toggle="modal" data-target=".nytScrubber">\
            <div class="row">\
                <div class="col-md-12 cardProjectName">\
                    NYT Scrubber\
                </div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img class="projectImg" src="../nyt-react-search/client/public/favicon.png" alt="New York Times Scrubber">\
                </div>\
            </div>\
        </div>\
        <!-- Project 6 -->\
        <div class="col-md-4 cards" data-toggle="modal" data-target=".clicky">\
            <div class="row">\
                <div class="col-md-12 cardProjectName">\
                    Crystal Clicky Game\
                </div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img class="projectImg" src="../clicky/public/assets/images/crystalF.png" alt="Crystal Clicky Game">\
                </div>\
            </div>\
        </div>\
    </div>\
    \
    <!-- Group Project Row 1 -->\
    <div class="row text-center cardBackGround collapse multi-collapse groupCollapse">\
        <!-- Project 1 -->\
        <div class="col-md-4 cards" data-toggle="modal" data-target=".bwaters">\
            <div class="row">\
                <div class="col-md-12 cardProjectName">\
                BWCA Advanture Tours\
                </div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img class="projectImg" src="assets/images/bwatersLogo.png" alt="BWCA Advanture Tours">\
                </div>\
            </div>\
        </div>\
        <!-- Project 2 -->\
        <!-- <div class="col-md-4 cards" data-toggle="modal" data-target="#">\
            \
        </div>\ -->\
        <!-- Project 3 -->\
        <!-- <div class="col-md-4 cards" data-toggle="modal" data-target="#">\
            \
        </div> -->\
    </div>\
    <!-- End Group Project -->\
</div>\
')
