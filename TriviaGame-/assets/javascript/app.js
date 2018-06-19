var currentQuestion; 
var correctAnswer; 
var incorrectAnswer; 
var unanswered; 
var seconds; 
var time; 
var answered; 
var userSelect;
var messages = {
	correct: "Yes, that's right!",
	incorrect: "No, that's not it.",
	endTime: "Out of time!",
	finished: "Alright! Let's see how well you did."
}

$("#startBtn").on("click", function(){
	$(this).hide();
	running();
});

$("#startOverBtn").on("click", function(){
	$(this).hide();
	running();
});

function running(){
	$("#finalMessage").empty();
	$("#correctAnswers").empty();
	$("#incorrectAnswers").empty();
	$("#unanswered").empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

function newQuestion(){
	$("#message").empty();
	$("#correctedAnswer").empty();
	answered = true;
    
	$("#currentQuestion").html("Question #" + (currentQuestion + 1 ) + "/" + questions.length);
	$(".question").html("<h2>" + questions[currentQuestion].question + "</h2>");
	for(var i = 0; i < 4; i++){
		var choices = $("<div>");
		choices.text(questions[currentQuestion].answerList[i]);
		choices.attr({"data-index": i });
		choices.addClass("thisChoice");
		$(".answerList").append(choices);
    }
    
	countdown();
	$(".thisChoice").on("click",function(){
		userSelect = $(this).data("index");
		clearInterval(time);
		showAnswer();
	});
}

function countdown(){
	seconds = 15;
	$("#timer").html("<h2>Time: " + seconds + "</h2>");
	answered = true;
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$("#timer").html("<h2>Time: " + seconds + "</h2>");
	if(seconds < 1){
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
    
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$("#message").html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$("#message").html(messages.incorrect);
		$('#correctedAnswer').html("The correct answer was: " + rightAnswerText);
	} else{
		unanswered++;
		$("#message").html(messages.endTime);
		$("#correctedAnswer").html("The correct answer was: " + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (questions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}	
}

function scoreboard(){
	$("#timer").empty();
	$("#message").empty();
	$("#correctedAnswer").empty();
	$("#gif").empty();
	$("#finalMessage").html(messages.finished);
	$("#correctAnswers").html("Correct Answers: " + correctAnswer);
	$("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswer);
	$("#unanswered").html("Unanswered: " + unanswered);
	$("#startOverBtn").addClass("reset");
	$("#startOverBtn").show();
	$("#startOverBtn").html("Start Over?");
}