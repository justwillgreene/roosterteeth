module.exports = function (client) {
    return {
      // https://svod-be.roosterteeth.com/api/v1/livestreams
      list: function (details, callback) {
        if (typeof callback == 'function')
          client.request({verb: 'GET', url: 'livestreams'}, {query: details}, callback);
        else {
          callback = details;
          client.request({verb: 'GET', url: 'livestreams'}, {}, callback);
        }
      },
  
      withID: function (id) {
        return {
          // https://svod-be.roosterteeth.com/api/v1/livestreams/LIVESTREAM
          self: function (callback) {
            client.request({verb: 'GET', url: 'livestreams/' + id}, {}, callback);
          },
          // https://svod-be.roosterteeth.com/api/v1/livestreams/LIVESTREAM/schedule
          schedule: function (callback) {
            client.request({verb: 'GET', url: 'livestreams/' + id + '/schedule'}, {}, callback);
          }
        };
      }
    };
  };
  