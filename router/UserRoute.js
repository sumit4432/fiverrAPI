const express = require("express");
const { registerUser, getUser } = require("../controller/UserCon");
const router = express.Router();

router.post("/register", registerUser);
router.get("/user", getUser);

module.exports = router;
