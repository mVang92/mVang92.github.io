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

    $("#project7").html("This node app uses a MySQL database for customers and managers to interact with."
        + " This is a very basic program where customers can purchase items just like purchase something from an online website."
        + " Customers may view and purchase products, while managers have a few more options."
        + " Managers can view the products for sale, update inventory, and more."
        + " More information on how to run the program can be found in the Github repository README.");

    $("#project8").html("This full-stack site will take in results from different surveys, then compare answers with those from other users."
        + " The app will then display the name and picture of the user with the best overall match.");

    $("#project9").html("This full stack site utilizes MySQL, Node, Express, Handlebars, an ORM, and Heroku with JawsDB for hosting the website."
        + " A user can add their own burger to the list of burgers ready to eat. Once they click the burger they want to eat,"
        + " the burger moves over to the right column and is categorized as devoured.");
})