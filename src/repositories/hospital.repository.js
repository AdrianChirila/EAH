/**
 * Created by adrian on 23.04.2016.
 */
var appRoot = require('app-root-path');
var Hospital = require(appRoot + '/src/models/hospital');
var getDistance = require(appRoot + '/src/utils/get.distance');

var HospitalRepository = function() {
    var getAllByRange = function (position, callback) {
        console.log('repooooooooooooo');
        Hospital.find({}, function (err, hospitals) {
            if (err) {
                return callback(err, null);
            }

            //sync call
            var targetHospitals = [];
            hospitals.forEach(function (hospital) {
                console.log('yyyy', position.lat, position.lng,
                    hospital.position.lat, hospital.position.lng);

                var distance = getDistance(position.lat, position.lng,
                    hospital.position.lat, hospital.position.lng);

                if (distance <= 10) {
                    targetHospitals.push(hospital.position);
                }
            });

            return callback(null, hospitals);
        });
    };
    return {
        getAllByRange: getAllByRange
    }
};

module.exports = HospitalRepository();

