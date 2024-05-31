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
    findAllForInfiniteScroll: async (limit, page, category ) => {
        try {
            console.log("category",category === "false")
            // var test = category
            // if(!category){
            //     test = ''
            // }

            whereCondition = {};
            if (category !== 'all') {
                whereCondition = { category: category };
            }
            const offset = (page - 1) * limit;
            // if(category === "all"){
            //     let infiniteScroll = await Board.findAll({
            //         limit: limit,
            //         offset: offset,
            //         order: [['created_at', 'DESC']],
            //         include: {
            //             model: User,
            //             attributes: ['id', 'name']
            //         },
            //     });
            //     return infiniteScroll
            // }else{
               
            // }

            let infiniteScroll = await Board.findAll({
                limit: limit,
                offset: offset,
                order: [['created_at', 'DESC']],
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