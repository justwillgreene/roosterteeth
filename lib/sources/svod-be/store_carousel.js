module.exports = function (client) {
    return {
      // https://svod-be.roosterteeth.com/api/v1/store-carousel
      list: function (details, callback) {
        if (typeof callback == 'function')
          client.request({verb: 'GET', url: 'store-carousel'}, {query: details}, callback);
        else {
          callback = details;
          client.request({verb: 'GET', url: 'store-carousel'}, {}, callback);
        }
      }
    }
}