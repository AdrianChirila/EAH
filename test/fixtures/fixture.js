/**
 * Created by adrian on 23.04.2016.
 */

'use strict';

var async = require('async');
var appRoot = require('app-root-path').path;

var userFixture = require(appRoot + '/test/fixtures/user.fixture');
var hospitalFixture = require(appRoot + '/test/fixtures/hospital.fixture');
var sectionFixture = require(appRoot + '/test/fixtures/section.fixture');
var hospitalSection = require(appRoot + '/test/fixtures/hospital.section.fixture');
var patient = require(appRoot + '/test/fixtures/patient.fixture');

var saveFixtures = function(callback) {
    async.waterfall([
        userFixture,
        hospitalFixture,
        sectionFixture,
        hospitalSection,
        patient
    ], callback);
};

module.exports = saveFixtures;
