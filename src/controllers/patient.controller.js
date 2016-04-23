/**
 * Created by adrian on 24.04.2016.
 */
var appRoot = require('app-root-path');
var patientRepository = require(appRoot + '/src/repositories/patient.repository');

var PatientController = function() {
    var getByCardId = function(req, res) {
        console.log('controller');
        patientRepository.getByCardId(req.params.cardId, function(err, patient) {
            if (err) {
                console.log('Could not find patient by cardId', err);
                return res.status(500).send(err);
            }

            if (!patient) {
                console.log('Could not find patient (404)');
                return res.status(404).send({message: 'The patient does not exist!'});
            }

            console.log('The patient was found', patient);
            return res.status(200).send(patient);
        });
    };

    return {
        getByCardId: getByCardId
    }
};

module.exports = PatientController();