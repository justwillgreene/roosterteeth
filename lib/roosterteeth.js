var request = require('request');

request = request.defaults({json: true});

module.exports = function (parameters) {
  this.settings = {
    baseURL: "https://svod-be.roosterteeth.com/api/v1/" || parameters.baseURL,

  };

  this.request = function (requestDetails, parameters, callback) {
    requestDetails.url = requestDetails.url || '';
    requestDetails.verb = requestDetails.verb || 'GET';

    var requestOptions = {
      url: this.settings.baseURL + '/' + requestDetails.url,
      method: requestDetails.verb
    };

    // Actually execute the request.
    request(
      requestOptions,
      function (err, response, body) {
        if (err)
          callback(err);
        else
        {
          if (typeof body != 'undefined') {
            // Check for an error code in the body of the response
            if (typeof body.error != 'undefined')
              callback(body);
            else
              callback(null, body);
          }
          else
          {
            callback('SERVICE ERROR:\n' + JSON.stringify(response, null, 2) + '\n');
          }
        }
      }
    );
  };

  // Attach all the API methods to this object.
  var categories = ['channels', 'shows', 'episodes' ];
  var self = this;

  categories.forEach(function (category) {
    self[category] = require(__dirname + '/categories/' + category + '.js')(self);
  });
};
