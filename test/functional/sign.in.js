// /**
//  * Created by adrian on 23.04.2016.
//  */
// var appRoot = require('app-root-path');
// var should = require('should');
// var serverAddress = require(appRoot + '/src/config/parameters').serverAddress;
// var api = require('supertest')(serverAddress);
// var initDb = require(appRoot + '/src/services/database/clear.save.db');
// var disconnectDb = require(appRoot + '/src/services/database/disconnect.db');
//
// describe('Log-in test', function() {
//     beforeEach(function(done) {
//         initDb(done);
//     });
//
//     afterEach(function(done) {
//         disconnectDb(done);
//     });
//
//     it('Should be ok', function(done) {
//         api.post('/api/login')
//             .expect(200)
//             .send({
//                 name: 'DeceanOvidiu',
//                 password: 'parola1'
//             })
//             .end(function(err, res) {
//                 res.status.should.equal(200);
//                 console.log(res.body);
//                 res.body.token.should.exist;
//                 done();
//             });
//     });
//    
//     // it('Should not be ok', function(done) {
//     //     api.post('/api/login')
//     //         .expect(404)
//     //         .send({
//     //             name: 'Dani_Mocanu@yahoo.com',
//     //             password: 'danimocanupesistem'
//     //         })
//     //         .end(function(err, res) {
//     //             res.status.should.equal(404);
//     //             res.body.token.should.exist;
//     //             done();
//     //         });
//     // });
//   
//     // it('Should not be ok', function(done) {
//     //     api.post('/api/log_in')
//     //         .expect(401)
//     //         .send({
//     //             email: 'OvidiuDecean',
//     //             password: 'parolagresita'
//     //         })
//     //         .end(function(err, res) {
//     //             res.status.should.equal(401);
//     //             res.body.message.should.equal('Incorrect password!');
//     //             done();
//     //         });
//     // });
//     //
//     // it('Should not be ok', function(done) {
//     //     api.post('/api/log_in')
//     //         .expect(404)
//     //         .send({
//     //             email: 'nicolae_guta@yahoo.com',
//     //             password: 'gutapesistem'
//     //         })
//     //         .end(function(err, res) {
//     //             res.status.should.equal(404);
//     //             res.body.message.should.equal('The user does not exist!');
//     //             done();
//     //         });
//     // });
// });