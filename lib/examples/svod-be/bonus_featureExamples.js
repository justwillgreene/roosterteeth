const RoosterTeeth = require('../../roosterteeth');

var roosterteeth = new RoosterTeeth();

let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// https://svod-be.roosterteeth.com/api/v1/bonus_features
roosterteeth.bonus_features.list(printResponse);

// https://svod-be.roosterteeth.com/api/v1/bonus_features/BONUS_FEATURE
roosterteeth.bonus_features.withID('the-weird-place-2019-the-weirder-place').self(printResponse);

// https://svod-be.roosterteeth.com/api/v1/bonus_features/BONUS_FEATURE/videos
roosterteeth.bonus_features.withID('the-weird-place-2019-the-weirder-place').videos(printResponse);

// https://svod-be.roosterteeth.com/api/v1/bonus_features/BONUS_FEATURE/next
roosterteeth.bonus_features.withID('the-weird-place-2019-the-weirder-place').next(printResponse);