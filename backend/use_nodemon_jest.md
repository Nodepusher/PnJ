# 1. nodemon 사용방법
### package.json 확인 
```json
    "scripts": {
    "start": "node ./server.js",
    "dev" : "nodemon ./server.js", // 이 부분 설정
    "test" : "jest",
    "test:board" : "jest tests/board"
  },
``` 
### 실행 :  npm run dev
> nodemon 사용 시, 코드 변경 시에 서버 재시작 필요 없이 자동으로 재시작 하게 해줌

# 2. Jest 테스팅 라이브러리 사용법
### package.json 확인 
```json
    "scripts": {
    "start": "node ./server.js",
    "dev" : "nodemon ./server.js", 

    // 이 부분 설정
    "test" : "jest", // /tests/**/*.js 경로에 모든 test 파일들 테스트
    "test:board" : "jest tests/board" // tests/board 경로 안에 test 파일들 테스트 (특정 테스트 js 하나만 테스트 하는것도 가능)
  },
```
### jest.config.js : jest 설정 파일
```javascript
    module.exports = {
    testEnvironment: 'node', // 테스트 환경 
    testMatch: ['**/tests/**/*.test.js'], // 테스트 할 파일들 경로
    testPathIgnorePatterns: ['/node_modules/'] 

    // 다른 추가 설정 추후 알아봐야 할 듯
  };
```
### 실행 방법
> npm test // 경로에 모든 test 파일들 테스트
> npm run test:board // package.json에 설정한 board 경로에 모든 test 실행
> npx jest --testPathPattern=boardModel // 특정 테스트만 실행

### 테스트 방식(일단 기본적인 것 --> 추후 계속 공부하면서 진행할 예정)
```javascript
    describe("name", () => { // 관련 테스트 그룹화
        beforeAll(async () => { // 테스트 실행 전에 실행 되야 할 것들
        // 주로 데이터베이스 연결이나 먼저 실행되야 하는것들
        await sequelize.sync({ force: true }); // 테스트 시작 전 데이터베이스 동기화
        });

        afterAll(async () => { // 테스트 실행 후 실행되야 하는 것들
            await sequelize.close(); // 테스트 종료 후 데이터베이스 연결 종료
        });
        
        test("name", () =>{ // 개별 테스트 정의
            const boards = await Board.findAll();

            // expect : 테스트할 값, tobe : 값비교
            expect(boards[0].category).toBe("study"); 
            expect(boards[1].title).toBe("Test Title");
        })
    })
``` 

### Jest 문법 (GPT님 감사합니다.)
#### 테스트 구조
- **`describe(name, fn)`**: 관련된 테스트 케이스를 그룹화합니다.
- **`test(name, fn)`** 또는 **`it(name, fn)`**: 개별 테스트 케이스를 정의합니다.
- **`beforeAll(fn, timeout)`**: 모든 테스트 실행 전에 한 번 실행됩니다.
- **`afterAll(fn, timeout)`**: 모든 테스트 실행 후에 한 번 실행됩니다.
- **`beforeEach(fn, timeout)`**: 각 테스트 실행 전에 실행됩니다.
- **`afterEach(fn, timeout)`**: 각 테스트 실행 후에 실행됩니다.

#### 매처 (Matchers)

##### 기본 매처
- **`expect(value)`**: 테스트할 값을 래핑합니다.
- **`.toBe(value)`**: 정확한 값을 비교합니다.
- **`.toEqual(value)`**: 객체나 배열의 모든 필드를 재귀적으로 비교합니다.
- **`.toBeNull()`**: 값이 null인지 확인합니다.
- **`.toBeUndefined()`**: 값이 undefined인지 확인합니다.
- **`.toBeDefined()`**: 값이 정의되어 있는지 확인합니다.
- **`.toBeTruthy()`**: 값이 true로 평가되는지 확인합니다.
- **`.toBeFalsy()`**: 값이 false로 평가되는지 확인합니다.
- **`.toBeGreaterThan(number)`**: 값이 지정된 수보다 큰지 확인합니다.
- **`.toBeLessThan(number)`**: 값이 지정된 수보다 작은지 확인합니다.
- **`.toBeCloseTo(number, numDigits)`**: 숫자가 근사값인지 확인합니다.
- **`.toMatch(regexpOrString)`**: 문자열이 정규표현식과 일치하는지 확인합니다.
- **`.toContain(item)`**: 배열이나 문자열이 특정 항목을 포함하는지 확인합니다.
- **`.toThrow(error?)`**: 함수가 에러를 던지는지 확인합니다.

##### 비동기 매처
- **`.resolves`**: Promise가 성공적으로 해결되는지 확인합니다.
- **`.rejects`**: Promise가 거부되는지 확인합니다.

#### Mock 함수
- **`jest.fn(implementation?)`**: Mock 함수를 생성합니다.
- **`jest.spyOn(object, methodName)`**: 객체의 메서드를 감시합니다.
- **`jest.mock(moduleName, factory, options)`**: 모듈을 모킹합니다.
- **`jest.clearAllMocks()`**: 모든 Mock 함수의 호출 기록을 지웁니다.
- **`jest.resetAllMocks()`**: 모든 Mock 함수를 초기화합니다.
- **`jest.restoreAllMocks()`**: 모든 Mock 함수를 원래 상태로 복원합니다.

### 2. 자주 사용되는 문법

- **기본 매처**: `toBe`, `toEqual`, `toBeNull`, `toBeUndefined`, `toBeDefined`, `toBeTruthy`, `toBeFalsy`
- **비동기 매처**: `resolves`, `rejects`
- **Mock 함수**: `jest.fn`, `jest.spyOn`, `jest.mock`