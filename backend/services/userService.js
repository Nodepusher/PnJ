const User = require('../models/userModel')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs');
const config = require('../config/config')

exports.loginUser = async (userData) => {
    // login 비지니스 로직 작성
    const { email, password, name } = userData;

}