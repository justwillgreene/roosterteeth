var request = require('request');

request = request.defaults({json: true});

module.exports = function (parameters) {
  this.settings = {
    baseURL: "roosterteeth.com" || parameters.baseURL,
  };

  this.request = function (requestDetails, parameters, callback) {
    requestDetails.subd = requestDetails.subd || 'svod-be.';
    requestDetails.ext = requestDetails.ext || '/api/v1';
    requestDetails.url = requestDetails.url || '';
    requestDetails.verb = requestDetails.verb || 'GET';

    var requestOptions = {
      url: 'https://' + requestDetails.subd + this.settings.baseURL + requestDetails.ext + '/' + requestDetails.url,
      method: requestDetails.verb,
      headers: {}
    };
    if(this.settings.Authorization){
      requestOptions.headers.Authorization = this.settings.Authorization;
    }
    // If the verb is PUT or POST check for a body and attach it.
    if (requestDetails.verb == 'POST' | requestDetails.verb == 'PUT' | requestDetails.verb == 'PATCH')
      requestOptions.body = parameters.body;
    else if (requestDetails.verb == 'GET')
      requestOptions.qs = parameters.query;

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
  var auths = ['oauth'];
  var businessServices = ['me'];
  var communities = ['achievements', 'admin_posts', 'communities', 'invitations', 'memberships', 'posts', 'relationships', 'users'];
  var lists = ['watchlist'];
  var svodBes = ['bonus_features', 'channels', 'episodes', 'livestreams', 'seasons', 'shows'];

  var self = this;

  auths.forEach(function (auth) {
    self[auth] = require(__dirname + '/sources/auth/' + auth + '.js')(self);
  });
  businessServices.forEach(function (businessService) {
    self[businessService] = require(__dirname + '/sources/business-service/' + businessService + '.js')(self);
  });
  communities.forEach(function (community) {
    self[community] = require(__dirname + '/sources/community/' + community + '.js')(self);
  });
  lists.forEach(function (list) {
    self[list] = require(__dirname + '/sources/lists/' + list + '.js')(self);
  });
  svodBes.forEach(function (svodBe) {
    self[svodBe] = require(__dirname + '/sources/svod-be/' + svodBe + '.js')(self);
  });
};
