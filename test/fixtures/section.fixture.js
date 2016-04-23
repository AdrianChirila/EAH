/**
 * Created by adrian on 23.04.2016.
 */

var fixtures = require('node-mongoose-fixtures');

function sectionFixture(callback) {
    fixtures.save('Section', {
        Section: [
            {
                _id: '41224d776a326fb40f000020',
                name :'Oncologie'
            },
            {
                _id: '41224d776a326fb40f000021',
                name :'Neurologie'
            },
            {
                _id: '41224d776a326fb40f000022',
                name :'Psihiatrie'
            }
        ]
    }, function(err) {
        if (err) {
            console.log('Problem with saving section-fixtures : ', err);
        } else {
            fixtures('Section', function(err) {
                if (err)
                    console.log('Cannot find section-fixtures : ', err);
                return callback(err);
            });
        }
    });
}

module.exports = sectionFixture;