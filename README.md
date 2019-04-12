# roosterteeth

Node.js wrapper for the [Rooster Teeth](https://roosterteeth.com) API.

## Usage

```js
var RoosterTeeth = require('roosterteeth');

var roosterteeth = new RoosterTeeth();
```

## To Do

* Enhance documentation with extra details and links to the official Rooster Teeth API documentation
* Add tests.
* Supported Methods documentation.

## Supported Methods
* Bonus_Features
* Channels
* Episodes
* Livestreams
* Seasons
* Shows



## Examples

View /lib/examples for complete examples of supported methods.

### Bonus Features
```js
// https://svod-be.roosterteeth.com/api/v1/bonus_features
roosterteeth.bonus_features.list(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/bonus_features/BONUS_FEATURE
roosterteeth.bonus_features.withID('the-weird-place-2019-the-weirder-place').self(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/bonus_features/BONUS_FEATURE/videos
roosterteeth.bonus_features.withID('the-weird-place-2019-the-weirder-place').videos(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/bonus_features/BONUS_FEATURE/next
roosterteeth.bonus_features.withID('the-weird-place-2019-the-weirder-place').next(function(){
    console.log(arguments[1].data);
});
```

### Channels
```js
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
```

### Episodes
```js
// https://svod-be.roosterteeth.com/api/v1/episodes
roosterteeth.episodes.list(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE
roosterteeth.episodes.withID('gameplay-2019-portal23').self(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/related
roosterteeth.episodes.withID('gameplay-2019-portal23').related(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/next
roosterteeth.episodes.withID('gameplay-2019-portal23').next(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/videos
roosterteeth.episodes.withID('gameplay-2019-portal23').videos(function(){
    console.log(arguments[1].data);
});
```

### Livestreams
```js
// https://svod-be.roosterteeth.com/api/v1/livestreams
roosterteeth.livestreams.list(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/livestreams/LIVESTREAM
roosterteeth.livestreams.withID('rt-tv').self(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/livestreams/LIVESTREAM/schedule
roosterteeth.livestreams.withID('rt-tv').schedules(function(){
    console.log(arguments[1].data);
});
```

### Seasons
```js
// https://svod-be.roosterteeth.com/api/v1/seasons/SEASON
roosterteeth.seasons.withID('red-vs-blue-season-17').self(function(){
    console.log(arguments[1].data);
});

// https://svod-be.roosterteeth.com/api/v1/seasons/SEASON/episodes
roosterteeth.seasons.withID('red-vs-blue-season-17').episodes(function(){
    console.log(arguments[1].data);
});
```

### Shows
```js
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
```

### Objects
* channel
* show
* season
* episode
* livestream
* bonus_feature
* video
* product_collection
* featured_item