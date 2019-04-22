module.exports = function (client) {
    return {
        // https://community.roosterteeth.com/api/v1/users/future_besties
        future_besties: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', subd: 'community.', url: 'users/future_besties'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', subd: 'community.', url: 'users/future_besties'}, {}, callback);
            }
        },
        // https://community.roosterteeth.com/api/v1/users/search
        search: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', subd: 'community.', url: 'users/search'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', subd: 'community.', url: 'users/search'}, {}, callback);
            }
        },
        withID: function (id) {
            return {
                // https://community.roosterteeth.com/api/v1/users/USER
                self: function (callback) {
                    client.request({verb: 'GET', subd: 'community.', url: 'users/' + id}, {}, callback);
                },

                // RELATIONSHIPS BASED ROUTES
                // https://community.roosterteeth.com/api/v1/users/USER/mute
                mute: function (callback) {
                    client.request({verb: 'POST', subd: 'community.', url: 'users/' + id + '/mute'}, {}, callback);
                },
                // ADD UNMUTE
                // ADD MUTED
                // https://community.roosterteeth.com/api/v1/users/USER/following
                following: function (details, callback) {
                    if (typeof callback == 'function')
                        client.request({verb: 'GET', subd: 'community.', url: 'users/' + id + '/following'}, {query: details}, callback);
                    else {
                        callback = details;
                        client.request({verb: 'GET', subd: 'community.', url: 'users/' + id + '/following'}, {}, callback);
                    }
                },
                // https://community.roosterteeth.com/api/v1/users/USER/followers
                followers: function (details, callback) {
                    if (typeof callback == 'function')
                        client.request({verb: 'GET', subd: 'community.', url: 'users/' + id + '/followers'}, {query: details}, callback);
                    else {
                        callback = details;
                        client.request({verb: 'GET', subd: 'community.', url: 'users/' + id + '/followers'}, {}, callback);
                    }
                },
                // https://community.roosterteeth.com/api/v1/users/USER/communities
                communities: function (callback) {
                    client.request({verb: 'GET', subd: 'community.', url: 'users/' + id + '/communities'}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/users/USER/follow
                follow: function (callback) {
                    client.request({verb: 'POST', subd: 'community.', url: 'users/' + id + '/follow'}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/users/USER/follow
                unfollow: function (callback) {
                    client.request({verb: 'DELETE', subd: 'community.', url: 'users/' + id + '/follow'}, {}, callback);
                },

            };
        }
    };
  };
  