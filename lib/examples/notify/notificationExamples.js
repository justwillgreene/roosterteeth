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

// https://notify.roosterteeth.com/api/v2/my/notifications
roosterteeth.notifications.list(printResponse);
roosterteeth.notifications.list({'per_page':1},printResponse);