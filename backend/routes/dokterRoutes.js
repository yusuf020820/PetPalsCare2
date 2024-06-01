const express = require("express");
const router = express.Router();
const dokterController = require("../controllers/dokterController");

router.post("/login", dokterController.login);
router.post("/register", dokterController.register);

module.exports = router;
