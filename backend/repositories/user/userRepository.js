const { assign } = require("nodemailer/lib/shared");
const User = require("../../models/userModel");
const Board = require("../../models/boardModel");

module.exports = {
  // 이메일 확인
  getUserByUserEmail: async (inputEmail) => {
    try {
      const user = await User.findOne({ where: { email: inputEmail } }); // 조건을 객체로 전달
      return user;
    } catch (error) {
      throw error;
    }
  },
  // 중복 회원 확인(핸드폰번호로)
  checkUserByPhone: async (phone) => {
    try {
      const user = await User.findOne({ where: { phone } });
      return user;
    } catch (error) {
      console.error("Error checking user by phone:", error);
      throw error;
    }
  },
  // 유저 생성
  createUser: async (email, phone, password, name) => {
    let result;
    try {
      result = User.create({
        email: email,
        phone: phone,
        password: password,
        name: name,
        status: "require_verify",
        profile: "default_image",
      });
    } catch (error) {
      throw error;
    }
    return result;
  },
  // 이메일 인증 완료후 스테이터스 변경 또는 휴면상태 변경 또는 회원 탈퇴시 delete 상태값으로 변경
  setUserStatus: async (inputEmail, status) => {
    let result;
    try {
      result = await User.update(
        { status: status },
        { where: { email: inputEmail } }
      );
    } catch (error) {
      throw error;
    }
    return result;
  },
  deleteUser: async (inputEmail, password) => {
    let result;
    try {
      result = await User.delete({
        where: { email: inputEmail, password: password },
      });
    } catch (error) {
      throw error;
    }
    return result;
  },
  //임시
  getBoards: async (where, include = []) => {
    try {
      return await Board.findAll({ where, include });
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  },
};
