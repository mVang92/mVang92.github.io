$(document).ready(function(){
    $(".welcome").append('<h2 style="text-align:center">Welcome! Press start to play!</h2>');
    $("#startButton").append('<button type="button" class="btn btn-danger btn-lg">Start</button>');
    $("#submit").hide();

    var count = 45;
    var timerOn = false;
    var currentQuestion = 0;
    var correct = 0;
    var wrong = 0;
    var name;
    
    // Questions
    var questions = [
        "Suppose there is an alien civilization 66 million light-years away from Earth. What would they see if they looked at the Earth right now?",
        "What is the closest star system to our solar system?",
        "The largest moon in our solar system belongs to which one of these planets?",
    ];

    // Choices for questions
    var choices = [
        [
        "The Dinosaurs",
        "The Roman Empire",
        "An ocean planet",
        "The Incredibles, of course"
        ],
        [
        "Betelgeuse",
        "Sirius",
        "Alpha Centauri",
        "The Moon"
        ],
        [
        "Gliese 581",
        "Saturn",
        "Jupiter",
        "Neptune"
        ],
    ];
    
    // References to correct answers in choices array
    var correctAnswer = [
        choices[0][0],
        choices[1][2],
        choices[2][2],
    ];
    
    // Start button functions
    $("#startButton").click(function(){
        $(".welcome").html('<h2 style="text-align:center">Question ' + parseInt(currentQuestion  + 1) + '</h2>')
        $("#submit").show();
        $("#quiz").show();
        $("#correctResults").hide();
        $("#wrongResults").hide();
        $(this).hide();
        timerOn = false;
        currentQuestion = 0;
        correct = 0;
        wrong = 0;
        count = 45;
        
        // Running method to run game
        function running(){
            var choiceToQuestion = 0;
            var i = 0;
            var j = 0;

            // Append the questions from the questions array
            for (i = 0; i < questions.length; i++){
                // Reset value to 0 
                value = 0;
                $("#quiz").append('<h4>' + questions[i] + '</h4><br>');

                // For each question, append the elements in the choices array
                for (j = 0; j <= choices.length; j++){
                    // Changes the value 1 to 4 for each question
                    value++;
                    $("#quiz").append('<div><input type="radio" value="'+ choices[i][j] +'" name="option' + choiceToQuestion + '">' + choices[i][j] + '</div><br>');
                }
                // Increment name options after each question
                choiceToQuestion++;
            }
            
            // Timer function starts timer
            function timer() {
                $("#timer").html('<h2 style="text-align:center">' + count + '</h2>');

                if (count === -1){
                    // Show Time is up!
                    $("#timer").html('<h2 style="text-align:center">Time is up!</h2>');
                    count = 0;
                    stopCount();
                    $("#submit").hide();
                    $("#quiz").hide();
                    // $("#startButton").show();

                    } else {
                        count -= 1;
                        time = setTimeout(timer, 1000);
                    }
                }
                        
                function startCount() {
                    if (!timerOn) {
                        timerOn = true;
                        timer();
                    }
                }

                function stopCount() {
                    timerOn = false;
                    count = 0;
                }

                // Checks for clicks on all radio buttons
                $('input:radio').click(function(){
                    // name variable will obtain the name attribute for the radio button clicked
                    name = ($(this).attr("name"));
                    optionGroup = parseInt(name.replace("option", ""));
                })

                // Submit button function
                $("#submit").click(function(){
                    $("#correctResults").show();
                    $("#wrongResults").show();
                    // $("#startButton").show();
                    $("#quiz").hide();
                    $("#timer").hide();
                    $(this).hide();
                    count = 0;
                    timer = false;
                    
                    // Loop through the questions 
                    for (var n = 0; n < questions.length; n++){
                        // Give each questions a unique option number
                        var option = $("[name='option" + n + "']");
                        // console.log(option)

                        // Nested for loop to go through each answer choices for each question
                        for(var g = 0; g < option.length; g++){
                            // Checks to see if all radio buttons are checked
                            if ($(option[g]).is(":checked") && $(option[g]).val() === correctAnswer[n]){
                                correct++;
                                // console.log(correct)
                                // Hide this (submit) button
                                $(this).hide();
                                $("#correctResults").html('<h3>Questions Correct: ' + correct);
                            
                            // Else if user choice is not equal to th e correct answer...
                            } else if ($(option[g]).is(":checked") && $(option[g]).val() != correctAnswer[n]){
                                wrong++;
                                $("#wrongResults").html('<h3>Questions Incorrect: ' + wrong);
                                //-------------------------------------------------------
                                
                                // This is where I could put some code to check for
                                // unchecked buttons and display them on the screen.

                                // Some code to prevent the submit button from working
                                // if there are unchecked radio buttons

                                //-------------------------------------------------------

                            }
                        }
                    }
                })
            // Begin timer
            startCount();
            }
        running()
    });
});