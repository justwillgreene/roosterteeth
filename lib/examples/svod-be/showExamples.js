const RoosterTeeth = require('../../roosterteeth');

var roosterteeth = new RoosterTeeth();

let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// https://svod-be.roosterteeth.com/api/v1/shows
roosterteeth.shows.list(printResponse);
roosterteeth.shows.list({'per_page':1, 'page':5},printResponse);
roosterteeth.shows.list({'genres':'Rooster Teeth Originals'},printResponse);
roosterteeth.shows.list({'pay_only':true},printResponse);


// https://svod-be.roosterteeth.com/api/v1/shows/SHOW
roosterteeth.shows.withID('rwby').self(printResponse);

// https://svod-be.roosterteeth.com/api/v1/shows/SHOW/seasons
roosterteeth.shows.withID('rwby').seasons(printResponse);
roosterteeth.shows.withID('rwby').seasons({'per_page':1, 'page':5},printResponse);

// https://svod-be.roosterteeth.com/api/v1/shows/SHOW/bonus_features
roosterteeth.shows.withID('rwby').bonus_features(printResponse);

// https://svod-be.roosterteeth.com/api/v1/shows/SHOW/related
roosterteeth.shows.withID('rwby').related(printResponse);
roosterteeth.shows.withID('rwby').related({'per_page':1, 'page':5},printResponse);

// https://svod-be.roosterteeth.com/api/v1/shows/SHOW/products
roosterteeth.shows.withID('rwby').product_collections(printResponse);