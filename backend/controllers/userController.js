const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '3d'});
}

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);

        const name = user.name;

        const token = createToken(user._id);

        res.status(200).json({email, name, token});
    } catch (err) {
        res.status(400).json({err: err.message});
    }
}

const registerUser = async (req, res) => {
    const {email, name, password} = req.body;

    try {
        const user = await User.register(email, name, password);

        const token = createToken(user._id);

        res.status(200).json({email, token});
    } catch (err) {
        res.status(400).json({err: err.message});
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.getAll();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(400).json({err: err.message});
    }
}

module.exports = {loginUser, registerUser, getUsers}