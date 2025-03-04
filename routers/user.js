const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');
const { validatePost } = require('../middleware.js');

router.route('/signup')
    .get(userController.newUser)
    .post(userController.createUser)

router.route('/login')
    .post(userController.loginUser)

module.exports = router