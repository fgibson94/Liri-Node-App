
require("dotenv").config();



var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require("fs");

///import keys.js file

var keys = require("./keys.js");
function Commands() {
    
//`my-tweets`

this.myTweets = function() {
    
    var client = new Twitter(keys.twitter);

    var mytweets = { screen_name: 'fgibson94', count: 20 };
    client.get('statuses/user_timeline', mytweets, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at)
                console.log(tweets[i].text);
            }
        }
    });


};

//`spotify-this-song`
this.spotifyThisSong = function () {

    var spotify = new Spotify(keys.spotify);
    spotify
        .search({
            type: 'track',
            query: process.argv[3]
        })
        .then(function (response) {

            // * Artist(s)
            console.log(response.tracks.items[0].artists[0].name);

            //  * The song's name
            console.log(response.tracks.items[0].name);

            //  * A preview link of the song from Spotify
            console.log(response.tracks.items[0].external_urls.spotify);

            //  * The album that the song is from
            console.log(response.tracks.items[0].album.name);

        })
        .catch(function (err) {
            console.log("ERROR: ", err);
        });

};

//`movie-this`
this.movieThis = function () {

    var movieTitle = process.argv[3];

    var queryURL = "http://www.omdbapi.com/?t=" + movieTitle + "&apikey=trilogy";


    request.get(
        queryURL,
        function (error, response, body) {
            //     * Title of the movie.
            console.log(JSON.parse(body).Title);
            //    * Year the movie came out.
            console.log(JSON.parse(body).Year);
            //    * IMDB Rating of the movie.
            console.log("IMDB", JSON.parse(body).Ratings[0].Value);

            //    * Rotten Tomatoes Rating of the movie.
            console.log("RottenTomatoes", JSON.parse(body).Ratings[1].Value);

            //    * Country where the movie was produced.
            console.log(JSON.parse(body).Country);

            //    * Language of the movie.
            console.log(JSON.parse(body).Language);

            //    * Plot of the movie.
            console.log(JSON.parse(body).Plot);

            //    * Actors in the movie.
            console.log(JSON.parse(body).Actors);


        });

}

//`do-what-it-says`
this.doWhatItSays= function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            console.log("Error: ", error)
        }
        console.log(data);
        process.argv[2] = data;
    })

}

//Log Data to txt file
var nodeCommand = process.argv[2] + "\n";

fs.appendFile("log.txt", nodeCommand, function (error, data) {
    if (error) {
        console.log("Error: ", error)
    }
    console.log("data logged")
})
}

module.exports = Commands;
