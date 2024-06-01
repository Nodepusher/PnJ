const User = require('../../models/userModel')

module.exports = {
    getUserByUserEmail: async (inputEmail) => {
        try {
            const user = await User.findOne({ where: { email: inputEmail } }) // 조건을 객체로 전달
            return user
        } catch (error) {
            throw error
        }
    },
}
