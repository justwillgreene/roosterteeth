const RoosterTeeth = require('../roosterteeth');

var roosterteeth = new RoosterTeeth();

// https://svod-be.roosterteeth.com/api/v1/seasons/SEASON
roosterteeth.seasons.withID('red-vs-blue-season-17').self(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/seasons/SEASON/episodes
roosterteeth.seasons.withID('red-vs-blue-season-17').episodes(function(){
    console.log(arguments[1].data);
});