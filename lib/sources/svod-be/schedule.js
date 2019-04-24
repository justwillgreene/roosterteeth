module.exports = function (client) {
    return {
      // https://svod-be.roosterteeth.com/api/v1/schedule
      list: function (details, callback) {
        if (typeof callback == 'function')
          client.request({verb: 'GET', url: 'schedule'}, {query: details}, callback);
        else {
          callback = details;
          client.request({verb: 'GET', url: 'schedule'}, {}, callback);
        }
      },
    }
}