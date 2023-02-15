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

const updateUser = async (req, res) => {
    const { _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findOneAndUpdate({_id: _id}, {
        ...req.body
    });

    if (!user) {
        return res.status(400).json({error: 'No such user'})
    }

    res.status(200).json(user);
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

module.exports = {loginUser, registerUser, getUsers, updateUser}