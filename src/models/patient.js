/**
 * Created by adrian on 23.04.2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cardId: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    cnp: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Patient', patientSchema);