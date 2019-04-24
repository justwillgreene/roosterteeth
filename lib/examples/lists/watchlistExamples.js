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

// https://lists.roosterteeth.com/api/v1/watchlist
roosterteeth.watchlist.list(printResponse);

// https://lists.roosterteeth.com/api/v1/watchlist/add
roosterteeth.watchlist.add({'item_uuid':'6fbcf4e7-9845-4165-84ec-c6ca7fbd17a5','item_type':'episode'},printResponse);

// https://lists.roosterteeth.com/api/v1/watchlist/remove
roosterteeth.watchlist.remove({'item_uuid':'6fbcf4e7-9845-4165-84ec-c6ca7fbd17a5','item_type':'episode'},printResponse);