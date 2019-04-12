# roosterteeth

Node.js wrapper for the [Rooster Teeth](https://roosterteeth.com) API.

## Usage

```js
var RoosterTeeth = require('roosterteeth');

var roosterteeth = new RoosterTeeth({});
```

## To Do

* Enhance documentation with extra details and links to the official Rooster Teeth API documentation
* Add tests.
* Supported Methods documentation.

### Channels

All
* roosterteeth.channels.list;

Single

```js
roosterteeth.channels.withID('rooster-teeth').self(function(argu){
    const arg = arguments[1];
    console.log(arg);
});
```
* roosterteeth.channels.withID(id).details; - Returns Channel
* roosterteeth.channels.withID(id).shows; - Returns Show
* roosterteeth.channels.withID(id).movies; - Returns Movie
* roosterteeth.channels.withID(id).product_collections; - Returns Product Collection
* roosterteeth.channels.withID(id).featured_items; - Returns Featured Item
* roosterteeth.channels.withID(id).episodes; - Returns Episode
* roosterteeth.channels.withID(id).livestreams; - Returns Livestream


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