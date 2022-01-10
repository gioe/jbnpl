const mongoose = require('mongoose');
const uuidv1 = require('uuidv1')
const crypto = require('crypto');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    hashed_password: {
        type: String,
        required: true,
    },
    mxId: String,
    salt: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
})

//virtual field
userSchema.virtual('password')
    .set(function(password) {
        // create temporary password
        this._passowrd = password
        //generate a timestamp
        this.salt = uuidv1()
        // encryptPassword()
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password
    })

//methods
userSchema.methods =  {

    authenticate: function(plainTextPassword) {
        return this.encryptPassword(plainTextPassword) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if (!password) return "";
        try {
            const hash = crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
            return hash
        } catch (err) {
            return ""
        }
    }
};

module.exports = mongoose.model("User", userSchema);
