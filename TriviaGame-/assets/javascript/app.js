$(document).ready(function(){
    var count = 5;
    var score;
    var timerOn = false;
    $(".welcome").append('<h2 style="text-align:center">Welcome! Press start to play!</h2>');
    $("#startButton").append('<button style="" type="button" class="btn btn-danger btn-lg">Start</button>');
    $(".trivia").hide();
    $("#nextButton").hide();
    $(".nextBox").hide();
    $(".triviaBox").hide();

    $("#startButton").click(function(){
        $("#nextButton").append('<button style="" type="button" class="btn btn-danger btn-lg">Next Question</button>');
        $("#startButton").hide();
        $("#nextButton").fadeIn();
        $(".triviaBox").fadeIn();
        $(".nextBox").fadeIn();
        $(".trivia").fadeIn();
        $(".welcome").html('<h2 style="text-align:center">Question 1</h2>')
        // Start the game
        running();
    });

    function running(){
        //Total number of questions
        // var totalNumQuestions = $(".questions");
        //Display current question, sets it at first question
        var currentQuestion = 0;
        //jQuery variable
        $questions = $(".questions");
        //Hide all of the questions
        $questions.hide();
        //Show the first question
        $($questions.get(currentQuestion)).fadeIn();
        timer()
        //Click listener to get next question
        $("#nextButton").click(function() {
            $("#nextButton").hide();
            timer()
            //Current question disappears
            $($questions.get(currentQuestion)).fadeOut(function() {
                //Increment current question by 1. 
                currentQuestion++;
                // console.log(currentQuestion)
                // Parse to int to prevent cascade
                $(".welcome").html('<h2 style="text-align:center">Question ' + parseInt(currentQuestion  + 1) + '</h2>')
                // Reset the clock
                count = 5;
                $($questions.get(currentQuestion)).fadeIn();
                $("#nextButton").fadeIn();
                console.log("total score" + score)
            });
        });
    
        // Scoring function
        function setScore() {
            score = 0;
            // score = $("input:checked[value=right]").length;

            if ($("input:checked[value=right]").length){
                score++
            console.log(score);
            }
        }

        // Starts timer
        function timer(){
            function timedCount() {
                $("#timer").html('<h2 style="text-align:center">' + count + '</h2>');

                if (count === -1){
                    $("#timer").html('<h2 style="text-align:center">Time is up!</h2>');
                    $($questions.get(currentQuestion)).fadeOut(function() {
                        //Increment current question by 1. 
                        currentQuestion++;
                        // console.log(currentQuestion)
                        // Parse to int to prevent cascade
                        $(".welcome").html('<h2 style="text-align:center">Question ' + parseInt(currentQuestion  + 1) + '</h2>')
                        // Reset the clock
                        count = 5;
                        $($questions.get(currentQuestion)).fadeIn();
                        $(".nextButton").fadeIn();
                        
                        // if (currentQuestion == 3){
                        //     console.log(currentQuestion)
                        // }
                        setTimeout(timer, 1000)
                    });

                    count = 0;
                    stopCount();

                } else {
                    count -= 1;
                    time = setTimeout(timedCount, 1000);
                }
            }
                    
            function startCount() {
                if (!timerOn) {
                    timerOn = true;
                    timedCount();
                }
            }

            function stopCount() {
                console.log("stop count")
                timerOn = false;
                count = 0;
            }
        // Begin timer
        startCount();
        }
    //Set score when user chooses right choice
    $("input").change(setScore);
    //Set score when initialized
    setScore();
    }
});