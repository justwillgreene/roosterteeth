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