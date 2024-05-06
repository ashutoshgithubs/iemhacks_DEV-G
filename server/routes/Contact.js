const express = require("express");
const router = express.Router();
const { contactFormController } = require("../controllers/ContactForm");
const { complain } = require("../controllers/complain");

router.post("/contact", contactFormController);
router.post("/complain", complain);
module.exports = router;
