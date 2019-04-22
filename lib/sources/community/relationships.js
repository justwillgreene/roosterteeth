module.exports = function (client) {
    return {
        withID: function (id) {
            return {
                // https://community.roosterteeth.com/api/v1/relationships/community/COMMUNITY
                self: function (details, callback) {
                    if (typeof callback == 'function')
                        client.request({verb: 'GET', subd: 'community.', url: 'relationships/community/' + id }, {query: details}, callback);
                    else {
                        callback = details;
                        client.request({verb: 'GET', subd: 'community.', url: 'relationships/community/' + id }, {}, callback);
                    }
                },
                // https://community.roosterteeth.com/api/v1/relationships/community/COMMUNITY
                create: function (details, callback) {
                    client.request({verb: 'POST', subd: 'community.', url: 'relationships/community/' + id }, {body: details}, callback);
                }
                // ADD REMOVE
            };
        }
    };
  };
  