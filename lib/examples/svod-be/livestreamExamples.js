const RoosterTeeth = require('../../roosterteeth');

var roosterteeth = new RoosterTeeth();

let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// https://svod-be.roosterteeth.com/api/v1/livestreams
roosterteeth.livestreams.list(printResponse);

// https://svod-be.roosterteeth.com/api/v1/livestreams/LIVESTREAM
roosterteeth.livestreams.withID('rt-tv').self(printResponse);

// https://svod-be.roosterteeth.com/api/v1/livestreams/LIVESTREAM/schedule
roosterteeth.livestreams.withID('rt-tv').schedules(printResponse);