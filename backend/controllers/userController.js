const userService = require('../services/userService');

exports.loginUser = async (req, res) => {
    try {
        const token = await userService.loginUser(req.body);
        // res.status(200).json({ token });
        console.log("test")
    } catch (error) {
        // res.status(400).json({ message: error.message });
        console.log("test")
      }

}