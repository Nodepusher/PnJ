const { request } = require('express')
const User = require('../../models/userModel')
const { sequelize } = require('../../utils/db')

beforeAll(async () => {
    await sequelize.sync()
})

afterAll(async () => {
    await sequelize.close()
})

test('should create a new user', async () => {
    const newUser = await User.create(
        {
            email: 'testuser1@example.com',
            phone: '123-456-7890',
            password: 'password123',
            name: 'Test User 1',
            age: 25,
            status: 'active',
            profile: 'profile1.jpg',
        },
        {
            email: 'testuser2@example.com',
            phone: '234-567-8901',
            password: 'password456',
            name: 'Test User 2',
            age: 30,
            status: 'active',
            profile: 'profile2.jpg',
        }
    )
})

describe('User Login', () => {
    test('should login successfully with correct credentials', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({ email: 'testuser1@example.com', password: 'password123' })

        expect(response.statusCode).toBe(200)
        expect(response.body.success).toBe(true)
        expect(response.body.message).toBe('Login successful')
        expect(response.body.user.email).toBe('testuser1@example.com')
    })

    test('should fail login with incorrect credentials', async () => {
        const response = await request(app)
            .post('/users/login')
            .send({ email: 'testuser1@example.com', password: 'wrongpassword' })

        expect(response.statusCode).toBe(401)
        expect(response.body.success).toBe(false)
        expect(response.body.message).toBe('Invalid email or password')
    })
})
