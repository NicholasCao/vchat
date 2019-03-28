import storage from './storage'

// dev状态下清除缓存
storage.clear()

// 事件驱动 -> 动态更新
const conversation:any = {
  // conversation改变时触发
  onchange: null,
  conversations: {littleV: [{isMine: false,message: 'hello' }]},
  getConversations() {
    storage.get('conversations', (err:any, object:any) => {
      this.conversations = object
    })
  },
  getConversation(username:string, cb:any) {
    storage.get('conversations', (err:any, object:any) => {
      cb(object[username])
    })
  },
  updateConversations(username:string, msg:object) {
    storage.get('conversations', (err:any, object:any) => {
      if(object == null){
        object = this.conversations
      }
      if(!object[username]) object[username] = []
      object[username].push(msg)
      this.conversations = object
      storage.set('conversations', object)
      this.conversationChange()
    })
  },
  conversationChange() {
    if(this.onchange)this.onchange()
    console.log('onchange!')
  }
}

export default conversation