module.exports = function (client) {
    return {
      // https://svod-be.roosterteeth.com/api/v1/channels
      list: function (details, callback) {
        if (typeof callback == 'function')
          client.request({verb: 'GET', url: 'channels'}, {query: details}, callback);
        else {
          callback = details;
          client.request({verb: 'GET', url: 'channels'}, {}, callback);
        }
      },
  
      withID: function (id) {
        return {
          // https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL
          self: function (callback) {
            client.request({verb: 'GET', url: 'channels/' + id}, {}, callback);
          },
          // https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/shows
          shows: function (details, callback) {
            if (typeof callback == 'function') {
              client.request({verb: 'GET', url: 'channels/' + id + '/shows'}, {query: details}, callback);
            } else {
              callback = details;
              client.request({verb: 'GET', url: 'channels/' + id + '/shows'}, {}, callback);
            }
          },
          // https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/movies
          movies: function (details, callback) {
            if (typeof callback == 'function') {
              client.request({verb: 'GET', url: 'channels/' + id + '/movies'}, {query: details}, callback);
            } else {
              callback = details;
              client.request({verb: 'GET', url: 'channels/' + id + '/movies'}, {}, callback);
            }
          },
          // https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/products
          product_collections: function (details, callback) {
            if (typeof callback == 'function') {
              client.request({verb: 'GET', url: 'channels/' + id + '/products'}, {query: details}, callback);
            } else {
              callback = details;
              client.request({verb: 'GET', url: 'channels/' + id + '/products'}, {}, callback);
            }
          },
          // https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/featured_items
          featured_items: function (details, callback) {
            if (typeof callback == 'function') {
              client.request({verb: 'GET', url: 'channels/' + id + '/featured_items'}, {query: details}, callback);
            } else {
              callback = details;
              client.request({verb: 'GET', url: 'channels/' + id + '/featured_items'}, {}, callback);
            }
          },
          // https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/episodes
          episodes: function (details, callback) {
            if (typeof callback == 'function') {
              client.request({verb: 'GET', url: 'channels/' + id + '/episodes'}, {query: details}, callback);
            } else {
              callback = details;
              client.request({verb: 'GET', url: 'channels/' + id + '/episodes'}, {}, callback);
            }
          },
          // https://svod-be.roosterteeth.com/api/v1/channels/CHANNEL/livestreams
          livestreams: function (details, callback) {
            if (typeof callback == 'function') {
              client.request({verb: 'GET', url: 'channels/' + id + '/livestreams'}, {query: details}, callback);
            } else {
              callback = details;
              client.request({verb: 'GET', url: 'channels/' + id + '/livestreams'}, {}, callback);
            }
          }
        };
      }
    };
  };
  