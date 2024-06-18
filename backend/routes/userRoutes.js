const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const uploadImage = require("../middleware/uploadImage");

const router = express.Router();

router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.post("/send-phone-verify", authController.sendVerifyPhoneCode);
router.post("/phone-verify", authController.phoneAuthentication);
router.post("/exist-verify", authController.existUserVerify);

router.post("/create-account", userController.createUser);
router.post("/email-verify", authController.emailAuthentication);

router.post("/send-reset-mail", authController.sendResetMail);
router.get("/validate-token/:token", authController.validateToken);
router.post("/req-reset-password", authController.successResetPassword);

router.get("/confirmation/:token", authController.confirmEmail);

router.get("/mypost", userController.getMyPost);
router.delete("/:postId", userController.deleteMyPost);
router.get("/check-auth", userController.checkAuthenticated);

router.put(
  "/updateUserInfo",
  uploadImage.single("profileImage"),
  userController.updateUserInfo
);

module.exports = router;
