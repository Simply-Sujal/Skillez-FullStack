const express = require("express");
const router = express.Router();
const { resumeReviewForm } = require("../controllers/resume-review-controller");
// const authMiddleware = require("../middlewares/auth.middlewares")
// const adminMiddleware = require("../middlewares/admin-middleware")

router.route("/resumereview").post(resumeReviewForm);

module.exports = router;