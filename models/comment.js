const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {
        type: String
    },
    date: {
        type: Date,
        default: new Date(Date.now())
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const comment = mongoose.model('Comment', commentSchema);

module.exports = comment