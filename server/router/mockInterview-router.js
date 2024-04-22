const express = require("express");
const router = express.Router();
const { mockInterviewForm } = require("../controllers/mockInterview-controller");
// const authMiddleware = require("../middlewares/auth.middlewares")
// const adminMiddleware = require("../middlewares/admin-middleware")

router.route("/mockinterview").post(mockInterviewForm);

module.exports = router;