const { DataTypes } = require('sequelize')
const sequelize = require('../utils/db').sequelize

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profile: {
        type: DataTypes.STRING,
        allowNull: true,
    },
})

module.exports = User
