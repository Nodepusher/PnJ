const { Sequelize, DataTypes } = require('sequelize')
const express = require('express')
const User = require('../../models/userModel')
const { sequelize } = require('../../utils/db')
const { getUserByUserEmail } = require('../../repositories/user/userRepository')
const userService = require('../../services/user/userService')
const userController = require('../../controllers/userController')
const userRoutes = require('../../routes/userRoutes')

const app = express()

beforeAll(async () => {
    await sequelize.sync()
})

afterAll(async () => {
    await sequelize.close()
})
/*
test('더미데이터 생성', async () => {
    await User.bulkCreate([
        {
            email: 'testuser2@example.com',
            phone: '123-456-7890',
            password: 'password123',
            name: 'Test User 2',
            age: 25,
            status: 'active',
            profile: 'profile1.jpg',
        },
        {
            email: 'testuser3@example.com',
            phone: '234-567-8901',
            password: 'password456',
            name: 'Test User 3',
            age: 30,
            status: 'inactive',
            profile: 'profile2.jpg',
        },
        {
            email: 'testuser4@example.com',
            phone: '345-678-9012',
            password: 'password789',
            name: 'Test User 4',
            age: 35,
            status: 'active',
            profile: 'profile3.jpg',
        },
    ])
})
*/

test('test getUserByUserEmail', async () => {
    // expect(()=>getUserByUserEmail('user@gamil.com')).toThrow()
    // await expect(() => getUserByUserEmail('testuser3@example.com')).toThrow()
    const testEmail = 'testuser3@example.com'
    const testPassword = 'password456'
    await expect(() => userService.login(testEmail, testPassword)).toThrow()
})

test('test response', async () => {
    const response = await userService.login(
        'testuser3@example.com',
        'password456'
    )
    expect(response.success)
    expect(response.message)
})

test('test login with valid credentials', async () => {
    const req = {
        body: { email: 'testuser3@example.com', password: 'password456' },
    }
    const res = mockResponse()
    expect(userController.login(req, res)).rejects.toThrow()
})

// 테스트에서 사용할 가짜 응답 객체 생성
function mockResponse() {
    const res = {}
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
}

test('test routes', async () => {
    await userRoutes.post('/login', result)
    expect(res.status).toBe(200)
    expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: '로그인 성공',
        user: expect.any(Object),
    })
})

test('test phone verify', async () => {
    let verifyCode = String(Math.floor(Math.random() * 1000000)).padStart(
        6,
        '0'
    )
    userService.verifyPhone(phone, verifyCode)
})
