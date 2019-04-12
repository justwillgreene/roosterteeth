module.exports = function (client) {
    return {
      // http://api.myemma.com/api/external/groups.html#get--#account_id-groups
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
          // http://api.myemma.com/api/external/groups.html#get--#account_id-groups-#member_group_id
          self: function (callback) {
            client.request({verb: 'GET', url: 'shows/' + id}, {}, callback);
          },
          seasons: function (callback) {
            client.request({verb: 'GET', url: 'shows/' + id + '/seasons'}, {}, callback);
          },
          bonus_features: function (callback) {
            client.request({verb: 'GET', url: 'shows/' + id + '/bonus_features'}, {}, callback);
          },
          related: function (callback) {
            client.request({verb: 'GET', url: 'shows/' + id + '/related'}, {}, callback);
          },
          product_collections: function (callback) {
            client.request({verb: 'GET', url: 'shows/' + id + '/products'}, {}, callback);
          }
        };
      }
    };
  };
  