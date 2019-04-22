const RoosterTeeth = require('../../roosterteeth');

var roosterteeth = new RoosterTeeth();

let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// https://svod-be.roosterteeth.com/api/v1/episodes
roosterteeth.episodes.list(printResponse);
roosterteeth.episodes.list({'per_page':1, 'page':5},printResponse);

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE
roosterteeth.episodes.withID('gameplay-2019-portal23').self(printResponse);

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/related
roosterteeth.episodes.withID('gameplay-2019-portal23').related(printResponse);
roosterteeth.episodes.withID('gameplay-2019-portal23').related({'per_page':1, 'page':5},printResponse);

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/next
roosterteeth.episodes.withID('gameplay-2019-portal23').next(printResponse);

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/videos
roosterteeth.episodes.withID('gameplay-2019-portal23').videos(printResponse);