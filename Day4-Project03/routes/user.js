const express = require("express");
const user = require("../models/user");
const bcrypt = require("bcrypt");
const { handleSignup, handleSignin } = require("../controller/user");
const router = express.Router()


router.post("/",handleSignup)
router.post("/login",handleSignin)


module.exports = router