// Required dependencies
var path = require("path");

// Import friends array of objects from friends.js
var friends = require("../data/friends.js");

// Export API routes
module.exports = function(app) {
	// Display all friends in JSON format
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	// Add new friend
	app.post("/api/friends", function(req, res) {
		// Capture the user input object
		var userInput = req.body;

		var userResponses = userInput.scores;
		// Compute best friend match
		var matchName = "";
        var matchImage = "";
        // Make the initial value big for comparison
		var totalDifference = 10000;

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
                // Get the absolute value of the difference
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		// Send appropriate response
        res.json({status: "OK",
            matchName: matchName,
            matchImage: matchImage
        });
	});
};
