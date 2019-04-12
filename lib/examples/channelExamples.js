const RoosterTeeth = require('../roosterteeth');

var roosterteeth = new RoosterTeeth();

// https://svod-be.roosterteeth.com/api/v1/channels
roosterteeth.channels.list(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL
roosterteeth.channels.withID('rooster-teeth').self(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/shows
roosterteeth.channels.withID('rooster-teeth').shows(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/movies
roosterteeth.channels.withID('rooster-teeth').movies(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/products
roosterteeth.channels.withID('rooster-teeth').product_collections(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/featured_items
roosterteeth.channels.withID('rooster-teeth').featured_items(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/episodes
roosterteeth.channels.withID('rooster-teeth').episodes(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/livestreams
roosterteeth.channels.withID('rooster-teeth').livestreams(function(){
    console.log(arguments[1].data);
});