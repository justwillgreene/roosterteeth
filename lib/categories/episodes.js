module.exports = function (client) {
    return {
      // https://svod-be.roosterteeth.com/api/v1/episodes
      list: function (details, callback) {
        if (typeof callback == 'function')
          client.request({verb: 'GET', url: 'episodes'}, {query: details}, callback);
        else {
          callback = details;
          client.request({verb: 'GET', url: 'episodes'}, {}, callback);
        }
      },
  
      withID: function (id) {
        return {
          // https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE
          self: function (callback) {
            client.request({verb: 'GET', url: 'episodes/' + id}, {}, callback);
          },
          // https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/related
          related: function (callback) {
            client.request({verb: 'GET', url: 'episodes/' + id + '/related'}, {}, callback);
          },
          // https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/next
          next: function (callback) {
            client.request({verb: 'GET', url: 'episodes/' + id + '/next'}, {}, callback);
          },
          // https://svod-be.roosterteeth.com/api/v1/episodes/EPISODE/videos
          videos: function (callback) {
            client.request({verb: 'GET', url: 'episodes/' + id + '/videos'}, {}, callback);
          }
        };
      }
    };
  };
  