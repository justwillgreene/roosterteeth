const RoosterTeeth = require('../../roosterteeth');

var roosterteeth = new RoosterTeeth();
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// https://wtc.roosterteeth.com/api/v1/my/played_positions/EPISODEUUID
roosterteeth.played_positions.withID('9bb7a8c2-8b32-445f-b586-6d934c887bc4').self(printResponse);