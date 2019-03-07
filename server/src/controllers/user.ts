import * as jwt from 'jsonwebtoken'

import User from '../models/user'
import config from '../config'


// 登录
const login = async (ctx:any) => {
  const { username, password } = ctx.request.body

  let user:any = await User.findOne({ username })
  if(user != null) {
    if(password == user.password) {
      const token = jwt.sign({
        id: user._id,
      }, config.secret)
      ctx.body = {
        success: true,
        id: user._id,
        token
      }
    } else {
      // 密码不正确
      ctx.body = {
        success: false,
        info: 'password is incorret'
      }
    }
  } else {
    // 用户不存在
    ctx.body = {
      success: false,
      info: 'user does not exist'
    }
  }
}

// 注册
const signUp = async (ctx:any) => {
  const { username, password, name } = ctx.request.body

  let user:any = await User.findOne({ username }).catch(err => {
    console.log(err)
  })
  if(user != null) {
    user = new User({
      username,
      password,
      name,
      contacts: new Map()
    })
    let result = await user.save().catch((err:any) => {
      console.log(err)
    })
    ctx.body = {
      success: true,
      user: result
    }
  } else {
    ctx.body = {
      success: false,
      info: 'username already exists'
    }
  }
}

const addBuddy = async (ctx:any) => {
  const { _id, buddyId } = ctx.request.body
}
export default {
  login,
  signUp,
  addBuddy
}