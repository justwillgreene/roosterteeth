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

// https://community.roosterteeth.com/api/v1/achievements
roosterteeth.achievements.list(printResponse);
// https://community.roosterteeth.com/api/v1/achievements
roosterteeth.achievements.create({
    'achievement': {
        'title': 'title',
        'description': 'description',
        'url': 'https://something.com'
    }
},printResponse);

// https://community.roosterteeth.com/api/v1/achievements/ACHIEVEMENT
roosterteeth.achievements.withID('ID').self(printResponse);

// https://community.roosterteeth.com/api/v1/achievements/ACHIEVEMENT
roosterteeth.achievements.withID('ID').update({
    'achievement': {
        'title': 'title'
    }
}, printResponse);

// https://community.roosterteeth.com/api/v1/achievements/ACHIEVEMENT
roosterteeth.achievements.withID('ID').destroy(printResponse);