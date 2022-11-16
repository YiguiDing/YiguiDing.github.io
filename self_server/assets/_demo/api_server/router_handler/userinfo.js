const db = require("../db/mysql")
const bcrypt = require("bcryptjs")

const { setUserInfo_schema } = require("../schema")
const { updateAvatar_schema } = require("../schema")

module.exports.getUserInfo = (req, res) => {
    const userId = req.auth.id
    const sql = "select * from tb_users where id=?"
    db.query(sql, userId, (err, result) => {
        if (err) {
            return res.msgSend("SQL查询用户失败", err.message)
        } else if (result.length != 1)
            return res.msgSend("SQL查询用户信息不唯一")
        else {
            res.msgSend("获取用户信息成功", null, 0, { ...result[0], password: "" })
        }
    })
}



module.exports.setUserInfo = (req, res) => {
    const userId = req.auth.id
    const userInfo = req.body
    const value = setUserInfo_schema.validate({ nickname: userInfo.nickname, password: userInfo.password, email: userInfo.email });//验证表单合法性
    if (value.error) {
        return res.msgSend("用户名或密码或email格式不合法", value.error.details)
    } else {
        var setUserInfo = {}//构建用于用于更新数据库的对象
        if (userInfo.password) {
            setUserInfo.password = bcrypt.hashSync(userInfo.password)//对密码进行加密
        }
        if (userInfo.nickname) {
            setUserInfo.nickname = userInfo.nickname
        }
        if (userInfo.email) {
            setUserInfo.email = userInfo.email
        }
        const sql = "update tb_users set ? where id=?"
        db.query(sql, [setUserInfo, userId], (err, result) => {
            if (err)
                return res.msgSend("设置用户信息失败", err.message)
            else if (result.affectedRows != 1) {
                return res.msgSend("设置用户信息失败")
            } else
                return res.msgSend("设置用户信息成功", null, 0)
        })
    }
}


module.exports.updateAvatar = (req, res) => {
    const userId = req.auth.id
    const userInfo = req.body
    const value = updateAvatar_schema.validate({ avatar: userInfo.avatar });//验证表单合法性
    if (value.error) {
        return res.msgSend("avatar格式不合法", value.error.details)
    } else {
        const sql = "update tb_users set ? where id=?"
        db.query(sql, [{user_pic:userInfo.avatar}, userId], (err, result) => {
            if (err)
                return res.msgSend("更新用户头像失败", err.message)
            else if (result.affectedRows != 1) {
                return res.msgSend("更新用户头像失败")
            } else
                return res.msgSend("更新用户头像成功", null, 0)
        })
    }
}


