const express = require("express")
const userinfo_handler = require("../router_handler/userinfo")
const router = express.Router()

router.get("/getuserinfo",userinfo_handler.getUserInfo)
router.post("/setuserinfo",userinfo_handler.setUserInfo)
router.post("/update/avatar",userinfo_handler.updateAvatar)

module.exports=router

