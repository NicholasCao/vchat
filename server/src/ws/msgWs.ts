import * as WebSocket from 'ws'
import user from '../models/user';

const msgWs = new WebSocket.Server({ noServer: true })

msgWs.on('connection', (ws) => {
	console.log(`[SERVER] connection()`)

	ws.on('message', (msg:string) => {
		if(msg == 'ping'){ // 心跳
			ws.send('pong')
			return
		}
		const data = JSON.parse(msg)
		console.log(data)

		let username:any
		if(data.username){// 加入在线列表
			username = data.username
			console.log(`${username}连接`)
			global.users.set(data.username, ws)
		} else {
			if(global.users.get(data.to)){ // 对方在线
				global.users.get(data.to).send(JSON.stringify(data), (err:any) => {
					if (err) console.log(`[SERVER] error: ${err}`)
				})
			} else { // 不在线
				console.log('对方不在线')
			}
		}
	})
	// 断开连接时删除对应的user
	ws.on('close',() => {
		// 断开连接时删除对应的user
		let username
		global.users.forEach(function(value, key, map) {
			if(value == ws){
				username = key
			}
		})
		global.users.delete(username)
		console.log(`${username}断开连接`)
	})
})

export default msgWs