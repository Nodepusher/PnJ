const userRepository = require('../../repositories/user/userRepository')

module.exports = {
    login: (email, password) => {
        try {
            const user = userRepository.getUserByUserEmail(email)
            if (user && user.password === password) {
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
