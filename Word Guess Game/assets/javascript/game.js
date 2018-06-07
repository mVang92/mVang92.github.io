// GLOBAL SCOPE VARIABLES
// Make an array of words to guess
var wordList = [
    "flexplate", 
    "flywheel", 
    "transmission",
    "distributor",
    "alternator",
    "crankshaft",
    "differential"
]

// Make an array of win phrases
var winList = [
    "Good job, treat yourself to a cookie!",
    "Consider going into the automotive industry?",
    "Well done, all our base are belong to you.",
    "Dynamo is an anagram of Monday."
]

// Randomlly pick a word from wordList array
var randomWord = Math.floor(Math.random() * wordList.length);
var randomWin = Math.floor(Math.random() * winList.length);
var winString = winList[randomWin];
var chosenWord = wordList[randomWord];
var myLength = chosenWord.length;
var display = [myLength];
var win = myLength;
// Splits answer array into separate characters at each index
var letters = chosenWord.split("");
var lives = 10;
var rightGuess = [];
// // How we display the underscore initially
var output = "";
var time = 0;
//--------------------------
// No cheating...
// console.log(winString)
// console.log(letters)
// console.log(chosenWord);
//--------------------------
// END GLOBAL SCOPE VARIABLES

// Displays amount of lives left into HTML
document.getElementById("lives").innerHTML = lives;
// Displays a hint for each word
if (chosenWord === "flexplate"){
    document.getElementById("hint").innerHTML = 
    "This is a metal disk that connects the output from an engine to the input of a torque converter in a car equipped with an automatic transmission. It takes the place of the flywheel found in a conventional standard transmission setup."
} else if (chosenWord === "flywheel") {
    document.getElementById("hint").innerHTML = 
    "Found on standard transmission vehicles, this part is a mechanical device specifically designed to efficiently store rotational energy. They resist changes in rotational speed by their moment of inertia.";;
} else if (chosenWord === "transmission") {
    document.getElementById("hint").innerHTML = 
    "The mechanism by which power is transmitted from an engine to the wheels of a motor vehicle.";
} else if (chosenWord === "distributor") {
    document.getElementById("hint").innerHTML = 
    "Although modern vehicles have switched over to coil-on-plugs, the purpose of this device is to route secondary, or high voltage, current from the ignition coil to the spark plugs in the correct firing order, and for the correct amount of time.";
} else if (chosenWord === "alternator") {
    document.getElementById("hint").innerHTML = 
    "This is an electrical generator that converts mechanical energy to electrical energy. It also recharges the battery and runs all electrical accessories on the vehicle.";
} else if (chosenWord === "crankshaft") {
    document.getElementById("hint").innerHTML = 
    "This is a shaft which transmits the power developed by the engine to the various parts of the vehicle.";
} else if (chosenWord === "differential") {
    document.getElementById("hint").innerHTML = 
    "Equiped on all motor vehicles, this component is designed to compensate for the difference in distance the inner wheels and outer wheels travel as the car goes around a corner.";
}

//Generates underscores for the number of characters in the chosenWord array
for (var i = 0; i < chosenWord.length; i++){
    // Displays underscores onto the screen
    display[i] = "_,";
    output += display[i];
    // Put some underscores into rightGuess array
    rightGuess.push("_")
}
document.getElementById("wordToGuess").innerHTML = output;
// Resets underscores
output = "";

// Listens to key presses
document.onkeypress = function(event) {
    event = event || window.event;
    // Converts key code into a character we can understand
    var charCode = event.keyCode || event.which;
    var userLetter = String.fromCharCode(charCode);
    // Test character
    // console.log(userLetter);

    // Checks for the wrong guesses
    if (chosenWord.indexOf(userLetter) < 0) {
        // Test wrong letter
        // console.log("wrong guess");

        // Decrement lives by 1
        lives--;
    // Add letters to the rightGuess array when they are correct
    } else {
        for (i = 0; i < chosenWord.length; i++) {
            // Each time the guess letter is found... 
            if (chosenWord[i] === userLetter) {
                // Add it as a good guess in the same spot
                rightGuess[i] = userLetter;
                // Testing rightGuess array
                // console.log(rightGuess)
                document.getElementById("wordToGuess").innerHTML = rightGuess;
            }
        }
    }

    // Calls arraysEqual function, and notifies the player if they won
    if (arraysEqual(rightGuess, letters)) {
        document.getElementById("showWord").innerHTML = winString;
        // Calls reload function to refresh the page after 10 seconds
        time = setTimeout(reload, 10000);
    }
    
    // arraysEqual takes in two parameters, 
    // and checks the arrays for both rightGuess and letters.
    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;
      
        // If you don't care about the order of the elements inside
        // the array, you should sort both arrays here.
      
        // If return true, player wins.
        for (var i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false;
        }
        return true;
      }

    // When player loses, display the correct word once all lives are used up
    if (lives < 1){
        lives = 0;
        document.getElementById("showWord").innerHTML = "The correct word is \"" + chosenWord + "\".";
        // Calls reload function to refresh the page after 10 seconds
        time = setTimeout(reload, 10000);
    }
    document.getElementById("lives").innerHTML = lives;

    function reload(){
        window.location.reload();
    }
}
