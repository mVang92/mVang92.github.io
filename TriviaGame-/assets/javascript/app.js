// Global Variables Start
var currentQuestion; 
var correctAnswer; 
var incorrectAnswer; 
var unAnswered; 
var seconds; 
var time; 
var answered; 
var userSelect;
var randomTheme;
// Message object to display status to user
var messages = {
	correct: "<h2 id='greenText'>Correct!</h2>",
	incorrect: "<h3 id='redText'>Incorrect.</h3>",
	timeUp: "<h2 id='redText'>Time is up!</h2>",
	finished: "<h2>Your score:</h2>"
}
// End Global Variables

// Hides the reset button at starup
$("#reset").hide();

// When clicked, hide the start button and run the game
$("#startBtn").on("click", function(){
	$(this).hide();
	running();
});

// When clicked, hide the reset button and run the game
$("#reset").on("click", function(){
	$(this).hide();
	running();
});

function running(){
	// Initialize variables back to 0
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unAnswered = 0;
	// Remove any records from HTML so the user cannot see them
	$("#finalMessage").empty();
	$("#correctAnswers").empty();
	$("#incorrectAnswers").empty();
	$("#unAnswered").empty();
	// Call the next question
	newQuestion();
}

function newQuestion(){
	$("#message").empty();
	$("#correctedAnswer").empty();
	// Displays the current question number out of total questions
	$("#currentQuestion").html("<h3>Question " + (currentQuestion + 1 ) + " of " + questions.length + "</h3>");
	// Displays the current question
	$(".question").html("<h2>" + questions[currentQuestion].question + "</h2>");
	answered = true;
	// Randomize the theme with a number 1, 2, or 3
	randomTheme = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
	// New theme variable will contain what element apiTheme should reference
	var theme = apiTheme[randomTheme];
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
		theme + "&api_key=whIW4NL8ItI77ZD3d2Yomtb0G40WFANS&limit=13";
	// Ajax start
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {
		var results = response.data;
		// Each theme will have 12 random search results
		var random = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		var image = $("<img id='api' src=" + results[random].images.fixed_height.url + ">");
		$("#questionImg").html(image);
	})

	// Displays our answer choices in relation to each questions
	for (var i = 0; i < 4; i++){
		var choices = $("<div>");
		choices.text(questions[currentQuestion].answerList[i]);
		choices.attr({"data-index": i });
		choices.addClass("thisChoice");
		$(".answerList").append(choices);
    }
    
	countdown();
	$(".thisChoice").on("click", function(){
		userSelect = $(this).data("index");
		clearInterval(time);
		showAnswer();
	});
}

// Timer function
function countdown(){
	seconds = 20;
	$("#timer").html("<h3>Time: " + seconds + "</h3>");
	answered = true;
	time = setInterval(showCountdown, 1000);
}
// This function is called every second to decrement seconds
function showCountdown(){
	seconds--;
	$("#timer").html("<h3>Time: " + seconds + "</h3>");
	// When seconds is less than 1, call the showAnswer function
	if (seconds < 1){
		clearInterval(time);
		answered = false;
		showAnswer();
	}
}

function showAnswer(){
	$("#currentQuestion").empty();
	$(".thisChoice").empty();
	$(".question").empty();

    var rightAnswerText = questions[currentQuestion].answerList[questions[currentQuestion].answer];
    var rightAnswerIndex = questions[currentQuestion].answer;
    
	if ((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$("#message").html(messages.correct);
	} else if ((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$("#message").html(messages.incorrect);
		$('#correctedAnswer').html("<h3>Correct answer: <br><h2>" + rightAnswerText + "</h2></h3>");
	} else {
		unAnswered++;
		$("#message").html(messages.timeUp);
		$("#correctedAnswer").html("<h3>Correct answer: <br><h2>" + rightAnswerText + "</h2></h3>");
		answered = true;
	}
	// Between each question, wait 4 seconds before contining to the next question
	if (currentQuestion == (questions.length - 1)){
		setTimeout(scoreboard, 4000)
	} else {
		currentQuestion++;
		setTimeout(newQuestion, 4000);
	}	
}

// Displays the score to the user
function scoreboard(){
	$("#timer").empty();
	$("#message").empty();
	$("#correctedAnswer").empty();
	$("#questionImg").empty();
	$("#finalMessage").html(messages.finished);
	$("#correctAnswers").html("<h4>Correct Answers: " + correctAnswer + "</h4>");
	$("#incorrectAnswers").html("<h4>Incorrect Answers: " + incorrectAnswer + "</h4>");
	$("#unAnswered").html("<h4>Unanswered: " + unAnswered + "</h4>");
	// Display a reset button for the user
	$("#reset").fadeIn();
	$("#reset").html("<h2>Reset Game</h2>");
}