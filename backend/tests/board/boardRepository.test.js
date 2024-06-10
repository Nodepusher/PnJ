/**
 * @file 서비스 테스트
 * @namespace boardService.test
 * @test boardService 테스트 Sequelize는 데이터베이스 연동
 * @requires sequelize
 *
 * Jest에서 사용되는 다른 주요 기능에 대한 설명:
 *
 * beforeAll: describe 블록 내에서 가장 처음 실행되는 테스트 전에 실행되는 함수
 * afterAll: describe 블록 내에서 가장 마지막에 실행되는 테스트 후에 실행되
 * test: 테스트 케이스를 정의하는 함수, 실제로 테스트하는 코드는 이 함수 내에서 작성
 * expect: 특정 값을 기대하는지를 검사하는 함수, 예상되는 결과와 실제 결과를 비교하여 테스트의 성공 여부를 결정
 */

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/db").sequelize;
const Board = require("../../models/boardModel");
const User = require("../../models/userModel");
const Reply = require("../../models/replyModel");
const db = require('../../models')

const boardService = require("../../services/board/boardService");
const boardRepository = require("../../repositories/board/boardRepository");
describe("서비스 테스트", () => {
  beforeAll(async () => {
    // await sequelize.sync({ force: true }); // 테스트 시작 전 데이터베이스 동기화
    // // 테스트 데이터를 삽입
    // await Board.bulkCreate([
    //   { category: "study", title: "Board 1", content: "Content 1" },
    //   { category: "info", title: "Board 2", content: "Content 2" },
    //   { category: "qna", title: "Board 3", content: "Content 3" },
    // ]);
  });

  afterAll(async () => {
    await sequelize.close(); // 테스트 종료 후 데이터베이스 연결 종료
  });

  test("getAllBoard", async () => {
    // const boards = await boardService.getAllBoards();
    const boards = await Board.findAll();
    console.log("게시판 갯수 : ", boards.length);
    console.log(
      boards.forEach((v) =>
        console.log(
          "title : ",
          v.title,
          " content : ",
          v.content,
          " category : ",
          v.category
        )
      )
    );
    // expect(boards[0].category).toBe("study");
    // expect(boards[1].title).toBe("Test Title");
  });

    test("더미데이터 생성", async () => {
      for (let i = 0; i < 5; i++) {
        await Board.create({
          category: "qna",
          title: "Test qna Title" + ":::" + i,
          content: "Test qna Content" + ":::" + i,
        });
        await Board.create({
          category: "study",
          title: "Test study Title" + ":::" + i,
          content: "Test study Content" + ":::" + i,
        });
        await Board.create({
          category: "info",
          title: "Test info Title" + ":::" + i,
          content: "Test info Content "+ ":::" + i,
        });
      }
    });

  test("시퀄라이저 쿼리 테스트", async () => {
    const categoryInfo = await Board.findAll({
      where: {
        category: "info",
      },
    });
    const categoryStudy = await Board.findAll({
      where: {
        category: "study",
      },
    });
    const categoryQna = await Board.findAll({
      where: {
        category: "qna",
      },
    });
    console.log(categoryInfo.map((board) => board.dataValues));
    console.log(categoryStudy.map((board) => board.dataValues));
    console.log(categoryQna.map((board) => board.dataValues));
    console.log((await boardRepository.findAllByCategory('info')).map(v => v.dataValues))
  });


  test('무한스크롤 레포 테스트', async() => {
    const option = {
      where : {
        category : ''
      }
    }
    const limit = 8;
    const page = 1;
    const offset = (page - 1) * limit;
    const infiniteScroll = await Board.findAll({
        limit : limit,
        offset : offset,
        order : [[`created_at`, 'DESC']],
        include : {
            model : User,
            attributes: ['id', 'name']
        },
        option
        
    })
    let category ="";
    await boardRepository.findAllForInfiniteScroll(limit, page, category)
    console.log(infiniteScroll.map(board => board.dataValues.category))
    console.log(infiniteScroll.length)
  })
  test.only("test", async() => {
    const replyContent = { BoardId: '120', content: 'test', UserId: 1, CommentId: 2 }
    try {
      // const reply = await Reply.create(replyContent)
      const reply = await boardRepository.InsertReply(replyContent)
      console.log(reply)
    } catch (error) {
      console.log(error.message)
    }

  })
});
