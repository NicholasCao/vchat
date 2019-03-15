import storage from './storage'

// dev状态下清除缓存
storage.clear()
const conversation:any = {
  // conversation改变时触发
  onchange: null,
  chating: false,
  conversations: {username: [{isMine: false,message: 'hello' }]},
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
      console.log(object)
      storage.set('conversations', object)
      this.conversationChange()
    })
  },
  conversationChange() {
    if(!this.chating) return
    if(this.onchange) this.onchange()
  }
}

export default conversation