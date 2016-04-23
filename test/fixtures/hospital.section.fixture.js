/**
 * Created by adrian on 23.04.2016.
 */

var fixtures = require('node-mongoose-fixtures');

function userFixture(callback) {
    fixtures.save('HospitalSection', {
        HospitalSection: [
            {
                _id: '41224d776a326fb40f000030',
                hospitalId: '41224d776a326fb40f000010',
                sectionId: '41224d776a326fb40f000020'
            },
            {
                _id: '41224d776a326fb40f000031',
                hospitalId: '41224d776a326fb40f000010',
                sectionId: '41224d776a326fb40f000021'
            },
            {
                _id: '41224d776a326fb40f000032',
                hospitalId: '41224d776a326fb40f000010',
                sectionId: '41224d776a326fb40f000023'
            }
        ]
    }, function(err) {
        if (err) {
            console.log('Problem with saving hospital-section-fixtures : ', err);
        } else {
            fixtures('HospitalSection', function(err) {
                if (err)
                    console.log('Cannot find hospital-section-fixtures : ', err);
                return callback(err);
            });
        }
    });
}

module.exports = userFixture;