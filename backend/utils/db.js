// utils/db.js
const { Sequelize } = require("sequelize");
const { dbConfig } = require("../config/config");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    /* logging: console.log, */
    define: {
      freezeTableName: true /* 테이블 이름 미지정시 복수의 모델 이름으로 생성되는데 테이블 이름을 그대로 가져가는 옵션 */,
      timestamps: true,
      underscored: true /* 카멜 표기법을 스네이크 표기법으로 바꾸는 옵션 */,
    },
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected");
  } catch (error) {
    console.error("MySQL connection error:", error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
