const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "hello world"
    },
    {
        user_id: 1,
        post_id: 1,
        comment_text: "hello world"
    },
    {
        user_id: 1,
        post_id: 1,
        comment_text: "hello world"
    },
    {
        user_id: 1,
        post_id: 1,
        comment_text: "hello world"
    },
    {
        user_id: 1,
        post_id: 1,
        comment_text: "hello world"
    }
]

const seedComments = () => Comment.bulkCreate(commentData)

Module.exports = seedComments;