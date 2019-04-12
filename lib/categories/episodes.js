module.exports = function (client) {
    return {
      // http://api.myemma.com/api/external/groups.html#get--#account_id-groups
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
          // http://api.myemma.com/api/external/groups.html#get--#account_id-groups-#member_group_id
          self: function (callback) {
            client.request({verb: 'GET', url: 'episodes/' + id}, {}, callback);
          },
          related: function (callback) {
            client.request({verb: 'GET', url: 'episodes/' + id + '/related'}, {}, callback);
          },
          next: function (callback) {
            client.request({verb: 'GET', url: 'episodes/' + id + '/next'}, {}, callback);
          },
          videos: function (callback) {
            client.request({verb: 'GET', url: 'episodes/' + id + '/videos'}, {}, callback);
          }
        };
      }
    };
  };
  