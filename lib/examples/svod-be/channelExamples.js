const RoosterTeeth = require('../../roosterteeth');

var roosterteeth = new RoosterTeeth();

let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// https://svod-be.roosterteeth.com/api/v1/channels
roosterteeth.channels.list(printResponse);

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL
roosterteeth.channels.withID('rooster-teeth').self(printResponse);

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/shows
roosterteeth.channels.withID('rooster-teeth').shows(printResponse);
roosterteeth.channels.withID('rooster-teeth').shows({'per_page':1, 'page':5},printResponse);

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/movies
roosterteeth.channels.withID('rooster-teeth').movies(printResponse);

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/products
roosterteeth.channels.withID('rooster-teeth').product_collections(printResponse);

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/featured_items
roosterteeth.channels.withID('rooster-teeth').featured_items(printResponse);

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/episodes
roosterteeth.channels.withID('rooster-teeth').episodes(printResponse);
roosterteeth.channels.withID('rooster-teeth').episodes({'per_page':1, 'page':5},printResponse);

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/livestreams
roosterteeth.channels.withID('rooster-teeth').livestreams(printResponse);