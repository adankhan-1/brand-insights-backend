require('dotenv').config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    timezone: "UTC"
});


async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}

testConnection();

module.exports = sequelize;
