const express = require("express");
const {
  registerUser,
  getUser,
  loginUser,
  getUserByUsername,
  deleteUser,
  getAllUser,
} = require("../controller/UserCon");
const router = express.Router();

router.post("/register", registerUser);
router.post("/signin", loginUser);
router.get("/getUername", getUserByUsername);
router.delete("/delete", deleteUser);
router.get("/getallUser", getAllUser);
module.exports = router;
