module.exports = function (client) {
    return {
      // https://svod-be.roosterteeth.com/api/v1/marketing-banners
      list: function (details, callback) {
        if (typeof callback == 'function')
          client.request({verb: 'GET', url: 'marketing-banners'}, {query: details}, callback);
        else {
          callback = details;
          client.request({verb: 'GET', url: 'marketing-banners'}, {}, callback);
        }
      }
    }
}