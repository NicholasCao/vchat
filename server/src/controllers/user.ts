import * as jwt from 'jsonwebtoken'

import User from '../models/user'
import config from '../config'

interface LittleV {
  user: any,
  init: any,
  addFriend: any
}

// 小V
const littleV:LittleV = {
  user: null,
  init: async function () {
    let username = 'littleV',
      password = config.littleVPassword,
      name = '小V'
    var user:any = await User.findOne({ username }).catch(err => {
      console.log(err)
    })
    if (user == null) {
      user = new User({
        username,
        password,
        name,
        contacts: []
      })
      user = await user.save().catch((err:any) => {
        console.log(err)
      })
    }
    this.user = user
  },
  addFriend: async function (user:any) {
    this.user.contacts.push(user.username)
    this.user = this.user.save().catch((err:any) => {
      console.log(err)
    })
  }
}

// 注册小V
littleV.init()

/*
/ 登录
/ @param username
/ @param password
/ @return user 
/ @return token
/ @return success
/ @return contacts
*/
const login = async (ctx:any) => {
  const { username, password } = ctx.request.body
  if (new RegExp(/^[A-Za-z0-9]{6,10}$/).test(username) && new RegExp(/^[A-Za-z0-9]{6,10}$/).test(password)) {
    let user:any = await User.findOne({ username })
    .catch(err => {
      console.log(err)
    })
    if (user != null) {
      if (password == user.password) {
        const token = jwt.sign({
          _id: user._id,
        }, config.secret)
        let contacts = await User.find({'username': {'$in': user.contacts}}, ['username', 'name', '_id']).catch(e => console.log(e))
        ctx.body = {
          success: true,
          user,
          token,
          contacts
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

/*
/ 注册
/ @param username
/ @param password
/ @param name
/ @return user
/ @return success
*/
const signUp = async (ctx:any) => {
  const { username, password, name } = ctx.request.body
  // 检测名字
  if (!new RegExp(/^[\S|\d]{0,10}$/).test(name)) {
    ctx.body = {
      success: false,
      info: '名字不合法'
    }
  } else if (!new RegExp(/^[A-Za-z0-9]{6,10}$/).test(username)) {  // 检测用户名和密码
    ctx.body = {
      success: false,
      info: '用户名应为6-10位英文字符或数字'
    }
  } else if (!new RegExp(/^[A-Za-z0-9]{6,10}$/).test(password)) {
    ctx.body = {
      success: false,
      info: '密码应为6-12位英文字符或数字'
    }
  } else {
    let user:any = await User.findOne({ username }, ['name', 'username', '_id', 'contacts'])
    .catch(err => {
      console.log(err)
    })
    if (user != null) {
      ctx.body = {
        success: false,
        info: 'username already exists'
      }
    } else {
      user = new User({
        username,
        password,
        name,
        contacts: [littleV.user.username]
      })
      let result = await user.save().catch((err:any) => {
        console.log(err)
      })
      littleV.addFriend(result)
      ctx.body = {
        success: true,
        user: result
      }
    }
  }
}

/*
/ 尝试添加好友
/ @param username 申请人的用户名
/ @param friendUsername 好友用户名
*/
const tryFriend = async (ctx:any) => {
  const  { username, friendUsername } = ctx.request.body
  if (global.userWsList.get(friendUsername)) {
    global.userWsList.get(friendUsername).send(JSON.stringify({username, info: 'add'}), (err:any) => {
      if (err) console.log(`[SERVER] error: ${err}`)
    })
  } else {
    console.log(`${friendUsername}不在线`)
  }
}

/*
/ 同意添加好友
/ @param username 同意的人的用户名
/ @param friendUsername 申请人的用户名
/ @return friend
*/
const accept = async (ctx:any) => {
  const  { username, friendUsername } = ctx.request.body
  let user:any = await User.findOne({ username }, ['name', 'username', '_id', 'contacts'])
  .catch(err => {
    console.log(err)
  })
  let friend:any = await User.findOne({ username: friendUsername }, ['name', 'username', '_id', 'contacts'])
  .catch(err => {
    console.log(err)
  })
  try{
    user.contacts.push(friendUsername)
    friend.contacts.push(username)
    let result1 = await user.save()
    let result2 = await friend.save()
    // 将申请人的用户信息返回
    ctx.body = {
      success: true,
      friend: result2
    }
    // ws通知申请人并发送接受者的用户信息
    if (global.userWsList.get(friendUsername)) {
      global.userWsList.get(friendUsername).send(JSON.stringify({username, info: 'accept', user: result1}), (err:any) => {
        if (err) console.log(`[SERVER] error: ${err}`)
      })
    } else {
      // 用户不在线
      console.log(`${friendUsername}不在线`)
    }
  }
  catch(err) {
    console.log(err)
    ctx.body = {
      success: false,
      info: err
    }
  }
}

/*
/ 拒绝添加好友
/ @param username 申请人的用户名
*/
const reject = async (ctx:any) => {
  const  { username } = ctx.request.body
  // ws通知申请人被拒
  global.userWsList.get(username).send(JSON.stringify({info: 'reject'}), (err:any) => {
    if (err) console.log(`[SERVER] error: ${err}`)
  })
}

// 搜索用户
const search = async (ctx:any) => {
  const { username } = ctx.params
  let user:any = await User.findOne({ username }, ['name', 'username', '_id'])
  .catch(err => {
    console.log(err)
  })
  if (user != null) {
    ctx.body = {
      success: true,
      user: user
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
  tryFriend,
  accept,
  reject,
  search,
}