const { sequelize } = require("../utils/db");
const Board = require("../models/boardModel");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");
const Reply = require("../models/replyModel");
const File = require("../models/fileModel");

const db = {
  User,
  Board,
  Comment,
  Reply,
  File,
  sequelize,
};

// 모델 관계 정의
db.User.hasMany(db.Board, { onDelete: "cascade" });
db.Board.belongsTo(db.User);

db.User.hasMany(db.Comment, { onDelete: "cascade" });
db.Comment.belongsTo(db.User);

db.User.hasMany(db.Reply, { onDelete: "cascade" });
db.Reply.belongsTo(db.User);

db.User.hasMany(db.File, { onDelete: "cascade" });
db.File.belongsTo(db.User);

db.Board.hasMany(db.Comment, { onDelete: "cascade" });
db.Comment.belongsTo(db.Board);

db.Board.hasMany(db.Reply, { onDelete: "cascade" });
db.Reply.belongsTo(db.Board);

db.Board.hasOne(db.File, { onDelete: "cascade" });
db.File.belongsTo(db.Board);

db.Comment.hasMany(db.Reply, { onDelete: "cascade" });
db.Reply.belongsTo(db.Comment);

module.exports = db;
