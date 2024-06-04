// models/boardModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db').sequelize;

const File = sequelize.define('File', {
    uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uuid'
    },
    uploadPath: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fileName: { // Original file name
        type: DataTypes.STRING,
        allowNull: false,
    },
    fileType: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
});

module.exports = File;
