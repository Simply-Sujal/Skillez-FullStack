const express = require("express");
const router = express.Router();
const { contactForm, deleteContactById } = require("../controllers/contact-controller");
const authMiddleware = require("../middlewares/auth.middlewares")
const adminMiddleware = require("../middlewares/admin-middleware")

router.route("/contact").post(contactForm);

router.route("/contact/delete/:id").delete(authMiddleware, adminMiddleware, deleteContactById);

module.exports = router;