import config from '../config'
import storage from './storage'
import conversation from './conversation'

const wsUrl = `wss://${config.root}/msg`

const heartCheck:any = {
  timeout: 60000,        //1分钟发一次心跳
  timeoutObj: null,
  serverTimeoutObj: null,
  reset: function(){
    clearTimeout(this.timeoutObj)
    clearTimeout(this.serverTimeoutObj)
    return this
  },
  start: function(){
    this.timeoutObj = setTimeout(() => {
      /*
      / 发送一个心跳，后端收到后，返回一个心跳消息，
      / onmessage拿到返回的心跳就说明连接正常
      */
      im.ws.send('ping')
      console.log('ping!')
      this.serverTimeoutObj = setTimeout(() => { //如果超过一定时间还没重置，说明后端主动断开了
        im.ws.close()
      }, this.timeout)
    }, this.timeout)
  }
}

interface msgDetail {
  type: 'text' | 'img',
  content: string,
  from: string,
  to: string
}
interface Im{
  ws: any,
  createWs: () => void,
  initEventHandle: () => void,
  reconnect: () => void
  sendMsg: (data:msgDetail) => void,
}

const im:Im = {
  ws: null,
  createWs() {
    this.ws = new WebSocket(wsUrl)
    this.initEventHandle()
  },
  initEventHandle() {
    this.ws.onclose = () => {
      console.log('ws连接关闭!')
      // this.reconnect()
    }
    this.ws.onerror = (e:any) => {
      console.log('ws连接错误!')
      console.log(e)
      // this.reconnect()
    }
    this.ws.onopen = () => {
      storage.get('username', (err:any, value:any) => {
        this.ws.send(JSON.stringify({username: value}))
      })
      heartCheck.reset().start()      //心跳检测重置
      console.log('ws连接成功!')
    }
    this.ws.onmessage = (e:any) => {
      heartCheck.reset().start()  //如果获取到消息，心跳检测重置
      console.log('ws收到消息:' + e.data)
      if(e.data != 'pong'){
        let msg = JSON.parse(e.data)
        if(msg.type = 'text'){
          conversation.updateConversations(msg.from, {
            isMine: false,
            message: msg.content
          })
        }
      }
    }
  },
  reconnect() {
    this.createWs()
    console.log('重新连接')
  },
  sendMsg(msg) {
    if(msg.type = 'text'){
      conversation.updateConversations(msg.to, {
        isMine: true,
        message: msg.content
      })
    }
    let data = JSON.stringify(msg)
    this.ws.send(data)
  }
}

export default im