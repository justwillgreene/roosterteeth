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

// https://community.roosterteeth.com/api/v1/memberships/mine
roosterteeth.memberships.mine(printResponse);
roosterteeth.memberships.mine({'limit':1},printResponse);

// https://community.roosterteeth.com/api/v1/memberships/user/USER
roosterteeth.memberships.withID('ID').user(printResponse);
roosterteeth.memberships.withID('ID').user({'limit':1},printResponse);