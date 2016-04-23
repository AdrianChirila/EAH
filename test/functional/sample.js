// /**
//  * Created by adrian on 23.04.2016.
//  */
//
// var appRoot = require('app-root-path');
// var should = require('should');
// var serverAddress = require(appRoot + '/src/config/parameters').serverAddress;
// var api = require('supertest')(serverAddress);
// var initDb = require(appRoot + '/src/services/database/clear.save.db');
//
// describe('Just a simple test', function() {
//     beforeEach(function(done) {
//         initDb(done);
//     });
//
//     afterEach(function(done) {
//        disconnected(done);
//     });
//
//     it('Should be ok', function (done) {
//         api.get('/api/test')
//             .expect(200)
//             .end(function (err, res) {
//                 console.log(res.body.status);
//                 res.body.text.should.equal('hello bitches!');
//                 done();
//             });
//     });
// });
