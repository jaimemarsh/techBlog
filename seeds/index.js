const sequelize = require('../config/connection')
const commentSeeds = require('./commentSeeds')
const postSeeds = require('./postSeeds')
const userSeeds = require('./userSeeds')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log("\n -----DATABASE SYNCED ------\n")

    await seedComments()
    console.log("\n -----COMMENTS SYNCED ------\n")

    await seedPosts()
    console.log("\n -----POSTS SYNCED ------\n")

    await seedUser()
    console.log("\n -----USERS SYNCED ------\n")

    process.exit(0)

}

seedDatabase();