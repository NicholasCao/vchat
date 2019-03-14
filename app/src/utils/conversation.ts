import storage from './storage'
storage.clear()
const conversation:any = {
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
    })
  }
}

export default conversation