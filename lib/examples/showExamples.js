const RoosterTeeth = require('../roosterteeth');

var roosterteeth = new RoosterTeeth();

// https://svod-be.roosterteeth.com/api/v1/shows
roosterteeth.shows.list(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/shows/SHOW
roosterteeth.channels.list.withID('rwby').self(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/shows/SHOW/seasons
roosterteeth.channels.list.withID('rwby').seasons(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/shows/SHOW/bonus_features
roosterteeth.channels.list.withID('rwby').bonus_features(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/shows/SHOW/related
roosterteeth.channels.list.withID('rwby').related(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/shows/SHOW/products
roosterteeth.channels.list.withID('rwby').product_collections(function(){
    console.log(arguments[1].data);
});