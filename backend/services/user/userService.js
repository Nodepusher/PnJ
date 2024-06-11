const User = require("../../models/userModel");
const userRepository = require("../../repositories/user/userRepository");

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
  resetPassword: async (newPassword) => {},
  getMyPost: async (email) => {
    try {
      const user = await userRepository.getUserByUserEmail(email);

      if (!user) {
        throw new Error("User not found");
      }

      const where = { userId: user.id };
      const include = [{ model: User, attributes: ["email"] }];

      const myPosts = await userRepository.getBoards(where, include);

      return { success: true, myPosts };
    } catch (error) {
      console.error("Error in getPostsByUserEmail service:", error);
      return { success: false, message: error.message };
    }
  },
};
