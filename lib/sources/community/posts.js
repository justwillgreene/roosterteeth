module.exports = function (client) {
    return {
        withID: function (id) {
            return {
                // https://community.roosterteeth.com/api/v1/posts/POST
                self: function (callback) {
                    client.request({verb: 'GET', subd: 'community.', url: 'posts/' + id}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/posts/POST
                update: function (details, callback) {
                    client.request({verb: 'PATCH', subd: 'community.', url: 'posts/' + id}, {body: details}, callback);
                },
                // https://community.roosterteeth.com/api/v1/posts/POST
                remove: function (callback) {
                    client.request({verb: 'DELETE', subd: 'community.', url: 'posts/' + id}, {}, callback);
                },

                // RELATIONSHIPS BASED ROUTES
                // https://community.roosterteeth.com/api/v1/posts/POST/like
                like: function (callback) {
                    client.request({verb: 'POST', subd: 'community.', url: 'posts/' + id + '/like'}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/posts/POST/like
                unlike: function (callback) {
                    client.request({verb: 'DELETE', subd: 'community.', url: 'posts/' + id + '/like'}, {}, callback);
                },
            };
        }
    };
  };
  