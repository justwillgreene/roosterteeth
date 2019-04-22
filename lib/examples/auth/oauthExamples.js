const RoosterTeeth = require('../../roosterteeth');

var roosterteeth = new RoosterTeeth();

let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// https://auth.roosterteeth.com/oauth/token
roosterteeth.oauth.token({
    'username': 'USERNAME',
    'password': 'PASSWORD',
    'client_id': 'AUTHCLIENTID'
}, printResponse);

// https://auth.roosterteeth.com/oauth/revoke
roosterteeth.oauth.revoke({'token': 'BEARER TOKEN'}, printResponse);