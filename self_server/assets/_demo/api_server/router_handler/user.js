const db = require("../db/mysql")
const bcrypt = require("bcryptjs")
const Joi = require("joi")
const { sign_schema } = require("../schema")
const jwt = require("jsonwebtoken")
const confg = require("../confg")



exports.signup = (req, res) => {//注册接口
    const userinfo = req.body
    const value = sign_schema.validate({ username: userinfo.username, password: userinfo.password });//验证帐号密码合法性
    if (value.error) {
        return res.msgSend("用户名或密码格式不合法", value.error.details)
    } else {
        const sql = "select * from tb_users where username=?"
        db.query(sql, userinfo.username, (err, result) => {
            if (err)
                return res.msgSend("SQL查询用户是否存在失败", err.message)
            else if (result.length != 0) {
                return res.msgSend("用户名被占用,请更换其他用户名")
            } else {
                const passwordHash = bcrypt.hashSync(userinfo.password)//对密码进行加密
                const sql = "insert into tb_users set ?"
                db.query(sql, { username: userinfo.username, password: passwordHash }, (err, result) => {
                    if (err)
                        return res.msgSend("注册用户失败", err.message)
                    else if (result.affectedRows == 0) {
                        return res.msgSend("注册用户失败")
                    } else
                        return res.msgSend("注册用户成功", null, 1)
                })
            }
        })
    }
}

exports.signin = (req, res) => {//登陆接口
    //应当先验证帐号密码是否合法;否则直接用该数据来拼接SQL查询语句将有可能导致数据库遭到注入攻击
    const userinfo = req.body
    const value = sign_schema.validate({ username: userinfo.username, password: userinfo.password });//验证帐号密码合法性
    if (value.error) {
        return res.msgSend("用户名或密码格式不合法", value.error.details)
    } else {
        const sql = "select * from tb_users where username=?"
        db.query(sql, userinfo.username, (err, result) => {//查询用户名是否存在
            if (err)
                return res.msgSend("SQL查询用户是否存在失败", err.message)
            else if (result.length != 1) {//查询结果应当有且只有一个
                return res.msgSend("用户名不存在")
            } else if (bcrypt.compareSync(userinfo.password, result[0].password) == false) {//验证密码是否正确
                return res.msgSend("密码错误,登陆失败")
            } else {
                const token = jwt.sign({ username: result[0].username, id: result[0].id }, confg.jwtSecretKey, { expiresIn: confg.jwtExpiresIn }) //生成token
                return res.send({
                    status: 0,
                    msg: "登陆成功",
                    token: "Bearer " + token //返回拼接好的token
                })
            }
        })
    }
}