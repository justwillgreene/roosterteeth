module.exports = function (client) {
    return {
      // https://svod-be.roosterteeth.com/api/v1/featured_items
      list: function (details, callback) {
        if (typeof callback == 'function')
          client.request({verb: 'GET', url: 'featured_items'}, {query: details}, callback);
        else {
          callback = details;
          client.request({verb: 'GET', url: 'featured_items'}, {}, callback);
        }
      }
    }
}