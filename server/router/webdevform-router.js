const express = require("express");
const router = express.Router();
const { serviceForm } = require("../controllers/webdevform-controllers");
// const authMiddleware = require("../middlewares/auth.middlewares")
// const adminMiddleware = require("../middlewares/admin-middleware")

router.route("/projectbuilding").post(serviceForm);

module.exports = router;