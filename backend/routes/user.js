const express = require('express');
const {loginUser, registerUser, getUsers} = require('../controllers/userController');

const router = express.Router();

router.post('/login', loginUser);

router.post('/register', registerUser);

router.get('/users', getUsers);

module.exports = router;