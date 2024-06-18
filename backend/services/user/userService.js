const User = require("../../models/userModel");
const userRepository = require("../../repositories/user/userRepository");
const path = require("path");

module.exports = {
  login: async (email, password) => {
    try {
      const user = await userRepository.getUserByUserEmail(email);

      if (!user) {
        throw new Error("존재하지 않는 사용자입니다.");
      }

      if (user.password !== password) {
        throw new Error("잘못된 패스워드입니다.");
      }

      if (user.status === "require_verify") {
        return { success: false, status: "require_verify" };
      }

      return { success: true, message: "로그인 성공", user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
  createUser: async (email, phone, password, name) => {
    try {
      const existUserVerify = await userRepository.getUserByUserEmail(email);
      if (existUserVerify) {
        return {
          success: false,
          message: "중복된 유저 입니다.",
          email: existUserVerify.email,
          result: "duplEmail",
        };
      }

      const user = await userRepository.createUser(
        email,
        phone,
        password,
        name
      );
      if (!user) {
        throw new Error("유저 생성 실패");
      } else if (user) {
        return {
          success: true,
          message: "유저 생성 성공",
          email: user.email,
          result: "success",
        };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
  getMyPost: async (userId, sort) => {
    try {
      if (!userId) {
        throw new Error("User not found");
      }
      let order = [];
      if (sort === "최신순") {
        order = [["createdAt", "ASC"]];
      } else if (sort === "오래된순") {
        order = [["createdAt", "DESC"]];
      }
      const where = { user_id: userId };
      const include = [{ model: User, attributes: ["id"] }];

      const myPosts = await userRepository.getBoards(where, include, order);
      return { success: true, myPosts };
    } catch (error) {
      console.error("Error in getMyPost service:", error);
      return { success: false, message: error.message };
    }
  },

  deleteMyPost: async (postId) => {
    try {
      if (!postId) {
        throw new Error("postId not found");
      }
      const where = { id: postId };
      await userRepository.deleteMyPost(where);
      return { success: true, message: "delete MyPost Sucess" };
    } catch (error) {
      console.error("Error in deleteMyPost userService:", error);
      return { success: false, message: error.message };
    }
  },

  updateUserInfo: async (email, include) => {
    try {
      if (!email) {
        throw new Error("User not found");
      }
      const where = { email: email };
      await userRepository.updateUser(include, where);
      return { success: true, message: "update user info success" };
    } catch (error) {
      console.error("Error in updateUserInfo userService:", error);
      return { success: false, message: error.message };
    }
  },
};
