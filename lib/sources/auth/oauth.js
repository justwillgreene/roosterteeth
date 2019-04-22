module.exports = function (client) {
    return {
        // https://auth.roosterteeth.com/oauth/token
        token: function (details, callback) {
            details.grant_type = 'password';
            details.scope = 'user public';
            client.request({verb: 'POST', subd: 'auth.', ext: '/oauth', url: 'token'}, {body: details}, callback);
        },
        // https://auth.roosterteeth.com/oauth/revoke
        revoke: function (details, callback) {
            client.request({verb: 'POST', subd: 'auth.', ext: '/oauth', url: 'revoke'}, {body: details}, callback);
        }
    }
}