const express = require("express");
const router = express.Router();
const { newsLetter } = require("../controllers/newsLetter-controller");
// const authMiddleware = require("../middlewares/auth.middlewares")
// const adminMiddleware = require("../middlewares/admin-middleware")

router.route("/sendemail").post(newsLetter);

module.exports = router;   