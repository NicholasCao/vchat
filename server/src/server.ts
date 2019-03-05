import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as http from 'http'
import * as WebSocket from 'ws'

const app = new Koa()
const router = new Router()

app.use(async ctx => {
ctx.body = 'Hello World'
})
const server = http.createServer(app.callback())
const wss = new WebSocket.Server({server})

var userList:any[] = []
wss.on('connection', (ws,req) => {
	console.log(`[SERVER] connection()`)
	// ws.on('open', function open() {
	// 	ws.send('something')
	// })
	ws.on('message', (msg:string) => {
		const data = JSON.parse(msg)
		//console.log(data)

		// 加入userList
		if(userList.indexOf(data.from) === -1){
			userList.push(data.from)
		}
		let fromIndex = userList.indexOf(data.from)
		// console.log(userList)
		let index = userList.indexOf(data.to)

		// 用户离线
		if (index === -1) return

		// 发送消息到对应的客户端
		Array.from(wss.clients)[index].send(JSON.stringify(data), (err) => {
			if (err) console.log(`[SERVER] error: ${err}`)
		})

		// 断开连接时删除对应的user
		ws.on('close',() => {
			userList.splice(fromIndex,1)
			//console.log(userList)
		})
	})
})
server.listen(3000)

// router.get('/*', async (ctx) => {
//     ctx.body = 'Hello World...'
// })

// app.use(router.routes())