$(document).ready(function () {
    const background = [
        // {
        //     date: "Genesis - Present",
        //     img: "assets/images/genesis.png",
        //     main: "On an endless mission to learn new tools, ideas, skills, and technologies.",
        //     desc: "Passionate coder, courageous technical writer, and a rational problem solver with a very diverse background."
        // },
        {
            date: "April 2019 - Present",
            img: "assets/images/virginPulseLogo.png",
            main: "Software Engineer intern working with the Sustaining Team at Virgin Pulse.",
            desc: "Resolve production incidents by making database and code changes. Participate in weekly meetings to improve the workflow of sprints."
        },
        {
            date: "March 2019 - Present",
            img: "assets/images/legitReviewsLogo.png",
            main: "Technical Review Writer for Legit Reviews.",
            desc: "Utilizing WordPress to write review articles for major computer companies. Participate in video conference calls "
                + "with company development teams to learn more about new product releases."
        },
        {
            date: "October 2018 - March 2019",
            img: "assets/images/allinaLogo.png",
            main: "IT Consultant at Allina Health/Abbott Northwestern Hospital.",
            desc: "Contributed to testing and debugging software programs during Windows 7 to Windows 10 migration. "
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
            main: "Geek Squad Consultation Agent (CA) at Best Buy.",
            desc: "Increased sales by quickly helping customers and clients with their technological needs. Problem solved software/hardware issues "
                + "to find solutions."
        },
        {
            date: "November 2013 - February 2019",
            img: "assets/images/benchmarkReviewsLogo.png",
            main: "Contributing Editor/Senior Writer for Performance Computers.",
            desc: "Utilized WordPress to write over 60 product review articles for major computer companies."
        },
        {
            date: "September 2010 - May 2015",
            img: "assets/images/uwrfLogo.png",
            main: "Bachelor of Science in Computer Science - Information Systems from University of Wisconsin - River Falls",
            desc: "Excelled in courses like Introduction to Java, Object Oriented Programming with Java, Web Development (HTML, CSS, JavaScript), "
                + "Database Management Systems (SQL), and more."
        }
    ];

    const printBackgroundInfo = () => {
        for (let i = 0; i < background.length; i++) {
            const info = "<hr><div class='row projectDesc'><div class='col-md-4'><div class='row'><div class='col-md-12'><strong>"
                + background[i].date + "</strong></div><div class='col-md-12'><img class='myBackgroundImg' src='"
                + background[i].img + "'></div></div></div><div class='col-md-8'><div class='row'><div class='col-md-12 backgroundMain'>&#9656; "
                + background[i].main + "</div><div class='col-md-12 backgroundDesc'>&#9656; "
                + background[i].desc + "</div></div></div></div>"
            $("#myBackgroundInfo").append(info);
        }
    };

    printBackgroundInfo();
});