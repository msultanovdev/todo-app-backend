const User = require('../models/userModel');

const loginUser = async (req, res) => {
    res.json({message: 'login user'});
}

const registerUser = async (req, res) => {
    const {email, name, password} = req.body;

    try {
        const user = await User.register(email, name, password);

        res.status(200).json({email, user});
    } catch (err) {
        res.status(400).json({err: err.message});
    }
}

module.exports = {loginUser, registerUser}