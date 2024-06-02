const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/db").sequelize;
const Board = require("../../models/boardModel");
const User = require("../../models/userModel");
const db = require('../../models')

module.exports = {
    findAllCount : async (category) => {
        console.log("repo ::: ",category)
        whereCondition = {};

        if (category !== 'all') {
            whereCondition = { category: category };
        }
        try {
            const findAllCount = await Board.count({
                where : whereCondition
            })
            return findAllCount
            
        } catch (error) {
            throw new Error(error.message)
        }
    },
    findAllForInfiniteScroll: async (limit, page, category,sort ) => {
        try {
            console.log("category",category === "false")

            whereCondition = {};
            if (category !== 'all') {
                whereCondition = { category: category };
            }
            const offset = (page - 1) * limit;

            let infiniteScroll = await Board.findAll({
                limit: limit,
                offset: offset,
                order: [['created_at', `${sort}`]],
                include: {
                    model: User,
                    attributes: ['id', 'name']
                },
                // option
                where: whereCondition
            });
            return infiniteScroll;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}