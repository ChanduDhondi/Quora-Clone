const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.js');
const { validatePost, } = require('../middleware.js');

router.route('/')
    .post(validatePost, postController.createPost)

router.route('/new')
    .get(postController.newPost)

module.exports = router;