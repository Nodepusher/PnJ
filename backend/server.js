// server.js
/**
 * 우선 실행은 node server.js or npm start
 * 이후 배포는 pm2 start start.json
 * 개발은 nodemon? 사용 예정
 */
const express = require('express');
const { connectDB, sequelize } = require('./utils/db');
const helmet = require('helmet') // 보안 관련 미들웨어

const cors = require('cors');

const db = require('./models'); // *** models/index.js를 참고함

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet.frameguard({ action: 'deny' })); // 클릭재킹 방지
// app.use(helmet.hsts({ maxAge: 31536000 }));
app.use(helmet.noSniff()); // 스니프 방지
app.use(helmet.xssFilter()); // xss 방지

const startServer = async () => {
  try {
    await connectDB();
    console.log('Models:', sequelize.models); // 모델 정의 로그 추가
    await sequelize.sync({ force: true }); // true는 기존 테이블을 삭제하고 새로 생성
    console.log('db sync');

    app.listen(4000, () => {
      console.log(`Server is running on port 4000`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
