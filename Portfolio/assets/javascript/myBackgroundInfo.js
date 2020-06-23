$(document).ready(function () {
    const background = [
        {
            date: "September 2019 - Present",
            companyLogo: "assets/images/virginPulseLogo.png",
            jobRole: "Software Development Engineer in Test at Virgin Pulse."
        },
        {
            date: "April 2019 - September 2019",
            companyLogo: "assets/images/virginPulseLogo.png",
            jobRole: "Software Engineer Intern at Virgin Pulse."
        },
        {
            date: "March 2019 - Present",
            companyLogo: "assets/images/legitReviewsLogo.png",
            jobRole: "Technical Review Writer at Legit Reviews."
        },
        {
            date: "October 2018 - March 2019",
            companyLogo: "assets/images/allinaLogo.png",
            jobRole: "IT Consultant at Allina Health/Abbott Northwestern Hospital.",
        },
        {
            date: "April 2018 - October 2018",
            companyLogo: "assets/images/uofmLogo.png",
            jobRole: "Certified Full-Stack Web Developer from Trilogy Education Services.",
        },
        {
            date: "August 2015 - December 2017",
            companyLogo: "assets/images/geekSquadLogo.png",
            jobRole: "Geek Squad Consultation Agent (CA) at Best Buy."
        },
        {
            date: "November 2013 - February 2019",
            companyLogo: "assets/images/benchmarkReviewsLogo.png",
            jobRole: "Contributing Editor/Senior Writer at Benchmark Reviews"
        }
    ];

    /**
    * Appends each object from the brackground array to the page
    */
    const printBackgroundInformation = () => {
        for (let counter = 0; counter < background.length; counter++) {
            const backgroundInformation = "<hr><div class='row projectDesc'><div class='col-md-4'><div class='row'><div class='col-md-12'><strong>"
                + background[counter].date + "</strong></div><div class='col-md-12'><img class='myBackgroundImg' src='"
                + background[counter].companyLogo + "'></div></div></div><div class='col-md-8'><div class='row'><div class='col-md-12 backgroundMain'>&#9656; "
                + background[counter].jobRole + "</div></div></div></div>"
            $("#myBackgroundInfo").append(backgroundInformation);
        }
    };

    printBackgroundInformation();
});