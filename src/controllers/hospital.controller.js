/**
 * Created by adrian on 23.04.2016.
 */
var appRoot = require('app-root-path');
var HospitalRepository = require(appRoot + '/src/repositories/' +
    'hospital.repository.js');

var HospitalController = function() {
    var getAllByRange = function (req, res) {
        console.log('xxxxxxxxxxxx', req.params);
        var position = {
            lat: req.params.lat,
            lng: req.params.lng
        };
        
        HospitalRepository.getAllByRange(position,
        function(err, hospitals) {
            if (err) {
                console.log('Could not find hospitals:', err);
                return res.status(500).send({message: err});
            }

            console.log('Get hospitals (200)', hospitals);
            return res.status(200).send(hospitals);
        });
    };

    return {
        getAllByRange: getAllByRange
    }
};

module.exports = HospitalController();
