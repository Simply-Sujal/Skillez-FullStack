const express = require("express");
const router = express.Router();
const { jobForm } = require("../controllers/jobs-controller");
// const authMiddleware = require("../middlewares/auth.middlewares")
// const adminMiddleware = require("../middlewares/admin-middleware")

router.route("/findyourjob").post(jobForm);

module.exports = router;