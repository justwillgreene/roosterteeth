const RoosterTeeth = require('../roosterteeth');

var roosterteeth = new RoosterTeeth();

// https://svod-be.roosterteeth.com/api/v1/livestreams
roosterteeth.livestreams.list(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/livestreams/LIVESTREAM
roosterteeth.livestreams.withID('rt-tv').self(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/livestreams/LIVESTREAM/schedule
roosterteeth.livestreams.withID('rt-tv').schedules(function(){
    console.log(arguments[1].data);
});