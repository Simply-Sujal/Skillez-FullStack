const express = require("express");
const router = express.Router();
const { eventForm } = require("../controllers/event-controller");
// const authMiddleware = require("../middlewares/auth.middlewares")
// const adminMiddleware = require("../middlewares/admin-middleware")

router.route("/information").post(eventForm);

module.exports = router;