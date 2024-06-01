const userService = require('../services/user/userService')

module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body
        try {
            const result = await userService.login(email, password)
            console.log('result', result)
            if (result.success) {
                res.status(200).json(result)
            } else {
                res.status(401).json(result)
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: '500',
            })
        }
    },
}
