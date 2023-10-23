const express = require("express");
const { registerUser, getUser } = require("../controller/UserCon");
const router = express.Router();

router.post("/register", registerUser);
router.post("/signin", );

module.exports = router;
