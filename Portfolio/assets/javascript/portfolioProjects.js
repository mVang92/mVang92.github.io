document.write('\
<div class="jumbotron" style="margin-bottom:6%;">\
    <h2 class="text-black text-center rounded pageDesc">My Work</h2>\
    <div id="portfolioBtn" class="text-center">\
        <button id="indivProjects" class="btn" data-toggle="collapse" href=".projectCollapse" role="button" aria-expanded="false">Individual Projects</button>\
        <button id="groupProjects" class="btn" data-toggle="collapse" href=".groupCollapse" role="button" aria-expanded="false">Group Projects</button>\
    </div>\
    <!-- Project Row 1 -->\
    <div class="text-center box collapse multi-collapse projectCollapse">\
        <div id="iProjects"></div>\
        <!-- Project 1 -->\
        <!-- Project 2 -->\
        <!-- Project 3 -->\
    </div>\
    <!-- Group Project Row 1 -->\
    <div class="text-center cardBackGround collapse multi-collapse groupCollapse">\
        <div id="gProjects"></div>\
        <!-- Project 1 -->\
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
