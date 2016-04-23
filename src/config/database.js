/**
 * Created by adrian on 22.04.2016.
 */
'use strict';

var appRoot = require('app-root-path').path;

var params = require(appRoot + '/src/config/parameters.js');

var configUrl = function() {
    var url = null;

    //if (process.env.ENV === 'test') {
    //    url = params.databaseUrlTest;
    //} else {
    //    url = params.databaseUrl;
    //}
    url = params.databaseUrlTest;
    return url;
};

module.exports = configUrl;