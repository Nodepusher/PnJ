// server.js
/**
 * 우선 실행은 node server.js or npm start
 * 이후 배포는 pm2 start start.json
 * 개발은 nodemon? 사용 예정
 */
const express = require("express");
const { connectDB, sequelize } = require("./utils/db");
const helmet = require("helmet"); // 보안 관련 미들웨어
const cookieParser = require("cookie-parser");
const cors = require("cors");
const boardRoutes = require("./routes/boardRoutes");
const userRoutes = require("./routes/userRoutes");
// const fileRoute = require('./routes/fileRoute')
const db = require("./models"); // *** models/index.js를 참고함

const app = express();
const fs = require("fs");
const path = require("path");

const uploadsDir = path.join(__dirname, "uploads");
const tempUploadsDir = path.join(__dirname, "uploads", "temp");
const fileUploadsDir = path.join(__dirname, "uploads", "file");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
if (!fs.existsSync(tempUploadsDir)) {
  fs.mkdirSync(tempUploadsDir);
}
if (!fs.existsSync(fileUploadsDir)) {
  fs.mkdirSync(fileUploadsDir);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(helmet.frameguard({ action: "deny" })); // 클릭재킹 방지
// app.use(helmet.hsts({ maxAge: 31536000 }));
app.use(helmet.noSniff()); // 스니프 방지
app.use(helmet.xssFilter()); // xss 방지

app.use("/board", boardRoutes);
app.use("/user", userRoutes);
// app.use('/download', fileRoute)
app.use("/uploads", express.static(uploadsDir));
app.use("/uploads/temp", express.static(tempUploadsDir));
app.use("/uploads/file", express.static(fileUploadsDir));

const startServer = async () => {
  try {
    await connectDB();
    // console.log('Models:', sequelize.models); // 모델 정의 로그 추가
    // await sequelize.sync({ force: true }); // true는 기존 테이블을 삭제하고 새로 생성
    await sequelize.sync({ alter: true /* logging: console.log */ }); // 테이블 안정화 후 손실 없이 모델 변경사항 반영
    console.log("db sync");

    app.listen(4000, () => {
      console.log(`Server is running on port 4000`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
