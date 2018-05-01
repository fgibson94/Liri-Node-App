
var commands = require("./liri.js");

var ask = new commands();
var commandType = process.argv[2];

//var commandQuery = process.argv[3];

if (commandType === "my-tweets") {
    ask.myTweets();
}
if (commandType === "spotify-this-song") {
    ask.spotifyThisSong();
} 
if (commandType === "movie-this") {
    ask.movieThis();
    
} 
if (commandType === "do-what-it-says") {
    ask.doWhatItSays();
}  else {
    
}