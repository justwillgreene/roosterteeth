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

// https://community.roosterteeth.com/api/v1/admin_posts
roosterteeth.posts.withID('ID').self(printResponse);

// https://community.roosterteeth.com/api/v1/posts/POST
roosterteeth.posts.withID('ID').update({
    'post':{
        'title': 'title'
    }
},printResponse);

// https://community.roosterteeth.com/api/v1/posts/POST
roosterteeth.posts.withID('ID').remove(printResponse);

// https://community.roosterteeth.com/api/v1/posts/POST/like
roosterteeth.posts.withID('ID').like(printResponse);

// https://community.roosterteeth.com/api/v1/posts/POST/unlike
roosterteeth.posts.withID('ID').unlike(printResponse);