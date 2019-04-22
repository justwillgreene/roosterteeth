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
    }
}