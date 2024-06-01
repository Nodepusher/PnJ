const userRepository = require('../../repositories/user/userRepository')

module.exports = {
    login: async (email, password) => {
        try {
            const user = await userRepository.getUserByUserEmail(email)
            if (!user) {
                throw new Error('없는 유저입니다.')
            } else if (user.password !== password) {
                throw new Error('패스워드를 틀렸습니다.')
            } else if (user && user.password === password) {
                return { success: true, message: '로그인 성공', user }
            }
            return {
                success: false,
                message: '올바르지 않은 이메일 패스워드 입니다.',
            }
        } catch (error) {
            return { success: false, message: error.message }
        }
    },
}
