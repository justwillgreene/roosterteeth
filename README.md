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
    - [SVOD](#svod-list)
4. [Method Examples:](#method-examples)
    - [Auth](#auth-examples)
    - [Business Service](#business-service-examples)
    - [Community](#community-examples)
    - [Lists](#lists-examples)
    - [SVOD](#svod-examples)

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
* [ ] Add support for the following sources: 
    * [x] Auth
    * [x] Business Service
    * [x] Community
    * [x] Lists
    * [ ] Notify
    * [x] SVOD
    * [ ] WTC


## Method Lists
### Auth - List
#### Oauth
* roosterteeth.oauth.token;
* roosterteeth.oauth.revoke;

### Business Service - List
#### Me
* roosterteeth.me.list;

### Community - List
#### Achievements
* roosterteeth.achievements.list;
* roosterteeth.achievements.create;
* roosterteeth.achievements.withID(#ID).self;
* roosterteeth.achievements.withID(#ID).update;
* roosterteeth.achievements.withID(#ID).destroy;

#### Admin Posts
* roosterteeth.admin_posts.list;

#### Communities
* roosterteeth.communities.list;
* roosterteeth.communities.autocomplete;
* roosterteeth.communities.explore_feed;
* roosterteeth.communities.withID(#ID).self;
* roosterteeth.communities.withID(#ID).update;
* roosterteeth.communities.withID(#ID).chat;
* roosterteeth.communities.withID(#ID).action_logs;
* roosterteeth.communities.withID(#ID).join;
* roosterteeth.communities.withID(#ID).leave;
* roosterteeth.communities.withID(#ID).status;
* roosterteeth.communities.withID(#ID).ban;
* roosterteeth.communities.withID(#ID).unban;
* roosterteeth.communities.withID(#ID).members;
* roosterteeth.communities.withID(#ID).moderators;
* roosterteeth.communities.withID(#ID).autocomplete;
* roosterteeth.communities.withID(#ID).posts;
* roosterteeth.communities.withID(#ID).home_feed;
* roosterteeth.communities.withID(#ID).follow;
* roosterteeth.communities.withID(#ID).unfollow;
* roosterteeth.communities.withID(#ID).social_media;
* roosterteeth.communities.withID(#ID).update_social_media;

#### Invitations
* roosterteeth.invitations.create;
* roosterteeth.invitations.pending;
* roosterteeth.invitations.withID(#ID).self;
* roosterteeth.invitations.withID(#ID).accept;
* roosterteeth.invitations.withID(#ID).seen;

#### Memberships
* roosterteeth.memberships.mine;
* roosterteeth.memberships.withID(#ID).user;

#### Posts
* roosterteeth.posts.withID(#ID).self;
* roosterteeth.posts.withID(#ID).update;
* roosterteeth.posts.withID(#ID).like;
* roosterteeth.posts.withID(#ID).unlike;
#### Relationships
* roosterteeth.relationships.withID(#ID).self;
* roosterteeth.relationships.withID(#ID).create;
#### Users
* roosterteeth.users.future_besties;
* roosterteeth.users.search;
* roosterteeth.users.withID(#ID).self;
* roosterteeth.users.withID(#ID).mute;
* roosterteeth.users.withID(#ID).following;
* roosterteeth.users.withID(#ID).followers;
* roosterteeth.users.withID(#ID).communities;
* roosterteeth.users.withID(#ID).follow;
* roosterteeth.users.withID(#ID).unfollow;

### Lists - List
#### Watchlist
* roosterteeth.watchlist.list;

### SVOD - List
#### Bonus Features
* roosterteeth.bonus_features.list;
* roosterteeth.bonus_features.withID(#ID).self;
* roosterteeth.bonus_features.withID(#ID).videos;
* roosterteeth.bonus_features.withID(#ID).next;

#### Channels
* roosterteeth.channels.list;
* roosterteeth.channels.withID(#ID).self;
* roosterteeth.channels.withID(#ID).shows;
* roosterteeth.channels.withID(#ID).movies;
* roosterteeth.channels.withID(#ID).product_collections;
* roosterteeth.channels.withID(#ID).featured_items;
* roosterteeth.channels.withID(#ID).episodes;
* roosterteeth.channels.withID(#ID).livestreams;

#### Episodes
* roosterteeth.episodes.list;
* roosterteeth.episodes.withID(#ID).self;
* roosterteeth.episodes.withID(#ID).related;
* roosterteeth.episodes.withID(#ID).next;
* roosterteeth.episodes.withID(#ID).videos;

#### Livestreams
* roosterteeth.livestreams.list;
* roosterteeth.livestreams.withID(#ID).self;
* roosterteeth.livestreams.withID(#ID).schedule;

#### Seasons
* roosterteeth.seasons.withID(#ID).self;
* roosterteeth.seasons.withID(#ID).episodes;

#### Shows
* roosterteeth.shows.list;
* roosterteeth.shows.withID(#ID).self;
* roosterteeth.shows.withID(#ID).seasons;
* roosterteeth.shows.withID(#ID).bonus_features;
* roosterteeth.shows.withID(#ID).related;
* roosterteeth.shows.withID(#ID).product_collections;


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

### Auth - Examples
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

### Business Service - Examples
#### Me
```js
// https://business-service.roosterteeth.com/api/v1/me
roosterteeth.me.list(printResponse);
```

### Community - Examples
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

### Lists - Examples
#### Watchlist
```js
roosterteeth.settings.Authorization = 'Bearer #authorizationToken';

// https://lists.roosterteeth.com/api/v1/watchlist
roosterteeth.watchlist.list(printResponse);
```

### SVOD - Examples
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

#### Livestreams
```js
// https://svod-be.roosterteeth.com/api/v1/livestreams
roosterteeth.livestreams.list(printResponse);

// https://svod-be.roosterteeth.com/api/v1/livestreams/LIVESTREAM
roosterteeth.livestreams.withID('rt-tv').self(printResponse);

// https://svod-be.roosterteeth.com/api/v1/livestreams/LIVESTREAM/schedule
roosterteeth.livestreams.withID('rt-tv').schedules(printResponse);
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