/**
 * Created by adrian on 23.04.2016.
 */

var fixtures = require('node-mongoose-fixtures');

function patientFixture(callback) {
    fixtures.save('Patient', {
        Patient: [
            {
                _id: '41224d776a326fb40f000040',
                cardId : 49,
                name :'Dani',
                surname: 'Mocanu',
                cnp: '1950117314007',
                age: '21',
                sex: 'M',
                contact: '0740 677 629'
            },
            {
                _id: '41224d776a326fb40f000041',
                cardId : 23,
                name :'Vali',
                surname: 'Vijelie',
                cnp: '1850117354007',
                age: '31',
                sex: 'M',
                contact: '0740 677 435'
            },
            {
                _id: '41224d776a326fb40f000042',
                cardId : 153,
                name :'Ovidiu',
                surname: 'Decean',
                cnp: '1850319334007',
                age: '31',
                sex: 'M',
                contact: '0740 677 456'
            }
        ]
    }, function(err) {
        if (err) {
            console.log('Problem with saving patient-fixtures : ', err);
        } else {
            fixtures('Patient', function(err) {
                if (err)
                    console.log('Cannot find patient-fixtures : ', err);
                return callback(err);
            });
        }
    });
}

module.exports = patientFixture;