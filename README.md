# roosterteeth

Node.js wrapper for the [Rooster Teeth](https://roosterteeth.com) suite of APIs.

# Index
1. [Usage](#usage)
2. [To Do](#to-do)
3. [Method Lists:](#method-lists)
    - [Auth](#auth-list)
    - [Business Service](#business-service-list)
    - [Community](#community-list)
    - [Lists](#lists-list)
    - [Notify](#notify-list)
    - [SVOD](#svod-list)
    - [WTC](#wtc-list)
4. [Method Examples:](#method-examples)
    - [Auth](#auth-examples)
    - [Business Service](#business-service-examples)
    - [Community](#community-examples)
    - [Lists](#lists-examples)
    - [Notify](#notify-examples)
    - [SVOD](#svod-examples)
    - [WTC](#wtc-examples)

## Usage
### Not Authenticated
```js
var RoosterTeeth = require('roosterteeth');

var roosterteeth = new RoosterTeeth();
```

### Authenticated
A number of methods require authorization. If you encounter 401 Unauthorized errors with your requests, generate an auth token with `roosterteeth.oauth.token({'username': 'USERNAME','password': 'PASSWORD','client_id': 'AUTHCLIENTID'}, callbackFunction);`. Apply this into the header of the request with `roosterteeth.settings.Authorization = 'Bearer #authorizationToken';`.
```js
var RoosterTeeth = require('roosterteeth');

var roosterteeth = new RoosterTeeth();
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';
```

## To Do
* [x] Enhance documentation with extra details.
* [ ] Add tests.
* [x] Supported Methods documentation.
* [ ] Add descriptions to supported Methods list tables.
* [x] Add support for the following sources: 
    * [x] Auth
    * [x] Business Service
    * [x] Community
    * [x] Lists
    * [x] Notify
    * [x] SVOD
    * [x] WTC


## Method Lists
### Auth List
#### Oauth
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| POST | Body (req.) | roosterteeth.oauth.token({details},callback) | Allows a user to generate an auth token | N/A |
| POST | Body (req.) | roosterteeth.oauth.revoke({details},callback) | Allows a user to revoke an auth token. | N/A |

### Business Service List
#### Me
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.me.list({details},callback) | Allows a user to access their own User object. | Req. |

### Community List
#### Achievements
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.achievements.list({details},callback) | Allows an admin to list all possible achievements | Req. |
| POST | Body (req.) | roosterteeth.achievements.create({details},callback) | Allows an admin to create achievements. | Req. |
| GET | N/A | roosterteeth.achievements.withID(#ID).self(callback) | Allows an admin to see all fields of an achievement 'type.' | Req. |
| PATCH | Body (req.) | roosterteeth.achievements.withID(#ID).update({details},callback) | Allows an admin to update any fields of an achievement 'type.' | Req. |
| DELETE | N/A | roosterteeth.achievements.withID(#ID).destroy(callback) | Allow an admin to delete an achievement 'type.' | Req. |


#### Admin Posts
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.admin_posts.list({details},callback) | Gets all flagged posts with pagination. | Req. |

#### Communities
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.communities.list({details},callback) | Retrieve a list of the most recent communities. | N/A |
| GET | Query (req.) | roosterteeth.communities.autocomplete({details},callback) | Autocomplete support for communities. | N/A |
| GET | N/A | roosterteeth.communities.explore_feed(callback) |  | N/A |
| GET | N/A | roosterteeth.communities.withID(#ID).self(callback) |  | N/A |
| PATCH | Body (req.) | roosterteeth.communities.withID(#ID).update({details},callback) | Allows an admin or moderator to update the core attributes for a community. | Req. |
| GET | N/A | roosterteeth.communities.withID(#ID).chat(callback) | Retrieve chat medatadata for community user |  |
| GET | Query (opt.) | roosterteeth.communities.withID(#ID).action_logs({details},callback) | Retrieve action logs for a community | Req. |
| POST | N/A | roosterteeth.communities.withID(#ID).join(callback) | The current user can join a public community. | Req. |
| POST | N/A | roosterteeth.communities.withID(#ID).leave(callback) | The current user can leave the given community. | Req. |
| GET | N/A | roosterteeth.communities.withID(#ID).status(callback) | Allows an admin or moderator to retrieve the status of a community. | Req. |
| PATCH | Body (req.) | roosterteeth.communities.withID(#ID).ban({details},callback) | Allows an admin or moderator to ban a user from a community. | Req. |
| PATCH | Body (req.) | roosterteeth.communities.withID(#ID).unban({details},callback) | Allows an admin or moderator to unban a user from a community. | Req. |
| GET | Query (opt.) | roosterteeth.communities.withID(#ID).members({details},callback) | Retrieve a list of community members. |  |
| GET | N/A | roosterteeth.communities.withID(#ID).moderators(callback) | Retrieve a list of community moderators. |  |
| GET | Query (req.) | roosterteeth.communities.withID(#ID).autocomplete({details},callback) | Searches for users in a community that match a query string. |  |
| POST | Body (req.) | roosterteeth.communities.withID(#ID).posts({details},callback) |  | Req. |
| GET | N/A | roosterteeth.communities.withID(#ID).home_feed(callback) |  |  |
| POST | N/A | roosterteeth.communities.withID(#ID).follow(callback) |  | Req. |
| DELETE | N/A | roosterteeth.communities.withID(#ID).unfollow(callback) |  | Req. |
| GET | N/A | roosterteeth.communities.withID(#ID).social_media(callback) |  | N/A |
| PATCH | Body (req.) | roosterteeth.communities.withID(#ID).update_social_media(callback) |  | Req. |


#### Invitations
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| POST | Body (req.) | roosterteeth.invitations.create({details},callback) |  | Req. |
| GET | Query (opt.) | roosterteeth.invitations.pending({details},callback) |  | Req. |
| GET | N/A | roosterteeth.invitations.withID(#ID).self(callback) |  | Req. |
| POST | N/A | roosterteeth.invitations.withID(#ID).accept(callback) |  | Req. |
| POST | N/A | roosterteeth.invitations.withID(#ID).seen(callback) |  | Req. |

#### Memberships
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.memberships.mine({details},callback) | Retrieve list of communities the current user belongs to. | Req. |
| GET | Query (opt.) | roosterteeth.memberships.withID(#ID).user({details},callback) | Retrieve list of communities a user belongs to. | N/A |

#### Posts
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | N/A | roosterteeth.posts.withID(#ID).self(callback) |  | N/A |
| PATCH | Body (req.) | roosterteeth.posts.withID(#ID).update({details},callback) |  | Req. |
| DELETE | N/A | roosterteeth.posts.withID(#ID).remove(callback) |  | Req. |
| POST | N/A | roosterteeth.posts.withID(#ID).like(callback) |  | Req. |
| DELETE | N/A | roosterteeth.posts.withID(#ID).unlike(callback) |  | Req. |

#### Relationships
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.relationships.withID(#ID).self({details},callback) |  | Req. |
| POST | Body (req.) | roosterteeth.relationships.withID(#ID).create({details},callback) |  | Req. |

#### Users
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.users.future_besties({details},callback) |  | Req. |
| GET | Query (req.) | roosterteeth.users.search({details},callback) |  | N/A |
| GET |  N/A| roosterteeth.users.withID(#ID).self(callback) |  | Req. |
| POST | Body (req.) | roosterteeth.users.withID(#ID).mute({details},callback) |  | Req. |
| GET | Query (opt.) | roosterteeth.users.withID(#ID).following({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.users.withID(#ID).followers({details},callback) |  | N/A |
| GET | N/A | roosterteeth.users.withID(#ID).communities(callback) |  | N/A |
| POST | N/A | roosterteeth.users.withID(#ID).follow(callback) |  | Req. |
| DELETE | N/A | roosterteeth.users.withID(#ID).unfollow(callback) |  | Req. |

### Lists List
#### Watchlist
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.watchlist.list({details},callback) |  | Req. |
| PUT | Query (req.) | roosterteeth.watchlist.add({details},callback) |  | Req. |
| DELETE | Query (req.) | roosterteeth.watchlist.remove({details},callback) |  | Req. |

### Notify List
#### Notifications
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.notifications.list({details},callback) | Retrieves a list of notifications that are active for the user. | Req. |

### SVOD List
#### Bonus Features
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.bonus_features.list({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.bonus_features.withID(#ID).self({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.bonus_features.withID(#ID).videos({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.bonus_features.withID(#ID).next({details},callback) |  | N/A |

#### Channels
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.channels.list({details},callback) |  |  |
| GET | N/A | roosterteeth.channels.withID(#ID).self(callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.channels.withID(#ID).shows({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.channels.withID(#ID).movies({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.channels.withID(#ID).product_collections({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.channels.withID(#ID).featured_items({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.channels.withID(#ID).episodes({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.channels.withID(#ID).livestreams({details},callback) |  | N/A |

#### Episodes
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.episodes.list({details},callback) |  | N/A |
| GET | N/A | roosterteeth.episodes.withID(#ID).self(callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.episodes.withID(#ID).related({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.episodes.withID(#ID).next({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.episodes.withID(#ID).videos({details},callback) |  | N/A |

#### Featured Items
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.featured_items.list({details},callback) |  | N/A |

#### Livestreams
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.livestreams.list({details},callback) |  | N/A |
| GET | N/A | roosterteeth.livestreams.withID(#ID).self(callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.livestreams.withID(#ID).schedule(callback) |  | N/A |

#### Marketing Banners
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.marketing_banners.list({details},callback) |  | N/A |

#### Schedule
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (req.) | roosterteeth.schedule.list({details}callback) |  | N/A |

#### Seasons
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | N/A | roosterteeth.seasons.withID(#ID).self(callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.seasons.withID(#ID).episodes({details},callback) |  | N/A |

#### Shows
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.shows.list({details},callback) |  | N/A |
| GET | N/A | roosterteeth.shows.withID(#ID).self(callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.shows.withID(#ID).seasons({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.shows.withID(#ID).bonus_features({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.shows.withID(#ID).related({details},callback) |  | N/A |
| GET | Query (opt.) | roosterteeth.shows.withID(#ID).product_collections({details},callback) |  | N/A |

#### Store Carousel
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | Query (opt.) | roosterteeth.store_carousel.list({details},callback) |  | N/A |

### WTC List
#### Played Positions
| Method | Query/Body | Call | Description | Auth |
| --- | --- | --- | --- | --- |
| GET | N/A | roosterteeth.played_positions.withID(#ID).self(callback) | Returns time in seconds that authenticated user has viewed episode corresponding to provided UUID. | Req. |

## Method Examples

For all of these examples, I will be using a callback function `printResponse` as defined below:
```js
let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}
```

### Auth Examples
#### Oauth
```js
// https://auth.roosterteeth.com/oauth/token
roosterteeth.oauth.token({
    'username': 'USERNAME',
    'password': 'PASSWORD',
    'client_id': 'AUTHCLIENTID'
}, printResponse);

// https://auth.roosterteeth.com/oauth/revoke
roosterteeth.oauth.revoke({'token': 'Bearer #authorizationToken'}, printResponse);
```

### Business Service Examples
#### Me
```js
// https://business-service.roosterteeth.com/api/v1/me
roosterteeth.me.list(printResponse);
```

### Community Examples
#### Achievements
```js
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

// https://community.roosterteeth.com/api/v1/achievements
roosterteeth.achievements.list(printResponse);
// https://community.roosterteeth.com/api/v1/achievements
roosterteeth.achievements.create({
    'achievement': {
        'title': 'title',
        'description': 'description',
        'url': 'https://something.com'
    }
},printResponse);

// https://community.roosterteeth.com/api/v1/achievements/ACHIEVEMENT
roosterteeth.achievements.withID('ID').self(printResponse);

// https://community.roosterteeth.com/api/v1/achievements/ACHIEVEMENT
roosterteeth.achievements.withID('ID').update({
    'achievement': {
        'title': 'title'
    }
}, printResponse);

// https://community.roosterteeth.com/api/v1/achievements/ACHIEVEMENT
roosterteeth.achievements.withID('ID').destroy(printResponse);
```

#### Admin Posts
```js
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

// https://community.roosterteeth.com/api/v1/admin_posts
roosterteeth.admin_posts.list(printResponse);
```

#### Communities
```js
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

// https://community.roosterteeth.com/api/v1/communities
roosterteeth.communities.list(printResponse);

// https://community.roosterteeth.com/api/v1/communities/autocomplete
roosterteeth.communities.autocomplete({'query':'always'},printResponse);

// https://community.roosterteeth.com/api/v1/communities/explore_feed
roosterteeth.communities.explore_feed(printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY
roosterteeth.communities.withID('ID').self(printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY
roosterteeth.communities.withID('ID').update({
    'community': {
        'contact_email': 'contactemail',
        'slug': 'slug',
        'name':'name',
        'description': 'description',
        'logo': 'logo.png',
        'header': 'header.png',
        'public': true,
        'active': false,
        'staff_community': false,
        'chat_enabled': false
    }
},printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/chat
roosterteeth.communities.withID('ID').chat(printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/action_logs
roosterteeth.communities.withID('ID').action_logs(printResponse);
roosterteeth.communities.withID('ID').action_logs({'limit': 5, 'cursor': null},printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/join
roosterteeth.communities.withID('ID').join(printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/leave
roosterteeth.communities.withID('ID').leave(printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/status
roosterteeth.communities.withID('ID').status(printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/ban
roosterteeth.communities.withID('ID').ban({'user_id':'USERID'}, printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/unban
roosterteeth.communities.withID('ID').unban({'user_id':'USERID'}, printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/members
roosterteeth.communities.withID('ID').members(printResponse);
roosterteeth.communities.withID('ID').members({'limit': 10, 'filters': {'member':'false'}},printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/moderators
roosterteeth.communities.withID('ID').moderators(printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/autocomplete
roosterteeth.communities.withID('ID').autocomplete({'query':'roost'}, printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/posts
roosterteeth.communities.withID('ID').posts({
    'post': {
        'title':'title',
        'body':'body'
    }
},printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/home_feed
roosterteeth.communities.withID('ID').home_feed(printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/follow
roosterteeth.communities.withID('ID').follow(printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/follow
roosterteeth.communities.withID('ID').unfollow(printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/social_media
roosterteeth.communities.withID('ID').social_media(printResponse);

// https://community.roosterteeth.com/api/v1/communities/COMMUNITY/social_media
roosterteeth.communities.withID('ID').update_social_media;
```

#### Invitations
```js
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

// https://community.roosterteeth.com/api/v1/invitations
roosterteeth.invitations.create({
    'invitation':{
        'community_id': 'community_id',
        'user_id': 'user_id',
        'sender_id': 'sender_id',
        'moderator': trus
    }
},printResponse);

// https://community.roosterteeth.com/api/v1/invitations/pending
roosterteeth.invitations.pending(printResponse);
roosterteeth.invitations.pending({'type':'moderator'},printResponse);

// https://community.roosterteeth.com/api/v1/invitations/INVITATION
roosterteeth.invitations.withID('ID').self(printResponse);

// https://community.roosterteeth.com/api/v1/invitations/INVITATION/accept
roosterteeth.invitations.withID('ID').accept(printResponse);

// https://community.roosterteeth.com/api/v1/invitations/INVITATION/seen
roosterteeth.invitations.withID('ID').seen(printResponse);
```

#### Memberships
```js
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

// https://community.roosterteeth.com/api/v1/memberships/mine
roosterteeth.memberships.mine(printResponse);
roosterteeth.memberships.mine({'limit':1},printResponse);

// https://community.roosterteeth.com/api/v1/memberships/user/USER
roosterteeth.memberships.withID('ID').user(printResponse);
roosterteeth.memberships.withID('ID').user({'limit':1},printResponse);
```

#### Posts
```js
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

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
```

#### Relationships
```js
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

// https://community.roosterteeth.com/api/v1/relationships/community/COMMUNITY
roosterteeth.relationships.withID('ID').self(printResponse);
roosterteeth.relationships.withID('ID').self({'limit':5, 'tag':'related'},printResponse);

// https://community.roosterteeth.com/api/v1/relationships/community/COMMUNITY
roosterteeth.relationships.withID('ID').create({
    'relationship': {
        'id': 'community_id',
        'tag': 'related'
    }
}, printResponse);
```

#### Users
```js
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

// https://community.roosterteeth.com/api/v1/users/future_besties
roosterteeth.users.future_besties(printResponse);
roosterteeth.users.future_besties({'limit': 10, 'post_limit':5},printResponse);

// https://community.roosterteeth.com/api/v1/users/search
roosterteeth.users.searchroosterteeth.users.future_besties({'q':'burnie' ,'limit': 10},printResponse);

// https://community.roosterteeth.com/api/v1/users/USER
roosterteeth.users.withID('ID').self(printResponse);

// https://community.roosterteeth.com/api/v1/users/USER/mute
roosterteeth.users.withID('ID').mute({'users': ['USERID']}, printResponse);

// https://community.roosterteeth.com/api/v1/users/USER/following
roosterteeth.users.withID('ID').following(printResponse);
roosterteeth.users.withID('ID').following({'limit': 10},printResponse);

// https://community.roosterteeth.com/api/v1/users/USER/followers
roosterteeth.users.withID('ID').followers(printResponse);
roosterteeth.users.withID('ID').followers({'limit': 10},printResponse);

// https://community.roosterteeth.com/api/v1/users/USER/communities
roosterteeth.users.withID('ID').communities(printResponse);

// https://community.roosterteeth.com/api/v1/users/USER/follow
roosterteeth.users.withID('ID').follow(printResponse);

// https://community.roosterteeth.com/api/v1/users/USER/follow
roosterteeth.users.withID('ID').unfollow(printResponse);
```

### Lists Examples
#### Watchlist
```js
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

// https://lists.roosterteeth.com/api/v1/watchlist
roosterteeth.watchlist.list(printResponse);

// https://lists.roosterteeth.com/api/v1/watchlist/add
roosterteeth.watchlist.add({'item_uuid':'6fbcf4e7-9845-4165-84ec-c6ca7fbd17a5','item_type':'episode'},printResponse);

// https://lists.roosterteeth.com/api/v1/watchlist/remove
roosterteeth.watchlist.remove({'item_uuid':'6fbcf4e7-9845-4165-84ec-c6ca7fbd17a5','item_type':'episode'},printResponse);
```

### Notify Examples
#### Notifications
```js
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

// https://notify.roosterteeth.com/api/v2/my/notifications
roosterteeth.notifications.list(printResponse);
roosterteeth.notifications.list({'per_page':1},printResponse);
```

### SVOD Examples
#### Bonus Features
```js
// https://svod-be.roosterteeth.com/api/v1/bonus_features
roosterteeth.bonus_features.list(printResponse);

// https://svod-be.roosterteeth.com/api/v1/bonus_features/BONUS_FEATURE
roosterteeth.bonus_features.withID('the-weird-place-2019-the-weirder-place').self(printResponse);

// https://svod-be.roosterteeth.com/api/v1/bonus_features/BONUS_FEATURE/videos
roosterteeth.bonus_features.withID('the-weird-place-2019-the-weirder-place').videos(printResponse);

// https://svod-be.roosterteeth.com/api/v1/bonus_features/BONUS_FEATURE/next
roosterteeth.bonus_features.withID('the-weird-place-2019-the-weirder-place').next(printResponse);
```

#### Channels
```js
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
```

#### Episodes
```js
// https://svod-be.roosterteeth.com/api/v1/episodes
roosterteeth.episodes.list(printResponse);
roosterteeth.episodes.list({'per_page':1, 'page':5},printResponse);
roosterteeth.episodes.list({'genre':'games reimagined'},printResponse);

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE
roosterteeth.episodes.withID('gameplay-2019-portal23').self(printResponse);

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/related
roosterteeth.episodes.withID('gameplay-2019-portal23').related(printResponse);
roosterteeth.episodes.withID('gameplay-2019-portal23').related({'per_page':1, 'page':5},printResponse);

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/next
roosterteeth.episodes.withID('gameplay-2019-portal23').next(printResponse);

// https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/videos
roosterteeth.episodes.withID('gameplay-2019-portal23').videos(printResponse);
```

#### Featured Items
```js
// https://svod-be.roosterteeth.com/api/v1/featured_items
roosterteeth.featured_items.list(printResponse);
```

#### Livestreams
```js
// https://svod-be.roosterteeth.com/api/v1/livestreams
roosterteeth.livestreams.list(printResponse);

// https://svod-be.roosterteeth.com/api/v1/livestreams/LIVESTREAM
roosterteeth.livestreams.withID('rt-tv').self(printResponse);

// https://svod-be.roosterteeth.com/api/v1/livestreams/LIVESTREAM/schedule
roosterteeth.livestreams.withID('rt-tv').schedules(printResponse);
```

#### Marketing Banners
```js
// https://svod-be.roosterteeth.com/api/v1/marketing-banners
roosterteeth.marketing_banners.list(printResponse);
```

#### Schedule
```js
// https://svod-be.roosterteeth.com/api/v1/schedule
roosterteeth.schedule.list({'from':'2019-04-20T04:00:00.000Z','to':'2019-04-27T04:00:00.000Z'},printResponse);
```

#### Seasons
```js
// https://svod-be.roosterteeth.com/api/v1/seasons/SEASON
roosterteeth.seasons.withID('red-vs-blue-season-17').self(printResponse);

// https://svod-be.roosterteeth.com/api/v1/seasons/SEASON/episodes
roosterteeth.seasons.withID('red-vs-blue-season-17').episodes(printResponse);
roosterteeth.seasons.withID('red-vs-blue-season-17').episodes({'per_page':1, 'page':5},printResponse);
```

#### Shows
```js
// https://svod-be.roosterteeth.com/api/v1/shows
roosterteeth.shows.list(printResponse);
roosterteeth.shows.list({'per_page':1, 'page':5},printResponse);

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
```

#### Store Carousel
```js
// https://svod-be.roosterteeth.com/api/v1/store-carousel
roosterteeth.store_carousel.list(printResponse);
```

### WTC Examples
#### Played Positions
```js
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

// https://wtc.roosterteeth.com/api/v1/my/played_positions/EPISODEUUID
roosterteeth.played_positions.withID('9bb7a8c2-8b32-445f-b586-6d934c887bc4').self(printResponse);
```