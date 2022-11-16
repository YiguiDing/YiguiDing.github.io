const Joi = require("joi")

const id = Joi.number().integer().min(1)
const username = Joi.string().alphanum().min(3).max(30)
const password = Joi.string().alphanum().min(3).max(30)//.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
const nickname = Joi.string().alphanum().min(3).max(30)
const email= Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
const avatar = Joi.string().dataUri()//'data:image/png;base64,VE9PTUFOWVNFQ1JFVFM='

const sign_schema = Joi.object({
    username:username.required(),
    password:password.required(),
})

const setUserInfo_schema = Joi.object({
    // id,//id不允许修改
    // username,//username不允许修改
    nickname,
    password,
    email
    }).or("nickname","password","email") //至少包含一个信息

const updateAvatar_schema = Joi.object({
    avatar:avatar.required() 

})

module.exports.sign_schema = sign_schema
module.exports.setUserInfo_schema = setUserInfo_schema
module.exports.updateAvatar_schema = updateAvatar_schema