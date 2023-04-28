const { User } = require('../models');

const postData = [
    {
        title: "User1",
        email: "User1@user.com",
        password: '1'
    },
    {
        title: "User2",
        email: "User2@user.com",
        password: '2'
    },
    {
        title: "User3",
        email: "User3@user.com",
        password: '3'
    },
    {
        title: "User4",
        email: "User4@user.com",
        password: '4'
    },
    {
        title: "User5",
        email: "User5@user.com",
        password: '5'
    },
]

const seedUser = () => User.bulkCreate(userData)

Module.exports = seedUser;