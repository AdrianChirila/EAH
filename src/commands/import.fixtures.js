/**
 * Created by adrian on 23.04.2016.
 */

'use strict';

var appRoot = require('app-root-path').path;

require(appRoot + '/src/services/database/clear.save.db')(function(err) {
    if (err) {
        console.log(err);

        return process.exit(1);
    }
    console.log('The database was cleaned and initialized');
    return process.exit(0);
});