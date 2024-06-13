const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.post("/send-phone-verify", authController.sendVerifyPhoneCode);
router.post("/phone-verify", authController.phoneAuthentication);
router.post("/exist-verify", authController.existUserVerify);

router.post("/create-account", userController.createUser);
router.post("/email-verify", authController.emailAuthentication);

router.get("/confirmation/:token", authController.confirmEmail);

router.get("/myPost", userController.getMyPost);

router.get("/check-auth", userController.checkAuthenticated);

module.exports = router;
