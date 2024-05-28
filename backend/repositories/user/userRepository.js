const User = require('../../models/userModel')

module.exports = {
    getUserByUserEmail: (email) => {
        try {
            const user = User.findByEmail(email)
            console.log('userRepo', user)
            if (!user) {
                throw new Error('User not found')
            }
            return user
        } catch (error) {
            throw error
        }
    },
}
