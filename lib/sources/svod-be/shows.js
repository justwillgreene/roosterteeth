module.exports = function (client) {
    return {
      // https://svod-be.roosterteeth.com/api/v1/shows
      list: function (details, callback) {
        if (typeof callback == 'function')
          client.request({verb: 'GET', url: 'shows'}, {query: details}, callback);
        else {
          callback = details;
          client.request({verb: 'GET', url: 'shows'}, {}, callback);
        }
      },
  
      withID: function (id) {
        return {
          // https://svod-be.roosterteeth.com/api/v1/shows/SHOW
          self: function (callback) {
            client.request({verb: 'GET', url: 'shows/' + id}, {}, callback);
          },
          // https://svod-be.roosterteeth.com/api/v1/shows/SHOW/seasons
          seasons: function (details, callback) {
            if (typeof callback == 'function')
              client.request({verb: 'GET', url: 'shows/' + id + '/seasons'}, {query: details}, callback);
            else {
              callback = details;
              client.request({verb: 'GET', url: 'shows/' + id + '/seasons'}, {}, callback);
            }
          },
          // https://svod-be.roosterteeth.com/api/v1/shows/SHOW/bonus_features
          bonus_features: function (details, callback) {
            if (typeof callback == 'function')
              client.request({verb: 'GET', url: 'shows/' + id + '/bonus_features'}, {query: details}, callback);
            else {
              callback = details;
              client.request({verb: 'GET', url: 'shows/' + id + '/bonus_features'}, {}, callback);
            }
          },
          // https://svod-be.roosterteeth.com/api/v1/shows/SHOW/related
          related: function (details, callback) {
            if (typeof callback == 'function')
              client.request({verb: 'GET', url: 'shows/' + id + '/related'}, {query: details}, callback);
            else {
              callback = details;
              client.request({verb: 'GET', url: 'shows/' + id + '/related'}, {}, callback);
            }
          },
          // https://svod-be.roosterteeth.com/api/v1/shows/SHOW/products
          product_collections: function (details, callback) {
            if (typeof callback == 'function')
              client.request({verb: 'GET', url: 'shows/' + id + '/products'}, {query: details}, callback);
            else {
              callback = details;
              client.request({verb: 'GET', url: 'shows/' + id + '/products'}, {}, callback);
            }
          }
        };
      }
    };
  };
  