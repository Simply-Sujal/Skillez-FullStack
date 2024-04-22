const express = require("express");
const allContact = require("../controllers/admin-contact-controller");

const router = express.Router();

router.route("/contactadmin").get(allContact);

module.exports = router;