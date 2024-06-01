/**
 *  config는 .env파일로 할지 아니면 config.js로 할지 알아보고 정해야 할 듯
 *
 */
const dbConfig = {
    port: 22300,
    host: 'slow-developer.h.mooo.com',
    username: 'PnJuser',
    password: '2024homeserver',
    database: 'PnJdb',
    dialect: 'mysql',
}

const srvDBConfig = {
    port: 3306,
    host: 'dev-imoong.mooo.com',
    username: 'PnJuser',
    password: '2024homeserver',
    database: 'PnJdb',
    dialect: 'mysql',
}

const redisConfig = {
    REDIS_HOST: 'dev-imoong.mooo.com',
    REDIS_PORT: '6379',
    REDIS_USERNAME: 'default',
    REDIS_PASSWORD: '1234',
}

module.exports = {
    dbConfig,
    srvDBConfig,
    redisConfig,
}
