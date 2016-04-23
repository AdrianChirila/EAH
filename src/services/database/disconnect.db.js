/**
 * Created by adrian on 23.04.2016.
 */

'use strict';

var mongoose = require('mongoose');

var disconnectDb = function(done) {
    mongoose.disconnect(function(err) {
        if (err)
            console.log('Unable to close database connection');
        done(err);
    });
};

module.exports = disconnectDb;
