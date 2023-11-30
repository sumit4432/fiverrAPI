const express = require("express");
const { verifyToken } = require("../middleware/jwt");
const { createGig } = require("../controller/gigCon");
const router = express.Router();

router.post("/createGig", verifyToken, createGig);
// router.delete("/:id", verifyToken, deleteGig);
// router.get("/single/:id", verifyToken, getGig);
// router.get("/", verifyToken, getGigs)
module.exports = router;
