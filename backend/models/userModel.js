const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.register = async function(email, name, password) {

    if(!email || !password || !name) {
        throw Error('All fields must be filled');
    }
    if(!validator.isEmail(email)) {
        throw Error('Email is invalid');
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password is not strong');
    }
    if(name.length < 3) {
        throw Error('Name must be more than 3 letters');
    }

    const exists = await this.findOne({ email });

    if(exists) {
        throw Error('This email has been registered.');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, name, password: hash });

    return user;
}

userSchema.statics.login = async function(email, password) {

    if(!email || !password) {
        throw Error('All fields must be filled');
    }

    const user = await this.findOne({ email });

    if(!user) {
        throw Error('Incorrect email or password');
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match) {
        throw Error('Incorrect email or password');
    }

    return user;
}

module.exports = mongoose.model('User', userSchema);