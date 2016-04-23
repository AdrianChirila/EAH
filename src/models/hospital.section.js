/**
 * Created by adrian on 23.04.2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hospitalSectionSchema = new Schema({
    hospitalId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Hospital'
    },
    sectionId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Section'
    },
    capacity: {
        type: Number,
        required: true
    },
    busy: {
        type: Number,
        required: true,
        default : 0
    }
});

module.exports = mongoose.model('HospitalSection', hospitalSectionSchema);