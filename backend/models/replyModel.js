// models/boardModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db').sequelize;

const Reply = sequelize.define('Reply', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Reply;
