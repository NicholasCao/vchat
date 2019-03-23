import config from '../config'
import storage from './storage'


const wsUrl = `wss://${config.root}/user`

// promisify
// contacts.userWs().then(...)
export default class contacts {
  ws: any
  contacts: any
  constructor() {
    this.ws = null
    storage.get('contacts', (err:any, data: any[]) =>{
      for(let v of data){
        // 数组转为对象方便操作
        this.contacts[v.username] = v
      }
    })
  }
  createWs() {
    this.ws = new WebSocket(wsUrl)
    this.userWs()
  }
  userWs() {
    return new Promise((resolve, reject)=>{
      this.ws.onclose = () => {
        console.log('ws连接关闭!')
        this.reconnect()
      }
      this.ws.onerror = (e:any) => {
        console.log('ws连接错误!')
        reject(e)
      }
      this.ws.onopen = () => {
        console.log('ws连接成功!')
      }
      this.ws.onmessage = (e:any) => {
        resolve(e.date)
      }
    }).then(data => data)
  }
  reconnect() {
    this.createWs()
  }
}