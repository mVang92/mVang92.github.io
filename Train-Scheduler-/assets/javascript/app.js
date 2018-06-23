// Global Variables
var trainName;
var destination;
var trainTime;
var frequency;
var nextTrain;
var trainTimeConverted;
var minutesAway;
var diffTime;
var tRemainder;
var nextTrainFormatted;
// End Global Variables

$(document).ready(function(){
    // Firebase database
    var config = {
        apiKey: "AIzaSyBldXU8FdmwlOwxu-OJ0GlpO3dCOsbBsj4",
        authDomain: "assignment-7-train-sched-ee601.firebaseapp.com",
        databaseURL: "https://assignment-7-train-sched-ee601.firebaseio.com",
        projectId: "assignment-7-train-sched-ee601",
        storageBucket: "",
        messagingSenderId: "498660341860"
      };

    firebase.initializeApp(config);

    var database = firebase.database();

    // Submit button click function
    $("#submitBtn").on("click", function(evt){
        evt.preventDefault();
        trainName = $("#trainName").val().trim();
        destination = $("#destination").val().trim();
        trainTime = $("#time").val().trim();
        frequency = $("#frequency").val().trim();
        // console.log(trainName, destination, trainTime, frequency);

        // Calculating "Next Arrival" and "Minutes Avay"
        trainTimeConverted = moment(trainTime, "hh:mm").subtract(1, "years");
        currentTime = moment();
        diffTime = moment().diff(moment(trainTimeConverted), "minutes");
        tRemainder = diffTime % frequency;
        minutesAway = frequency - tRemainder;
        nextTrain = moment().add(minutesAway, "minutes");
        nextTrainFormatted = moment(nextTrain).format("hh:mm A");

        // Pushing the values to the database
        database.ref().push({
            trainName: trainName,
            destination: destination,
            trainTime: trainTime,
            frequency: frequency,
            nextTrainFormatted: nextTrainFormatted,
            minutesAway: minutesAway
        })

        $("#trainName").val("");
        $("#destination").val("");
        $("#time").val("");
        $("#frequency").val("");
    })

    database.ref().orderByChild("dateAdded").limitToLast(7).on("child_added", function (snapshot) {
        // console.log(snapshot.val());
        var tableBody = $("tbody");
        var tableRow = $("<tr>");
        var minFrequency;
        var minAway;

        if (snapshot.val().frequency <= 1){
            minFrequency = "minute"
        } else {
            minFrequency = "minutes"
        }

        if (snapshot.val().minutesAway <= 1){
            minAway = "minute"
        } else {
            minAway = "minutes"
        }
        
        // Place user inputs into the table
        // Creates new td tags to place user inputs in
        // td will be our cells
        var tdTrainName = $("<td>").text(snapshot.val().trainName);
        var tdDestination = $("<td>").text(snapshot.val().destination);
        var tdFrequency = $("<td>").text(snapshot.val().frequency + " " + minFrequency);
        var tdNextTrain = $("<td>").text(snapshot.val().nextTrainFormatted);
        var tdMinutesAway = $("<td>").text(snapshot.val().minutesAway + " " + minAway);
        tableRow.append(tdTrainName, tdDestination, tdFrequency, tdNextTrain, tdMinutesAway);
        tableBody.append(tableRow);
    })
})