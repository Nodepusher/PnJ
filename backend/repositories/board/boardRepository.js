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
    InsertPost : async (postData, fileJson) => {
        const transaction = await sequelize.transaction();
        // 게시물 작성
        // Board.create()
        console.log("postData :::: ", postData)
        console.log("files :::: ", fileJson.files)
        const fileData = fileJson.files
        try {
            const newPost = await Board.create(postData,{transaction})
            console.log(newPost.dataValues)
            if(fileData && fileData.length > 0){
                console.log('test')
                const filePromise = fileData.map(files => {
                    return (
                        File.create({
                            uuid: files.uuid,
                            uploadPath : files.uploadPath,
                            fileName : files.fileName,
                            fileType : files.fileType,
                            BoardId : newPost.dataValues.id,
                            UserId : postData.UserId
                        }, {transaction})
                    )
                })
                await Promise.all(filePromise)
            }
            await transaction.commit();
            return {success : true , message : '게시물 작성 성공', post : newPost}
        } catch (error) {
            await transaction.rollback();
            console.log('[boardRepository]' + '게시물 작성 오류 :::: ',error)
            return {success : false , message : '게시물 작성 실패', error}
        }
    },
    findBoardById : async(boardId) => {
        // return await Board.findAll()
    }
}