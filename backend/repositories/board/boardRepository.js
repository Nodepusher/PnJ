const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/db").sequelize;
const Board = require("../../models/boardModel");
const User = require("../../models/userModel");
const db = require('../../models')

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
    },
    findAllForInfiniteScroll: async (limit, page, category ) => {
        try {
            console.log("category",category === "false")
            // var test = category
            // if(!category){
            //     test = ''
            // }
            const offset = (page - 1) * limit;
            if(category === "false"){
                let infiniteScroll = await Board.findAll({
                    limit: limit,
                    offset: offset,
                    order: [['created_at', 'DESC']],
                    include: {
                        model: User,
                        attributes: ['id', 'name']
                    },
                });
                return infiniteScroll
            }else{
                let infiniteScroll = await Board.findAll({
                    limit: limit,
                    offset: offset,
                    order: [['created_at', 'DESC']],
                    include: {
                        model: User,
                        attributes: ['id', 'name']
                    },
                    // option
                    where: {
                        category : category
                    }
                });
                return infiniteScroll;
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}