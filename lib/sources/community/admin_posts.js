module.exports = function (client) {
    return {
        // https://community.roosterteeth.com/api/v1/admin_posts
        list: function (details, callback) {
            if (typeof callback == 'function')
            client.request({verb: 'GET', subd: 'community.', url: 'admin_posts'}, {query: details}, callback);
            else {
            callback = details;
            client.request({verb: 'GET', subd: 'community.', url: 'admin_posts'}, {}, callback);
            }
        }
    };
  };
  