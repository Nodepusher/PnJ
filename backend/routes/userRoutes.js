const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/login", userController.login);
router.post("/email-verify", authController.emailAuthentication);
router.post("/send-phone-verify", authController.sendVerifyPhoneCode);
router.post("/phone-verify", authController.phoneAuthentication);
router.post("/create-account", userController.createUser);

module.exports = router;
