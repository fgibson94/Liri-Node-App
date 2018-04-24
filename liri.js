console.log("helloworld")

require("dotenv").config();
var Twitter = require('twitter');

///import keys.js file
var keys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//`my-tweets`


var mytweets = {screen_name: 'fgibson94', count: 20};
client.get('statuses/user_timeline', mytweets, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
// client.stream('statuses/filter', {track: 'fgibson94'},  function(stream) {
//     stream.on('data', function(tweet) {
//       console.log(tweet.text);
//     });
  
//     stream.on('error', function(error) {
//       console.log(error);
//     });
//   });

//`spotify-this-song`

//`movie-this`

//`do-what-it-says`
