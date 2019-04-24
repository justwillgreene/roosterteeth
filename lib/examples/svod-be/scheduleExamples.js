const RoosterTeeth = require('../../roosterteeth');

var roosterteeth = new RoosterTeeth();

let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// https://svod-be.roosterteeth.com/api/v1/schedule
roosterteeth.schedule.list({'from':'2019-04-20T04:00:00.000Z','to':'2019-04-27T04:00:00.000Z'},printResponse);
