const RoosterTeeth = require('../roosterteeth');

var roosterteeth = new RoosterTeeth();

// https://svod-be.roosterteeth.com/api/v1/episodes
roosterteeth.episodes.list(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE
roosterteeth.episodes.withID('gameplay-2019-portal23').self(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/related
roosterteeth.episodes.withID('gameplay-2019-portal23').related(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/next
roosterteeth.episodes.withID('gameplay-2019-portal23').next(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/videos
roosterteeth.episodes.withID('gameplay-2019-portal23').videos(function(){
    console.log(arguments[1].data);
});