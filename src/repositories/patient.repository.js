/**
 * Created by adrian on 24.04.2016.
 */
var appRoot = require('app-root-path');
var Patient = require(appRoot + '/src/models/patient');

var PatientRepository = function() {
    var getByCardId = function(cardId, callback) {
        console.log('repository');
        Patient.find({cardId: cardId}, function(err, patient) {
            console.log(cardId);
           if (err) {
               return callback(err, null);
           }
            
           return callback(null, patient[0]);
        });
    };

    return {
        getByCardId: getByCardId
    }
};

module.exports = PatientRepository();

