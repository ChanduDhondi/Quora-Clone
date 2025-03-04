const mongoose = require('mongoose');
const comment = require('./comment');

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        min: [4, 'Post title must be 4 characters']
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: new Date(Date.now())
    },
    comment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }],
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

postSchema.post('findOneAndDelete', async(post) => {
    if(post.comment.length){
        let result = comment.deleteMany({ _id: { $in: post.comment } })
    }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;