const mongoose = require('mongoose');
const Schema = mongoose.Schema

const postSchema = new Schema({
    creator: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    }
}); 

const Post = mongoose.model('Post', postSchema);
module.exports = Post;