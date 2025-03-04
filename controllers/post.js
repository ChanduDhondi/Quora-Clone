const Post = require('../models/post');

module.exports.newPost = (req, res) => {
    res.render('./posts/new.ejs');
}

module.exports.createPost = async (req, res) => {
    let { title, description } = req.body;
    let result = await new Post({ title: title, description: description });
    result.save();
    res.redirect('/');
}