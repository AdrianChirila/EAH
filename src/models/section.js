/**
 * Created by adrian on 23.04.2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sectionSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Section', sectionSchema);