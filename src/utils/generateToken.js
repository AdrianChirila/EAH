/**
 * Created by adrian on 23.04.2016.
 */

var appRoot = require('app-root-path');
var randomString = require('randomstring');
var User = require(appRoot + '/src/models/user');
var async = require('async');

module.exports = function(callback) {
    var token = randomString.generate({
        length:128,
        charset: 'alphanumeric'
    });
    var times = 10; // try 10 times, could not find another solution
    // try 1000000 instead, maybe in another universe you will have
    // a conflict
    var stop = false;
    var tries = 0;

    async.whilst(function condition() {
        return ((times > tries) && (stop === false));
    }, function execute(callback) {
        tries ++;
        User.findByToken(token, function(err, user) {
            if (err) {
                return callback(err);
            }

            if (user) {
                token = randomString.generate({
                    length:128,
                    charset: 'alphanumeric'
                });

                return callback(null);
            }

            stop = true;
            return callback(null);
        });

    }, function(err) {
        if (err) {
            console.log('Could not generate ', err);
            return callback(err, null);
        }

        console.log('The token was generated!', token);
        return callback(null, token);
    });
};