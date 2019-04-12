module.exports = function (client) {
    return {
      withID: function (id) {
        return {
          // https://svod-be.roosterteeth.com/api/v1/seasons/SEASON
          self: function (callback) {
            client.request({verb: 'GET', url: 'seasons/' + id}, {}, callback);
          },
          // https://svod-be.roosterteeth.com/api/v1/seasons/SEASONS/episodes
          episodes: function (callback) {
            client.request({verb: 'GET', url: 'seasons/' + id + '/episodes'}, {}, callback);
          }
        };
      }
    };
  };
  