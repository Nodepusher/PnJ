const authService = require('../services/user/authService')
import { generateAccessToken, sendAuthNumber } from './authFunctions'

const authController = {
    emailAuthentication: async (req, res) => {
        const { userEmail } = req.body
        try {
            const result = await authService.SendVerifyEmail(userEmail)
            if (result.success) {
                res.status(200).json({
                    code: 200,
                    message: '발송 성공',
                })
            } else {
                res.status(400).json({
                    code: 400,
                    message: '발송 실패 code 400',
                })
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: '발송 실패 code 500',
            })
        }
    },
}

export default authController
