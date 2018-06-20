var currentQuestion; 
var correctAnswer; 
var incorrectAnswer; 
var unanswered; 
var seconds; 
var time; 
var answered; 
var userSelect;
var messages = {
	correct: "<h2>Correct!</h2>",
	incorrect: "<h3>Incorrect.</h3>",
	timeUp: "<h2>Time is up!</h2>",
	finished: "<h2>Your score:</h2>"
}
var randomTheme;

$("#reset").hide();

$("#startBtn").on("click", function(){
	$(this).hide();
	running();
});

$("#reset").on("click", function(){
	$(this).hide();
	running();
});

function running(){
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	$("#finalMessage").empty();
	$("#correctAnswers").empty();
	$("#incorrectAnswers").empty();
	$("#unanswered").empty();
	newQuestion();
}

function newQuestion(){
	$("#message").empty();
	$("#correctedAnswer").empty();
	$("#currentQuestion").html("<h3>Question " + (currentQuestion + 1 ) + " of " + questions.length + "</h3>");
	$(".question").html("<h2>" + questions[currentQuestion].question + "</h2>");
	answered = true;
	randomTheme = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
	var theme = apiTheme[randomTheme];
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
		theme + "&api_key=whIW4NL8ItI77ZD3d2Yomtb0G40WFANS&limit=13";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {
		var results = response.data;
		var random = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		var image = $("<img src=" + results[random].images.fixed_height.url + ">");
		$("#questionImg").html(image);
	})

	// Just because we are in the JS file, doesn't mean we can reference the image from here.
	// We must reference the image from the index file, hence append to html.
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

function countdown(){
	seconds = 20;
	$("#timer").html("<h3>Time: " + seconds + "</h3>");
	answered = true;
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$("#timer").html("<h3>Time: " + seconds + "</h3>");
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
		unanswered++;
		$("#message").html(messages.timeUp);
		$("#correctedAnswer").html("<h3>Correct answer: <br><h2>" + rightAnswerText + "</h2></h3>");
		answered = true;
	}
	
	if (currentQuestion == (questions.length - 1)){
		setTimeout(scoreboard, 4000)
	} else {
		currentQuestion++;
		setTimeout(newQuestion, 4000);
	}	
}

function scoreboard(){
	$("#timer").empty();
	$("#message").empty();
	$("#correctedAnswer").empty();
	$("#questionImg").empty();
	$("#finalMessage").html(messages.finished);
	$("#correctAnswers").html("<h4>Correct Answers: " + correctAnswer + "</h4>");
	$("#incorrectAnswers").html("<h4>Incorrect Answers: " + incorrectAnswer + "</h4>");
	$("#unanswered").html("<h4>Unanswered: " + unanswered + "</h4>");
	$("#reset").fadeIn();
	$("#reset").html("<h2>Reset Game</h2>");
}