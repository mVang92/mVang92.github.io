require("dotenv").config();
var OMDBrequest = require("request");
var read = require("fs");
var keys = require("./keys");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

// Command takes in user input
var command = process.argv[2];
// Allows the user to input movies that have more than one word
var args = process.argv.slice(3).join("+");

// Pass in the command and arguments into the running function
running(command, args);

function running(cmd, arg) {
    if (!cmd) {
        console.log("Invalid Input\nUse: movie-this (movie), spotify-this-song (song), my-tweets, or do-what-it-says");
    } else {
        switch (cmd) {
            case "my-tweets":
                tweets();
                break;
            case "spotify-this-song":
            console.log("spotify")
            console.log(arg)
                if (arg === "") {
                    var defaultSong = "Ace of Base: The Sign";
                    spotify(defaultSong);
                    return;
                }
                spotify(arg);
                break;
            case "movie-this":
                // If the user enters no value for movies, default to Mr Nobody
                if (arg === "") {
                    var defaultMovie = "Mr Nobody";
                    movie(defaultMovie);
                    return;
                }
                movie(arg);
                break;
            case "do-what-it-says":
                doSays();
                break;
        };
    }
}

function movie(movieName) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    OMDBrequest(queryUrl, function (err, response, data) {
        if (!err && response.statusCode === 200) {
            let obj = JSON.parse(data)
            console.log('')
            console.log("Title: " + obj.Title);
            console.log("Release Year: " + obj.Year);
            console.log("IMDB Rating: " + obj.imdbRating);
            console.log("Rotten Tomatoes rating: " + obj.Ratings[1].Value);
            console.log("Production Location: " + obj.Country);
            console.log("Language: " + obj.Language);
            console.log("Movie Plot: " + obj.Plot);
            console.log("Main Actors: " + obj.Actors);
        } else {
            return console.log("Error");
        }
    })
}

function tweets() {
    var client = new Twitter(keys.twitter);
    client.get("statuses/home_timeline", function (error, tweets, response) {
        if (!error) {
            tweets.forEach(tweet => {
                console.log("User Name: " + tweet.user.name);
                console.log("Tweet Time: " + tweet.created_at);
                console.log("Tweet Content: " + tweet.text);
                console.log("-------------------------------");
            });
        } else {
            console.log("No Tweets to Show")
        }
    });
}

function spotify(song) {
    var spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'track', query: song }, function (err, data) {
        result = data.tracks.items[0];
        if (!err) {
            console.log("");
            console.log("Artist: " + result.album.artists[0].name);
            console.log("Song name: " + result.name);
            console.log("Album: " + result.album.name);
            console.log("Link: " + result.external_urls.spotify);
        } else {
            return console.log('Error occurred: ' + err);
        }
    });
}

function doSays() {
    read.readFile("./random.txt", "UTF8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        var file = data.split(",");
        running(file[0], file[1]);
    });
}