const { User } = require('../models');

const userData = [
    {
        username: "jaimem",
        password: "techBlog123"
    },
    {
        username: "user1",
        password: "techBlog123"
    },
    {
        username: "user2",
        password: "techBlog123"
    },
    {
        username: "user4",
        password: "techBlog123"
    },
    {
        username: "user5",
        password: "techBlog123"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;