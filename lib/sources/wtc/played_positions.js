module.exports = function (client) {
    return {
          withID: function (id) {
            return {
              // https://wtc.roosterteeth.com/api/v1/my/played_positions/EPISODEUUID
              self: function (details, callback) {
                if (typeof callback == 'function') {
                  client.request({verb: 'GET', subd: 'wtc.', ext: '/api/v1/my', url: 'played_positions/mget/' + id}, {query: details}, callback);
                } else {
                  callback = details;
                  client.request({verb: 'GET', subd: 'wtc.', ext: '/api/v1/my', url: 'played_positions/mget/' + id}, {}, callback);
                }
              }
            }
        }
    }
}