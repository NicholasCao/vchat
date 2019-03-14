import * as WebSocket from 'ws'
import user from '../models/user';

const msgWs = new WebSocket.Server({ noServer: true })

msgWs.on('connection', (ws) => {
	console.log(`[SERVER] connection()`)

	ws.on('message', (msg:string) => {
		const data = JSON.parse(msg)
		console.log(data)

		let username:any
		if(data.username){// 加入在线列表
			username = data.username
			global.users.set(data.username, ws)
		} else if(data == 'ping'){ // 心跳
			ws.send('pong')
		} else {
			if(global.users.get(data.to)){ // 对方在线
				global.users.get(data.to).send(JSON.stringify(data), (err:any) => {
					if (err) console.log(`[SERVER] error: ${err}`)
				})
			} else { // 不在线
				console.log('对方不在线')
			}
		}

		// 断开连接时删除对应的user
		ws.on('close',() => {
			global.users.delete(username)
		})
	})
})

export default msgWs