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

// https://community.roosterteeth.com/api/v1/relationships/community/COMMUNITY
roosterteeth.relationships.withID('ID').self(printResponse);
roosterteeth.relationships.withID('ID').self({'limit':5, 'tag':'related'},printResponse);

// https://community.roosterteeth.com/api/v1/relationships/community/COMMUNITY
roosterteeth.relationships.withID('ID').create({
    'relationship': {
        'id': 'community_id',
        'tag': 'related'
    }
}, printResponse);