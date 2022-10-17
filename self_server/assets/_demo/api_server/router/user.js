const express = require("express")
const user_handler = require("../router_handler/user")
const router = express.Router()

router.post("/signup",user_handler.signup)
router.post("/signin",user_handler.signin)

module.exports=router

