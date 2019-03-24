import * as WebSocket from 'ws'

const userWs = new WebSocket.Server({ noServer: true })

userWs.on('connection', (ws) => {
	console.log(`[USER_WS] connection()`)

  ws.on('message', (msg:string) => {
		const data = JSON.parse(msg)
		console.log(data)

		let username:any
		if(data.username){// 加入在线列表
			username = data.username
			console.log(`${username}连接`)
			global.userWsList.set(data.username, ws)
    }
	})
	// 断开连接时删除对应的user
	ws.on('close',() => {
		// 断开连接时删除对应的user
		let username
		global.userWsList.forEach(function(value, key, map) {
			if(value == ws){
				username = key
			}
		})
		global.userWsList.delete(username)
		console.log(`${username}断开连接`)
	})
})
  
export default userWs