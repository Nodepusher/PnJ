/**
 * 여기서 관계를 맺으면 됨
 */


const { sequelize } = require('../utils/db');
const Board = require('../models/boardModel');

const db = {
  Board,
  sequelize
};

module.exports = db;
