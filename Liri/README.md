# Liri
Language Interpretation and Recognition Interface

## Program Description
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. Parameters the app can take are my-tweets, spotify-this-song, movie-this, and do-what-it-says.

## Prerequisites
1. To run the application on your local machine, you will need node.js, which can be downloaded via this link (https://nodejs.org/en/download/).
2. If you are on Windows, please also download Git Bash (https://git-scm.com/downloads). Mac users can use the built-in Terminal.
3. In Git Bash/Terminal, clone the repository for this app using this command line: git clone https://github.com/mVang92/Liri.git
4. After the cloning is complete, run this command: npm install
5. This app is not runnable without a .env file. Using Git Bash/Terminal, navigate into the Liri folder and simply type this command: touch .env
6. In Windows, you will open this .env file with notepad.
7. Inside the .env file, copy and paste the block of information below into the file:

// Spotify API keys

SPOTIFY_ID="your spotify id"

SPOTIFY_SECRET="your spotify secret"

// Twitter API keys

TWITTER_CONSUMER_KEY="your twitter consumer key"

TWITTER_CONSUMER_SECRET="your twitter consumer secret"

TWITTER_ACCESS_TOKEN_KEY="your twitter access token key"

TWITTER_ACCESS_TOKEN_SECRET="your twitter access token secret"

8. Assuming you have a Twitter account, log into your account and follow this link (https://apps.twitter.com/) to create a new Twitter app where you can generate a consumer and secret key.
9. Inside the .env file created in step 5, replace everything, including the quotes, with your API keys. Do not leave a space between the equal sign and your keys.
10. For Spotify to work, you need a Spotify developer account, where you can sign up here: https://developer.spotify.com/dashboard/
11. After signing up, you can navigate to this link to create an app: https://developer.spotify.com/my-applications/
12. After following the steps to create a new app, you will be brought to a screen where you can view your Client ID and Client Secret. Copy and paste these keys into the .env file under SPOTIFY_ID (your Client ID) and SPOTIFY_SECRET (your Client Secret).

## Demonstration

In Git Bash/Terminal, run the app to view the last 20 tweets by typing this command: node liri.js my-tweets

![alt text](demo/tweets.JPG)

To spotify a song, type this command: node liri.js spotify-this-song "song name" (e.g. node liri.js spotify-this-song small town southern man)

![alt text](demo/spotify.JPG)

To search for a movie, type this command: node liri.js movie-this "movie name" (e.g. node liri.js movie-this the matrix)

![alt text](demo/movie.JPG)

To read from the random.txt file, type this command: node liri.js do-what-it-says

![alt text](demo/doSay.JPG)

## Technologies Used

* Javascript
* Node.js
* API