var appRoot = require('app-root-path');
var User = require(appRoot + '/src/models/user');
var generateToken = require(appRoot + '/src/utils/generateToken');

module.exports = function(req, res) {
    console.log('????????????????/');
    User.findByName(req.body.name, function(err, user) {
        console.log('1------', req.body);
        if (err) {
            return res.status(500).send(err);
        }

        if (!user) {
            console.log('The user does not exist!');
            return res.status(404).send({message: 'The user does not exist!'});
        }

        console.log('The user exist!');
        if (user.password != req.body.password) {
            console.log('Incorrect password!');
            return res.status(401).send({message: 'Incorrect password!'});
        }

        generateToken(function(err, token) {
            if (err) {
                return res.status(500).send(err);
            }

            User.update({name: req.body.name},{token: token}, function(err, numAffect) {
                if (err) {
                    console.log('Could not update!');
                    return res.status(500).send();
                }

                console.log(numAffect);
                return res.status(200).send({token: token});
            });
        });
    });
};