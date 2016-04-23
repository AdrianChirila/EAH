/**
 * Created by adrian on 23.04.2016.
 */

var fixtures = require('node-mongoose-fixtures');

function userFixture(callback) {
    fixtures.save('User', {
        User: [
            {
                name :'DeceanOvidiu',
                password: 'parola1',
                token: 'yBYM0pTHWAEsRuaLxIleYqxwVXfhJgQYcoNTkgvfbyjgt8uLnIGbdy7KnPPQm4xrSSkk15TM6GnqSuSN7PeOh3MgXSfOEbVM1nGJ2PwjIfNEuAVUshbOjEnI1HapIB27'
            },
            {
                name :'Calin Gabriel',
                password: 'parola2',
                token: 'yBYM0pTHWAEsRuaLxIleYqxwVXfhJgQYcoNTkgvfbyjgt8uLnIGbdy7KnPPQm4xrSSkk15TM6GnqSuSN7PeOh3MgXSfOEbVM1nGJ2PwjIfNEuAVUshbOjEnI1HapIB28'
            }
        ]
    }, function(err) {
        if (err) {
            console.log('Problem with saving user-fixtures : ', err);
        } else {
            fixtures('User', function(err) {
                if (err)
                    console.log('Cannot find user-fixtures : ', err);
                return callback(err);
            });
        }
    });
}

module.exports = userFixture;