const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/db").sequelize;
const Board = require("../../models/boardModel");

module.exports = {
    findAllByCategory : async (category) => {
        console.log("repo ::: ",category)
        try {
            const findAllByCategory = await Board.findAll({
                where : {
                    category : category
                }
            })
            return findAllByCategory
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
}