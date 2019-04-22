module.exports = function (client) {
    return {
        // https://community.roosterteeth.com/api/v1/invitations
        create: function (details, callback) {
            client.request({verb: 'POST', subd: 'community.', url: 'invitations'}, {body: details}, callback);
        },
        // https://community.roosterteeth.com/api/v1/invitations/pending
        pending: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', subd: 'community.', url: 'invitations/pending'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', subd: 'community.', url: 'invitations/pending'}, {}, callback);
            }
        },
  
        withID: function (id) {
            return {
                // https://community.roosterteeth.com/api/v1/invitations/INVITATION
                self: function (callback) {
                    client.request({verb: 'GET', subd: 'community.', url: 'invitations/' + id}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/invitations/INVITATION/accept
                accept: function (callback) {
                    client.request({verb: 'POST', subd: 'community.', url: 'invitations/' + id + '/accept'}, {}, callback);
                },
                // https://community.roosterteeth.com/api/v1/invitations/INVITATION/seen
                seen: function (allback) {
                    client.request({verb: 'POST', subd: 'community.', url: 'invitations/' + id + '/seen'}, {}, callback);
                }
            };
        }
    };
  };
  