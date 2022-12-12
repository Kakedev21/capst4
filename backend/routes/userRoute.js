const express = require("express");
const router = express.Router();

//controllers
const userController = require("../controllers/client/userController");

//user
router.post("/register", userController.register);

module.exports = router;
