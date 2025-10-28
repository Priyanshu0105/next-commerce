// SIGNUP & LOGIN ROUTES
const {handleLogin , handleSignup} = require("../controller/userAuth")
const express = require("express");

const router = express.Router();

router.post("/register",handleSignup);
router.post("/login", handleLogin);

module.exports = router;