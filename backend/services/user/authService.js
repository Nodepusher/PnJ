const userRepository = require('../../repositories/user/userRepository')
const nodemailer = require('nodemailer')
const ejs = require('ejs')
const crypto = require('crypto')
const path = require('path')

module.exports = {
    // 폰 인증코드 보내기
    sendVerifyPhoneCode: async (phone) => {
        // 메시지 SDK 불러오기
        const msgModule = require('coolsms-node-sdk').default

        // 인증을 위해 발급받은 본인의 API Key를 사용합니다.
        const apiKey = 'NCSOVQUCURQNJCG8'
        const apiSecret = 'ONFRQODRFUQEZNQIYROTWAGBDUCYXHGG'

        const verifyCode = '000111'
        const messageService = new msgModule(apiKey, apiSecret)
        messageService
            .sendOne({
                to: phone,
                from: '01029237309',
                text: `[PnJ]본인확인 인증번호는(${verifyCode}) 입니다.`,
            })
            .then((res) => console.log(res))
    },
    // 폰 인증
    verifyPhone: async (verifyCode) => {
        try {
            if (verifyCode === '000111') {
                return {
                    success: true,
                    message: '서비스단 폰 인증 성공',
                    verifyCode,
                }
            }
        } catch (error) {
            return { success: false, message: error.message }
        }
    },

    // 인증메일 보내기
    SendVerifyEmail: async (userEmail) => {
        try {
            //해시코드 생성
            const code = crypto.randomBytes(3).toString('hex')
            //DB에 해당 유저 튜플에 코드 값 UPDATE 코드 .. 생략
            console.log('서비스단 crypto code', code)

            //발송 할 ejs 준비
            let emailTemplate
            ejs.renderFile(
                path.join(__dirname, '../../utils/registerVerify.ejs'), //ejs파일 위치
                { email: userEmail, code: code }
                /*            (err, data) => {
                //ejs mapping
                if (err) {
                    console.log(err)
                }
                emailTemplate = data
            }*/
            )

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                // host를 gmail로 설정
                host: 'smtp.gmail.com',
                port: 587,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            })

            // send mail
            transporter.sendMail({
                from: '닉네임<PnJ@example.com>',
                to: userEmail,
                subject: '[PnJ] 회원가입 인증메일 입니다.',
                html: emailTemplate,
            })
            return { success: true, message: '서비스단 메일 전송 성공' }
        } catch (error) {
            return { success: false, message: error.message }
        }
    },
}
