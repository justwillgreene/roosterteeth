module.exports = function (client) {
    return {
        // https://notify.roosterteeth.com/api/v2/my/notifications
        list: function (details, callback) {
            if (typeof callback == 'function')
              client.request({verb: 'GET', subd: 'notify.', ext: '/api/v2/my', url: 'notifications'}, {query: details}, callback);
            else {
              callback = details;
              client.request({verb: 'GET', subd: 'notify.', ext: '/api/v2/my', url: 'notifications'}, {}, callback);
            }
          }
    }
}