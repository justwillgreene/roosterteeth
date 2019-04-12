const RoosterTeeth = require('../roosterteeth');

var roosterteeth = new RoosterTeeth();

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