$(document).ready(function () {
    var background = [
        {
            date: "Genesis - Present",
            img: "assets/images/genesis.png",
            main: "On an endless mission to learn new tools, ideas, skills, and technologies.",
            desc: "Passionate coder, courageous technical writer, and a rational problem solver with a very diverse background."
        },
        {
            date: "October 2018 - Present",
            img: "assets/images/allinaLogo.png",
            main: "Working with Allina Health/Abbot Northwestern Hospital as an IT Consultant.",
            desc: "Contribute to testing and debugging software programs during Windows 7 to Windows 10 migration. "
                + "Maintained consistency when reimaging new desktop/laptop computers for distribution."
        },
        {
            date: "April 2018 - October 2018",
            img: "assets/images/uofmLogo.png",
            main: "Certified Full-Stack Web Developer from University of Minnesota - Twin Cities.",
            desc: "A rigorous six-month course that covers the fundamental skills to become a full-stack web developer. Skills involved "
                + "were HTML (CSS), JavaScript, Bootstrap, jQuery, Ajax, API, REST, MongoDB, Express Servers, React, Node, and more."
        },
        {
            date: "August 2015 - December 2017",
            img: "assets/images/geekSquadLogo.png",
            main: "Worked with Best Buy stores as a Geek Squad Consultation Agent (CA).",
            desc: "Increased sales by quickly helping customers and clients with their technological needs. Problem solved software/hardware issues "
                + "to find solutions."
        },
        {
            date: "November 2013 - Present",
            img: "assets/images/benchmarkReviewsLogo.png",
            main: "Contributing Editor/Senior Writer for Performance Computers.",
            desc: "Utilize WordPress and have written over 60 product review articles for major computer companies."
        },
        {
            date: "September 2010 - May 2015",
            img: "assets/images/uwrfLogo.png",
            main: "Bachelor of Science in Computer Science - Information Systems from University of Wisconsin - River Falls",
            desc: "Excelled in courses like Introduction to Java, Object Oriented Programming with Java, Web Development (HTML, CSS, JavaScript), "
                + "Database Management Systems (SQL), and more."
        }
    ];

    function printBackgroundInfo() {
        for (var i = 0; i < background.length; i++) {
            var info = "<hr><div class='row projectDesc'><div class='col-md-4'><div class='row'><div class='col-md-12'><strong>"
                + background[i].date + "</strong></div><div class='col-md-12'><img class='myBackgroundImg' src='"
                + background[i].img + "'></div></div></div><div class='col-md-8'><div class='row'><div class='col-md-12 backgroundMain'>&#9656; "
                + background[i].main + "</div><div class='col-md-12 backgroundDesc'>&#9656; "
                + background[i].desc + "</div></div></div></div>"
            $("#myBackgroundInfo").append(info);
        }
    };

    printBackgroundInfo();
});