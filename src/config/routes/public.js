/**
 * Created by adrian on 23.04.2016.
 */

var appRoot = require('app-root-path');
var express = require('express');
var router = express.Router();
var logIn = require(appRoot + '/src/apis/auth');
var hospitalController = require(appRoot + '/src/controllers/' +
    'hospital.controller');

module.exports = function() {
    router.post('/login', logIn);
    router.get('/hospitals/:lat/:lng', hospitalController.getAllByRange);
    router.get('/test', function(req, res) {
        res.status(200).send({message: "salut !!!"});
    });

    return router;
};

