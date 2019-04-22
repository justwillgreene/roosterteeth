module.exports = function (client) {
    return {
        // https://community.roosterteeth.com/api/v1/communities
        list: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', subd: 'community.', url: 'communities'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', subd: 'community.', url: 'communities'}, {}, callback);
            }
        },
        // https://community.roosterteeth.com/api/v1/communities/autocomplete
        autocomplete: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', subd: 'community.', url: 'communities/autocomplete'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', subd: 'community.', url: 'communities/autocomplete'}, {}, callback);
            }
        },
        // https://community.roosterteeth.com/api/v1/communities/explore_feed
        explore_feed: function (callback) {
            client.request({verb: 'GET', subd: 'community.', url: 'communities/explore_feed' }, {}, callback);
        },
  
        withID: function (id) {
            return {
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY
                self: function (callback) {
                    client.request({verb: 'GET', subd: 'community.', url: 'communities/' + id}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY
                update: function (details, callback) {
                    client.request({verb: 'PATCH', subd: 'community.', url: 'communities' + id}, {body: details}, callback);
                },
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/chat
                chat: function (callback) {
                    client.request({verb: 'GET', subd: 'community.', url: 'communities/' + id + '/chat'}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/action_logs
                action_logs: function (callback) {
                    if (typeof callback == 'function')
                        client.request({verb: 'GET', subd: 'community.', url: 'communities/' + id + '/action_logs'}, {query: details}, callback);
                    else {
                        callback = details;
                        client.request({verb: 'GET', subd: 'community.', url: 'communities/' + id + '/action_logs'}, {}, callback);
                    }
                },

                // MEMBERSHIP BASED ROUTES
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/join
                join: function (callback) {
                    client.request({verb: 'POST', subd: 'community.', url: 'communities/' + id + '/join'}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/leave
                leave: function (callback) {
                    client.request({verb: 'POST', subd: 'community.', url: 'communities/' + id + '/leave'}, {}, callback);
                },
                // NEED TO BUILD THE DELETE ROUTE FOR MODERATORS
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/status
                status: function (callback) {
                    client.request({verb: 'GET', subd: 'community.', url: 'communities/' + id + '/status'}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/ban
                ban: function (details, callback) {
                    client.request({verb: 'PATCH', subd: 'community.', url: 'communities/' + id + '/ban'}, {body: details}, callback);
                },
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/unban
                unban: function (details, callback) {
                    client.request({verb: 'PATCH', subd: 'community.', url: 'communities/' + id + '/unban'}, {body: details}, callback);
                },
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/members
                members: function (details, callback) {
                    if (typeof callback == 'function')
                        client.request({verb: 'GET', subd: 'community.', url: 'communities/' + id + '/members'}, {query: details}, callback);
                    else {
                        callback = details;
                        client.request({verb: 'GET', subd: 'community.', url: 'communities/' + id + '/members'}, {}, callback);
                    }
                },
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/moderators
                moderators: function (callback) {
                    client.request({verb: 'GET', subd: 'community.', url: 'communities/' + id + '/moderators'}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/autocomplete
                autocomplete: function (details, callback) {
                    if (typeof callback == 'function')
                        client.request({verb: 'GET', subd: 'community.', url: 'communities/' + id + '/autocomplete'}, {query: details}, callback);
                    else {
                        callback = details;
                        client.request({verb: 'GET', subd: 'community.', url: 'communities/' + id + '/autocomplete'}, {}, callback);
                    }
                },

                // POSTS BASED ROUTES
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/posts
                posts: function (details, callback) {
                    client.request({verb: 'POST', subd: 'community.', url: 'communities/' + id + '/posts'}, {body: details}, callback);
                },
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/home_feed
                home_feed: function (callback) {
                    client.request({verb: 'GET', subd: 'community.', url: 'communities/' + id + '/home_feed'}, {}, callback);
                },

                // RELATIONSHIPS BASED ROUTES
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/follow
                follow: function (callback) {
                    client.request({verb: 'POST', subd: 'community.', url: 'communities/' + id + '/follow'}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/follow
                unfollow: function (callback) {
                    client.request({verb: 'DELETE', subd: 'community.', url: 'communities/' + id + '/follow'}, {}, callback);
                },

                // SOCIAL MEDIA BASED ROUTES
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/social_media
                social_media: function (callback) {
                    client.request({verb: 'GET', subd: 'community.', url: 'communities/' + id + '/social_media'}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/communities/COMMUNITY/social_media
                update_social_media: function (details, callback) {
                    client.request({verb: 'PATCH', subd: 'community.', url: 'communities/' + id + '/social_media'}, {body: details}, callback);
                },
                
                
                



            };
        }
    };
  };
  