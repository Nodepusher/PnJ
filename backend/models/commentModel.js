// models/boardModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db').sequelize;

const Comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Comment;
