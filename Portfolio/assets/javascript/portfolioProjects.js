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
        <div id="target1" class="col-md-4 cards" data-toggle="modal" data-target="">\
            <div class="row">\
                <div class="col-md-12">\
                    <div id="project1" class="col-md-12 cardProjectName"></div>\
                </div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img id="projectImg1" class="projectImg">\
                </div>\
            </div>\
        </div>\
        <!-- Project 2 -->\
        <div id="target2" class="col-md-4 cards" data-toggle="modal" data-target="">\
            <div class="row">\
                <div id="project2" class="col-md-12 cardProjectName"></div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img id="projectImg2" class="projectImg">\
                </div>\
            </div>\
        </div>\
        <!-- Project 3 -->\
        <div id="target3" class="col-md-4 cards" data-toggle="modal" data-target="">\
            <div class="row">\
                <div id="project3" class="col-md-12 cardProjectName"></div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img id="projectImg3" class="projectImg">\
                </div>\
            </div>\
        </div>\
    </div>\
    <!-- Project Row 2 -->\
    <div class="row text-center cardBackGround collapse multi-collapse projectCollapse">\
        <!-- Project 4 -->\
        <div id="target4" class="col-md-4 cards" data-toggle="modal" data-target="">\
            <div class="row">\
                <div id="project4" class="col-md-12 cardProjectName"></div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img id="projectImg4" class="projectImg">\
                </div>\
            </div>\
        </div>\
        <!-- Project 5 -->\
        <div id="target5" class="col-md-4 cards" data-toggle="modal" data-target="">\
            <div class="row">\
                <div id="project5" class="col-md-12 cardProjectName"></div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img id="projectImg5" class="projectImg">\
                </div>\
            </div>\
        </div>\
        <!-- Project 6 -->\
        <div id="target6" class="col-md-4 cards" data-toggle="modal" data-target="">\
            <div class="row">\
                <div id="project6" class="col-md-12 cardProjectName"></div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img id="projectImg6" class="projectImg">\
                </div>\
            </div>\
        </div>\
    </div>\
    \
    <!-- Group Project Row 1 -->\
    <div class="row text-center cardBackGround collapse multi-collapse groupCollapse">\
        <!-- Project 1 -->\
        <div id="gTarget1" class="col-md-4 cards" data-toggle="modal" data-target="">\
            <div class="row">\
                <div id="gProject1" class="col-md-12 cardProjectName"></div>\
            </div>\
            <div class="row">\
                <div class="col-md-12">\
                    <img id="gProjectImg1" class="projectImg">\
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
