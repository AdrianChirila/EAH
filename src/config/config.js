/**
 * Created by adrian on 22.04.2016.
 */


'use strict';

var appRoot = require('app-root-path');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var publicApi = require(appRoot + '/src/config/routes/public')();
var url = require(appRoot + '/src/config/database')();
require(appRoot + '/src/models/user.js')();
require(appRoot + '/src/models/hospital.js')();
require(appRoot + '/src/models/section.js')();

module.exports = function(app, express) {
    
// view engine setup
    app.set('views', path.join(appRoot + '/src/views'));
    app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(appRoot + '/src/public')));

    app.use('/api', publicApi);

    mongoose.connection
        .on('error', function () {
        })
        .on('close', function() { console.log('Database connection closed.') })
        .once('open', function()  {console.log('connected to database')});
    mongoose.connect(url);

    return app;
};