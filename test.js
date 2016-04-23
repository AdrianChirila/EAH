/**
 * Created by adrian on 23.04.2016.
 */
var mongoose = require('mongoose');
var uri = 'mongodb://localhost:27017/TestEAH';

mongoose.connection
    .on('error', function () {
        
    })
.on('close', function() { console.log('Database connection closed.') })
.once('open', function()  {console.log('connected')});

mongoose.connect(uri);