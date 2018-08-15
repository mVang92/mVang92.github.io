$(document).ready(function () {
    var portfolioDesc = ("<p>To visit the application websites, click on the project icons."
        + " Each project also has a short desciption and a link to their Github repositories.</p>")

    // $("#portfolioDesc").html(portfolioDesc);

    $("#project1").html("The Crystals Collector Game utilizes Javascript and jQuery code. A random number"
        + " is given to the user at the start of each round, and the user must use the four crystals to add"
        + " their total to equal the random number chosen. Each crystal will randomize every round"
        + ", so keep track of the number behind the crystals.");

    $("#project2").html("The Word Guess Game is based around automotive terminology and utilizes vanilla Javascript. The application"
        + " will give a hint to the user and the user must use the keyboard to fill in the blanks for the chosen word.");

    $("#project3").html("This application utilizes a combination of Javascript, jQuery, and an API. The user must answer a"
        + " series of astronomy/physics based questions in a limited amount of time. Scores are displayed"
        + " at the end, and the user may replay the game if they want.");

    $("#project4").html("GifTastic was built around Javascript, jQuery, and API calls. This application appends new buttons"
        + " next to the predefined buttons and allows the user to click and generate 10 Gif images at a time."
        + " The application talks to an API, which returns the appropriate search results as searched. The"
        + " Gif images are initially still, but once clicked, they become animated.");

    $("#project5").html("Train Scheduler utilizes the Moment.js library along with a Firebase database to store data on travel information. The application"
        + " will take in several parameters and store them in the database. It will also calculate the next"
        + " train arrival. Then it captures a snapshot from the database and displays the data back to the"
        + " user.");

    $("#project6").html("LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data."
        + " More information on how to run the program can be found in the Github repository README.");
})