module.exports = function (client) {
    return {
        // https://community.roosterteeth.com/api/v1/achievements
        list: function (details, callback) {
            if (typeof callback == 'function')
            client.request({verb: 'GET', subd: 'community.', url: 'achievements'}, {query: details}, callback);
            else {
            callback = details;
            client.request({verb: 'GET', subd: 'community.', url: 'achievements'}, {}, callback);
            }
        },
        // https://community.roosterteeth.com/api/v1/achievements
        create: function (details, callback) {
            client.request({verb: 'POST', subd: 'community.', url: 'achievements'}, {body: details}, callback);
        },
  
        withID: function (id) {
            return {
            // https://community.roosterteeth.com/api/v1/achievements/ACHIEVEMENT
            self: function (callback) {
                client.request({verb: 'GET', subd: 'community.', url: 'achievements/' + id}, {}, callback);
            },
            // https://community.roosterteeth.com/api/v1/achievements/ACHIEVEMENT
            update: function (details, callback) {
                client.request({verb: 'PATCH', subd: 'community.', url: 'achievements/' + id}, {body: details}, callback);
            },
            // https://community.roosterteeth.com/api/v1/achievements/ACHIEVEMENT
            destroy: function (callback) {
                client.request({verb: 'DELETE', subd: 'community.', url: 'achievements/' + id}, {}, callback);
            }
            };
        }
    };
  };
  