import * as WebSocket from 'ws'

const msgWs = new WebSocket.Server({ noServer: true })

msgWs.on('connection', (ws) => {
	console.log(`[SERVER] connection()`)

	ws.on('message', (msg:string) => {
		const data = JSON.parse(msg)
		//console.log(data)

		// 加入userList
		if(global.userList.indexOf(data.from) === -1){
			global.userList.push(data.from)
		}
		let fromIndex = global.userList.indexOf(data.from)
	  //console.log(global.userList)
		let index = global.userList.indexOf(data.to)

		// 用户离线
		if (index === -1) return

		// 发送消息到对应的客户端
		Array.from(msgWs.clients)[index].send(JSON.stringify(data), (err) => {
			if (err) console.log(`[SERVER] error: ${err}`)
		})

		// 断开连接时删除对应的user
		ws.on('close',() => {
			global.userList.splice(fromIndex,1)
			//console.log(global.userList)
		})
	})
})

export default msgWs