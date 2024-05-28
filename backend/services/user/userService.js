const userRepository = require('../../repositories/user/userRepository')

module.exports = {
    login: (email, password) => {
        try {
            const user = userRepository.getUserByUserEmail(email)
            if (user && user.password === password) {
                return { success: true, message: 'Login successful', user }
            }
            return { success: false, message: 'Invalid email or password' }
        } catch (error) {
            return { success: false, message: error.message }
        }
    },
}
