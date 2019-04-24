module.exports = function (client) {
    return {
        // https://lists.roosterteeth.com/api/v1/watchlist
        list: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', subd: 'lists.', url: 'watchlist'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', subd: 'lists.', url: 'watchlist'}, {}, callback);
            }
        },
        // https://lists.roosterteeth.com/api/v1/watchlist/add
        add: function (details, callback) {
            client.request({verb: 'PUT', subd: 'lists.', url: 'watchlist/add'}, {body: details}, callback);
        },
        // https://lists.roosterteeth.com/api/v1/watchlist/add
        remove: function (details, callback) {
            client.request({verb: 'DELETE', subd: 'lists.', url: 'watchlist/remove'}, {body: details}, callback);
        }
    }
}