const { Sequelize } = require('sequelize');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env') });

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const dbname = config.database;
const username = config.username;
const password = config.password;
const host = config.host;
const port = config.port;

const connectionUrl = `postgres://${username}:${password}@${host}:${port}/${dbname}`;
const sequelize = new Sequelize(connectionUrl)

const testConnection = async function() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { testConnection, sequelize };
