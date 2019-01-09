$(document).ready(function () {
    var background = [
        {
            date: "October 2018 - Present",
            img: "assets/images/allinaLogo.png",
            main: "Currently working with Allina Health with a Windows 10 migration project.",
            desc: "Work with supervisor and other team leaders to test and debug software programs as we migrate from Windows 7 to Windows 10. "
                + "Reimage new desktop and laptop computers and wipe old computers clean of data."
        },
        {
            date: "April 2018 - October 2018",
            img: "assets/images/uofmLogo.png",
            main: "Completed the Full-Stack Web Development bootcamp course at the University of Minnesota - Twin Cities.",
            desc: "This rigorous six-month course taught me the fundamental skills needed to become a full-stack web developer. Skills involved "
                + "were HTML (CSS), JavaScript, Bootstrap, jQuery, Ajax, API, REST, MongoDB, Express Servers, React, Node, and more."
        },
        {
            date: "August 2015 - December 2017",
            img: "assets/images/geekSquadLogo.png",
            main: "Worked with Best Buy stores as a Geek Squad Consultation Agent (CA).",
            desc: "Helped many customers and clients with their technological needs. Quickly problem solved software/hardware issues to find "
                + "solutions to their problem with the help of the sales floor team."
        },
        {
            date: "November 2013 - Present",
            img: "assets/images/benchmarkReviewsLogo.png",
            main: "A Contributing Editor/Senior Writer for Performance Computers (Benchmark Reviews).",
            desc: "Utilize WordPress to write product review articles for major computer companies (Logitech, Corsair, Roccat)."
        },
        {
            date: "September 2010 - May 2015",
            img: "assets/images/uwrfLogo.png",
            main: "Graduated from the University of Wisconsin - River Falls with a Bachelor of Science in Computer Science - Information Systems.",
            desc: "Took courses involving Introduction to Java, Object Oriented Programming with Java, Web Development (HTML, CSS, JavaScript), "
                + "Database (SQL), and more."
        }
    ];

    function printBackground() {
        for (var i = 0; i < background.length; i++) {
            var info = "<hr><div class='row projectDesc'><div class='col-md-4'><div class='row'><div class='col-md-12'>"
                + background[i].date + "</div><div class='col-md-12'><img class='myBackgroundImg' src='"
                + background[i].img + "'></div></div></div><div class='col-md-8'><div class='row'><div class='col-md-12 backgroundDesc'>&#9656; "
                + background[i].main + "</div><div class='col-md-12 backgroundDesc'>&#9656; "
                + background[i].desc + "</div></div></div></div>"
            $("#myBackgroundInfo").append(info);
        }
    };

    printBackground();
});