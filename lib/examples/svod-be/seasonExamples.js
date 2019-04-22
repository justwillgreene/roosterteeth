const RoosterTeeth = require('../../roosterteeth');

var roosterteeth = new RoosterTeeth();

let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// https://svod-be.roosterteeth.com/api/v1/seasons/SEASON
roosterteeth.seasons.withID('red-vs-blue-season-17').self(printResponse);

// https://svod-be.roosterteeth.com/api/v1/seasons/SEASON/episodes
roosterteeth.seasons.withID('red-vs-blue-season-17').episodes(printResponse);
roosterteeth.seasons.withID('red-vs-blue-season-17').episodes({'per_page':1, 'page':5},printResponse);