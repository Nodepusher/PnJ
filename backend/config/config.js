/**
 *  config는 .env파일로 할지 아니면 config.js로 할지 알아보고 정해야 할 듯
 *
 */
const dbConfig = {
    port: 3306,
    host: 'localhost',
    username: 'root',
    password: 'P!77sw0rd!',
    database: 'P&J',
    dialect: 'mysql',
};

const srvDBConfig = {
    port: 3306,
    host: '192.168.55.227',
    username: 'PnJuser',
    password: '2024homeserver',
    database: 'PnJdb',
    dialect: 'mysql',
};

module.exports = {
    dbConfig,
    srvDBConfig,
};
