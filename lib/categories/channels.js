module.exports = function (client) {
    return {
      // http://api.myemma.com/api/external/groups.html#get--#account_id-groups
      list: function (details, callback) {
        if (typeof callback == 'function')
          client.request({verb: 'GET', url: 'channels'}, {query: details}, callback);
        else {
          callback = details;
          client.request({verb: 'GET', url: 'channels'}, {}, callback);
        }
      },
  
      // http://api.myemma.com/api/external/groups.html#post--#account_id-groups
      create: function (details, callback) {
        client.request({verb: 'POST', url: 'groups'}, {body: details}, callback);
      },
  
      withID: function (id) {
        return {
          // http://api.myemma.com/api/external/groups.html#get--#account_id-groups-#member_group_id
          self: function (callback) {
            client.request({verb: 'GET', url: 'channels/' + id}, {}, callback);
          },
          shows: function (callback) {
            client.request({verb: 'GET', url: 'channels/' + id + '/shows'}, {}, callback);
          },
          movies: function (callback) {
            client.request({verb: 'GET', url: 'channels/' + id + '/movies'}, {}, callback);
          },
          product_collections: function (callback) {
            client.request({verb: 'GET', url: 'channels/' + id + '/products'}, {}, callback);
          },
          featured_items: function (callback) {
            client.request({verb: 'GET', url: 'channels/' + id + '/featured_items'}, {}, callback);
          },
          episodes: function (callback) {
            client.request({verb: 'GET', url: 'channels/' + id + '/episodes'}, {}, callback);
          },
          livestreams: function (callback) {
            client.request({verb: 'GET', url: 'channels/' + id + '/livestreams'}, {}, callback);
          }
        };
      }
    };
  };
  