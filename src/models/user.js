/**
 * Created by adrian on 23.04.2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
});

userSchema.statics = {
    /**
     * Find user by token
     * @param {String} token
     * @param {Function} callback
     */
    findByToken: function (token, callback) {
        this.findOne({ token : token })
            .exec(callback);
    },

    findByName: function(name, callback) {
        this.findOne({name: name})
            .exec(callback)
    }
};

module.exports = mongoose.model('User', userSchema)