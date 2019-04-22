module.exports = function (client) {
    return {
      withID: function (id) {
        return {
          // https://svod-be.roosterteeth.com/api/v1/seasons/SEASON
          self: function (callback) {
            client.request({verb: 'GET', url: 'seasons/' + id}, {}, callback);
          },
          // https://svod-be.roosterteeth.com/api/v1/seasons/SEASONS/episodes
          episodes: function (details, callback) {
            if (typeof callback == 'function')
              client.request({verb: 'GET', url: 'seasons/' + id + '/episodes'}, {query: details}, callback);
            else {
              callback = details;
              client.request({verb: 'GET', url: 'seasons/' + id + '/episodes'}, {}, callback);
            }
          }
        };
      }
    };
  };
  