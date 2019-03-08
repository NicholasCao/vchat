import * as jwt from 'jsonwebtoken'

import User from '../models/user'
import config from '../config'


// 登录
const login = async (ctx:any) => {
  const { username, password } = ctx.request.body
  if(new RegExp(/^[A-Za-z0-9]{6,10}$/).test(username)&&new RegExp(/^[A-Za-z0-9]{6,10}$/).test(password)){
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
  } else {
    // 非法输入
    ctx.body = {
      success: false,
      info: 'invalid input'
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
    // 6-10位英文字母or数字
    if(!new RegExp(/^[A-Za-z0-9]{6,10}$/).test(username)){
      ctx.body = {
        success: false,
        info: '用户名应为6-10位英文字符或数字'
      }
    } else if(!new RegExp(/^[A-Za-z0-9]{6,10}$/).test(password)){
      ctx.body = {
        success: false,
        info: '密码应为6-12位英文字符或数字'
      }
    } else {
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
    }
  } else {
    ctx.body = {
      success: false,
      info: 'username already exists'
    }
  }
}

// 添加好友
const addFriend = async (ctx:any) => {
  const { _id, friendId, friendUsername } = ctx.request.body
  let user:any = await User.findOne({ _id }).catch(err => {
    console.log(err)
  })
  if(friendId){
    let friend:any = await User.findOne({ friendId }).catch(err => {
      console.log(err)
    })
  } else if(friendUsername) {
    let friend:any = await User.findOne({ friendUsername }).catch(err => {
      console.log(err)
    })
  }
}

// 搜索用户
const search = async (ctx:any) => {
  const {username} = ctx.request.body
  let user:any = await User.findOne({ username }).catch(err => {
    console.log(err)
  })
  if(user != null) {
    ctx.body = {
      success: true,
      user: user,
      id: user._id
    }
  } else {
    ctx.body = {
      success: false,
      info: 'user does not exit'
    }
  }
}
export default {
  login,
  signUp,
  addFriend,
  search
}