/**
 *  config는 .env파일로 할지 아니면 config.js로 할지 알아보고 정해야 할 듯
 *
 */
require('dotenv').config();
const dbConfig = {
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    dialect: 'mysql',
}

const srvDBConfig = {
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    dialect: 'mysql',
}

// const dbConfig = {
//     port: 3306,
//     host: '127.0.0.1',
//     username: 'root',
//     password: '1234',
//     database: 'PnJdb',
//     dialect: 'mysql',
// }

const redisConfig = {
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_USERNAME: process.env.REDIS_USERNAME,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
}

module.exports = {
    dbConfig,
    srvDBConfig,
    redisConfig,
}
