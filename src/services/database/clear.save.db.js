/**
 * Created by adrian on 23.04.2016.
 */

'use strict';

var mongoose = require('mongoose');
var async = require('async');
var fixtures = require('node-mongoose-fixtures');
var appRoot = require('app-root-path').path;

var saveFixtures = require(appRoot + '/test/fixtures/fixture.js');
var url = require(appRoot + '/src/config/database')();

require(appRoot + '/src/models/user')();
require(appRoot + '/src/models/hospital')();
require(appRoot + '/src/models/section')();

function clearAndSave(done) {
    async.waterfall([
        function(callback) {
            mongoose.connect(url, function(err) {
                return callback(err);
            });
            // mongoose.connection
            //     .on('error', function (err) {
            //         callback(err);
            //     })
            //     .on('close', function(err) { console.log('Database connection closed.'); callback(err) })
            //     .once('open', function()  {console.log('connected to database'); callback(null)});
            // console.log(url);
            // mongoose.connect(url);
        },
        function(callback) {
            fixtures.reset(mongoose, function(err) {
                return callback(err);
            });
        },

        function(callback) {
            saveFixtures(function(err) {
                return callback(err);
            });
        }

    ], function(err) {
        if (err)
            console.log('Problem with saving fixtures : ', err);
        return done(err);
    });
}

module.exports = clearAndSave;