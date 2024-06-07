const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/db").sequelize;
const Board = require("../../models/boardModel");
const User = require("../../models/userModel");
const File = require("../../models/fileModel");
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
    },
    createPost : async () => {
        
    },



    findPostById: async (id) => {
        const t = sequelize.transaction()
        try {
            const postData = await Board.findOne({
                where: { id: id },
                include: [
                    { model: User },
                    { model: File }
                ],
            },{transaction :t});

            const userId = postData.User.id
            const allUserPost = await Board.findAll({
                where:{ UserId : userId},
                limit: 3
            },{transaction: t})

            await t.commit()
            return {post : postData, userPost : allUserPost};
            return postData;
        } catch (error) {
            // 오류 처리
            console.error(error);
            await t.rollback()
            throw error;
        }
    }
    
}