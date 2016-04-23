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
require(appRoot + '/src/models/hospital.section')();
require(appRoot + '/src/models/patient')();

function clearAndSave(done) {
    async.waterfall([
        function(callback) {
            mongoose.connect(url, function(err) {
                return callback(err);
            });
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