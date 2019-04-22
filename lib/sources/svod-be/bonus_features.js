module.exports = function (client) {
    return {
      // https://svod-be.roosterteeth.com/api/v1/bonus_features
      list: function (details, callback) {
        if (typeof callback == 'function')
          client.request({verb: 'GET', url: 'bonus_features'}, {query: details}, callback);
        else {
          callback = details;
          client.request({verb: 'GET', url: 'bonus_features'}, {}, callback);
        }
      },
  
      withID: function (id) {
        return {
          // https://svod-be.roosterteeth.com/api/v1/bonus_features/BONUS_FEATURE
          self: function (details, callback) {
            if (typeof callback == 'function')
            client.request({verb: 'GET', url: 'bonus_features/' + id}, {query: details}, callback);
            else {
              callback = details;
              client.request({verb: 'GET', url: 'bonus_features/' + id}, {}, callback);
            }
          },
          // https://svod-be.roosterteeth.com/api/v1/bonus_features/BONUS_FEATURE/videos
          videos: function (details, callback) {
            if (typeof callback == 'function')
            client.request({verb: 'GET', url: 'bonus_features/' + id + '/videos'}, {query: details}, callback);
            else {
              callback = details;
              client.request({verb: 'GET', url: 'bonus_features/' + id + '/videos'}, {}, callback);
            }
          },
          // https://svod-be.roosterteeth.com/api/v1/bonus_features/BONUS_FEATURE/next
          next: function (details, callback) {
            if (typeof callback == 'function')
            client.request({verb: 'GET', url: 'bonus_features/' + id + '/next'}, {query: details}, callback);
            else {
              callback = details;
              client.request({verb: 'GET', url: 'bonus_features/' + id + '/next'}, {}, callback);
            }
          }
        };
      }
    };
  };
  