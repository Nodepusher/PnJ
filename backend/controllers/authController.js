const authService = require('../services/user/authService')

module.exports = {
    sendVerifyPhoneCode: async (req, res) => {
        const { phone } = req.body
        try {
            const result = await authService.sendVerifyPhoneCode(phone)
            if (result.success) {
                res.status(200).json({
                    code: 200,
                    message: 'sendPhoneVerifyCode Success',
                })
            } else {
                res.status(400).json({
                    code: 400,
                    message: 'sendPhoneVerifyCode Fail code 400',
                })
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'code 500',
            })
        }
    },
    phoneAuthentication: async (req, res) => {
        const { verifyCode } = req.body
        try {
            const result = await authService.verifyPhone(verifyCode)
            if (result.success) {
                res.status(200).json({
                    code: 200,
                    message: 'Phone Verify Success',
                })
            } else {
                res.status(400).json({
                    code: 400,
                    message: 'phoneAuthentication Fail code 400',
                })
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'verifyPhone code 500',
            })
        }
    },
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
