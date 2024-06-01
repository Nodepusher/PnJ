const userRepository = require('../../repositories/user/userRepository')

module.exports = {
    verifyPhone: async (phone, verifyCode) => {
        // 메시지 SDK 불러오기
        const msgModule = require('coolsms-node-sdk').default

        // 인증을 위해 발급받은 본인의 API Key를 사용합니다.
        const apiKey = 'NCSOVQUCURQNJCG8'
        const apiSecret = 'ONFRQODRFUQEZNQIYROTWAGBDUCYXHGG'
        const messageService = new msgModule(apiKey, apiSecret)

        messageService
            .sendOne({
                to: phone,
                from: '01029237309',
                text: `[PnJ]본인확인 인증번호는(${verifyCode}) 입니다.`,
            })
            .then((res) => console.log(res))
    },
    verifyEmail: async (userEmail) => {
        const nodemailer = require('nodemailer')
        const ejs = require('ejs')
        const crypto = require('crypto')
        router.post('/mail', (req, res, next) => {
            // Request body에 실어져 있는 데이터 가져오기
            // 매개변수로 처리했음 컨트롤러에서 req를 받아서 userEmail을 매개변수로 넘겨주면 될거같음
            // const userEmail = req.params.userEmail;

            //해시코드 생성
            const code = crypto.randomBytes(3).toString('hex')
            //DB에 해당 유저 튜플에 코드 값 UPDATE 코드 .. 생략

            //발송 할 ejs 준비
            let emailTemplate
            ejs.renderFile(
                '../../utils/registerVerify.ejs', //ejs파일 위치
                { email: userEmail, code: code },
                (err, data) => {
                    //ejs mapping
                    if (err) {
                        console.log(err)
                    }
                    emailTemplate = data
                }
            )

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                // host를 gmail로 설정
                host: 'smtp.gmail.com',
                port: 587,
                auth: {
                    user: 'dev-imoong@gmail.com',
                    pass: 'xium mpka ocfy qjef',
                },
            })

            // send mail
            transporter.sendMail({
                from: '닉네임<PnJ@example.com>',
                to: userEmail,
                subject: '[PnJ] 회원가입 인증메일 입니다.',
                html: emailTemplate,
            })
        })
    },
}
