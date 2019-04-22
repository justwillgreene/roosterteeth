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
// https://community.roosterteeth.com/api/v1/users/future_besties
roosterteeth.users.future_besties(printResponse);
roosterteeth.users.future_besties({'limit': 10, 'post_limit':5},printResponse);

// https://community.roosterteeth.com/api/v1/users/search
roosterteeth.users.searchroosterteeth.users.future_besties({'q':'burnie' ,'limit': 10},printResponse);

// https://community.roosterteeth.com/api/v1/users/USER
roosterteeth.users.withID('ID').self(printResponse);

// https://community.roosterteeth.com/api/v1/users/USER/mute
roosterteeth.users.withID('ID').mute({'users': ['USERID']}, printResponse);

// https://community.roosterteeth.com/api/v1/users/USER/following
roosterteeth.users.withID('ID').following(printResponse);
roosterteeth.users.withID('ID').following({'limit': 10},printResponse);

// https://community.roosterteeth.com/api/v1/users/USER/followers
roosterteeth.users.withID('ID').followers(printResponse);
roosterteeth.users.withID('ID').followers({'limit': 10},printResponse);

// https://community.roosterteeth.com/api/v1/users/USER/communities
roosterteeth.users.withID('ID').communities(printResponse);

// https://community.roosterteeth.com/api/v1/users/USER/follow
roosterteeth.users.withID('ID').follow(printResponse);

// https://community.roosterteeth.com/api/v1/users/USER/follow
roosterteeth.users.withID('ID').unfollow(printResponse);