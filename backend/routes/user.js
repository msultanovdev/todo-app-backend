const express = require('express');
const {loginUser, registerUser, getUsers, updateUser} = require('../controllers/userController');

const router = express.Router();

router.post('/login', loginUser);

router.post('/register', registerUser);

router.get('/users', getUsers);

router.post('/:id', updateUser);

module.exports = router;