const User = require('../../models/userModel')

module.exports = {
    // 이메일 확인
    getUserByUserEmail: async (inputEmail) => {
        try {
            const user = await User.findOne({ where: { email: inputEmail } }) // 조건을 객체로 전달
            return user
        } catch (error) {
            throw error
        }
    },
    // 유저 생성
    createUser: async (email, phone, password, name, status, profile) => {
        try {
            const result = User.create({
                email: email,
                phone: phone,
                password: password,
                name: name,
                status: 'require_verify',
                profile: profile || null,
            })
        } catch (error) {
            throw error
        }
        return result
    },
    // 이메일 인증 완료후 스테이터스 변경 또는 휴면상태 변경 또는 회원 탈퇴시 delete 상태값으로 변경
    setUserStatus: async (inputEmail, status) => {
        try {
            const result = await User.update(
                { status: status },
                { where: { email: inputEmail } }
            )
        } catch (error) {
            throw error
        }
        return result
    },
    deleteUser: async (inputEmail, password) => {
        try {
            const result = await User.delete({
                where: { email: inputEmail, password: password },
            })
        } catch (error) {
            throw error
        }
        return result
    },
}
