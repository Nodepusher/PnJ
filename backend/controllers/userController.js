const userService = require('../services/user/userService')

module.exports = {
    login: (req, res) => {
        const { email, password } = req.body
        try {
            const result = userService.login(email, password)
            if (result.success) {
                res.status(200).json(result)
            } else {
                res.status(401).json(result)
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'An unexpected error occurred',
            })
        }
    },
}
