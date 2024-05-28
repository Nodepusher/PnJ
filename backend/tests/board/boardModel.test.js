/**
 * @file 서비스 테스트
 * @namespace boardModel.test
 * @test boardModel 테스트 Sequelize는 데이터베이스 연동
 * @requires sequelize
 * 
 * Jest에서 사용되는 다른 주요 기능에 대한 설명:
 * 
 * beforeAll: describe 블록 내에서 가장 처음 실행되는 테스트 전에 실행되는 함수
 * afterAll: describe 블록 내에서 가장 마지막에 실행되는 테스트 후에 실행되
 * test: 테스트 케이스를 정의하는 함수, 실제로 테스트하는 코드는 이 함수 내에서 작성
 * expect: 특정 값을 기대하는지를 검사하는 함수, 예상되는 결과와 실제 결과를 비교하여 테스트의 성공 여부를 결정
 */


// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../../utils/db').sequelize;
// const Board = require('../../models/boardModel'); // 함수 호출 제거

// describe.only('Board Model', () => { // 이 테스트 블록만 실행 (only 설정 시)
//   // 테스트 실행 전 설정
//     beforeAll(async () => {
//     // 테스트 실행 전 기존 테이블 변경해 모델과 일치
//     await sequelize.sync({ alter: true });
//   });

//   // 테스트 종료 후 db 연결 종료
//   afterAll(async () => {
//     await sequelize.close();
//   });

//   // board 모델 테스트 케이스 정의
//   // board 인스턴스 생성 할 수 있는지 확인
//   test('게시판 생성 가능 여부', async () => {
//     const board = await Board.create({
//       category: 'study',
//       title: 'Test Title',
//       content: 'Test Content',
//     });

//     expect(board.id).toBeDefined(); // id 정의 됬는지 확인
//     expect(board.category).toBe('study'); // study로 설정 됬는지 확인
//     expect(board.title).toBe('Test Title'); // test title로 잘 설정 됫는지 확인
//     expect(board.content).toBe('Test Content'); // test content로 잘 설정됬는지 확인
//   });

//   test('누락된 상태에서 생성할 수 있는지 확인', async () => {
//     // 테스트가 한번의 단언문을 실행
//     expect.assertions(1);
//     try {
//         // 필드 없는 상태에서 인스턴스 생성 시도
//       await Board.create({});
//     } catch (e) {
//         // 오류 발생 여부
//       expect(e).toBeInstanceOf(Error);
//     }
//   });
// });
