const express = require("express");
const router = express.Router();
const { serviceForm3 } = require("../controllers/resume-build-controller");
// const authMiddleware = require("../middlewares/auth.middlewares")
// const adminMiddleware = require("../middlewares/admin-middleware")

router.route("/resumebuilding").post(serviceForm3);

module.exports = router;