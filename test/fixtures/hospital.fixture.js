/**
 * Created by adrian on 23.04.2016.
 */

var fixtures = require('node-mongoose-fixtures');

function hospitalFixture(callback) {
    fixtures.save('Hospital', {
        Hospital: [
            {
                _id: '41224d776a326fb40f000010',
                name :'Spitalul Clinic Județean de Urgență Cluj-Napoca',
                position: {
                    lat: 46.76588,
                    lng: 23.58298
                },
                imageUrl: 'http://ziarulfaclia.ro/wp-content/uploads/2015/01/Spitalul-de-Urgenta.jpg',
                address: 'Strada Clinicilor 3-5'
            },
            {
                _id: '41224d776a326fb40f000011',
                name :'Spitalul Clinic de Recuperare',
                position: {
                    lat: 46.75528,
                    lng: 23.58384
                },
                imageUrl: 'http://www.recuperarecluj.ro/imagini/poza_spital.jpg',
                address: 'Strada Viilor 46-50'
            },
            {
                _id: '41224d776a326fb40f000012',
                name :'Spitalul Clinic de boli infectioase',
                position: {
                    lat: 46.76062,
                    lng: 23.58402
                },
                imageUrl: 'http://www.infectioasecluj.ro/fileadmin/_processed_/csm_PozaSpitalExterior2015_OK_bcb59bbbb0.jpg',
                address: 'Strada Iuliu Moldovan 23'
            }
        ]
    }, function(err) {
        if (err) {
            console.log('Problem with saving hospital-fixtures : ', err);
        } else {
            fixtures('Hospital', function(err) {
                if (err)
                    console.log('Cannot find hospital-fixtures : ', err);
                return callback(err);
            });
        }
    });
}

module.exports = hospitalFixture;