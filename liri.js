// requirements and variables
require("./.env").config();
var keys = require("./keys.js");
var spotify = ("node-spotify-api");
var Spotify = new Spotify(keys.spotify);
var liri = require("liri");
var fs = require("fs");
var moment = require("moment");
var action = process.argv[2];
var option = process.argv[3];
var searchOption = "";
console.log("hello");
// function for running through options
var nodeRequest = "";
for (i = 0;i < process.argv.length;i++) {
    nodeRequest += (process.argv[i] + " ");
};

for (i = 3; i < process.argv.length; i++) {
    searchOption += (process.argv[i] = " ");
};

searchOption = searchOption.trim();

switch (action) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhat();
        break;
    default:
        break;
}
// spotify start
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id:"5a9341f66285463bbd750572cd33637d",
  secret: "3d14cdfc6d7d49bda6352a81726965cf"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

// spotify end


// search functions
function concertThis(){
    if (!searchOption) {
        searchOption = "Nipsey Hussle"
    }
    // api call
    request ()

    if (JSON.parse(body)[0] ===undefined) {
        console.log("No Shows detected")
    }
    else{
        console.log("Hello");
    }
}

inquirer.prompt([{
    type:"text",
    message: "How May I help you?",
    name:"Check",
}

]);

spotify.prompt();