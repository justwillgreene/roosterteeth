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

// https://community.roosterteeth.com/api/v1/invitations
roosterteeth.invitations.create({
    'invitation':{
        'community_id': 'community_id',
        'user_id': 'user_id',
        'sender_id': 'sender_id',
        'moderator': trus
    }
},printResponse);

// https://community.roosterteeth.com/api/v1/invitations/pending
roosterteeth.invitations.pending(printResponse);
roosterteeth.invitations.pending({'type':'moderator'},printResponse);

// https://community.roosterteeth.com/api/v1/invitations/INVITATION
roosterteeth.invitations.withID('ID').self(printResponse);

// https://community.roosterteeth.com/api/v1/invitations/INVITATION/accept
roosterteeth.invitations.withID('ID').accept(printResponse);

// https://community.roosterteeth.com/api/v1/invitations/INVITATION/seen
roosterteeth.invitations.withID('ID').seen(printResponse);