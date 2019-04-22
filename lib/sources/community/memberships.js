module.exports = function (client) {
    return {
        // https://community.roosterteeth.com/api/v1/memberships/mine
        mine: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', subd: 'community.', url: 'memberships/mine'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', subd: 'community.', url: 'memberships/mine'}, {}, callback);
            }
        },
  
        withID: function (id) {
            return {
                // https://community.roosterteeth.com/api/v1/memberships/user/USER
                user: function (details, callback) {
                    if (typeof callback == 'function')
                        client.request({verb: 'GET', subd: 'community.', url: 'memberships/user/' + id}, {query: details}, callback);
                    else {
                        callback = details;
                        client.request({verb: 'GET', subd: 'community.', url: 'memberships/user/' + id}, {}, callback);
                    }
                },
            };
        }
    };
  };
  