const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth-controller");
const otpcontroller = require("../controllers/otp-Controller"); // Import the new controller
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth.middlewares");

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema), authcontroller.register);
router.route("/login").post(validate(loginSchema), authcontroller.login);
router.route("/user").get(authMiddleware, authcontroller.user);

router.post("/sendotp", otpcontroller.userOtpSend);
router.post("/verifyotp", otpcontroller.otpVerification);

module.exports = router;
