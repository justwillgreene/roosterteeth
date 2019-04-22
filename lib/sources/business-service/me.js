module.exports = function (client) {
    return {
        // https://business-service.roosterteeth.com/api/v1/me
        list: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', subd: 'business-service.', url: 'me'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', subd: 'business-service.', url: 'me'}, {}, callback);
            }
        },
    }
}