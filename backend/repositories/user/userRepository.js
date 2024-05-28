const User = require('../../models/userModel')

module.exports = {
    getUserByUserEmail: (email) => {
        try {
            const user = User.findByEmail(email)
            console.log('userRepo', user)
            if (!user) {
                throw new Error('유저를 찾지 못함')
            }
            return user
        } catch (error) {
            throw error
        }
    },
}
