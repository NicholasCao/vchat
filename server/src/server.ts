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

wss.on('connection', (ws) => {
	console.log(`[SERVER] connection()`)
	ws.on('open', function open() {
		ws.send('something')
	})
	ws.on('message', function (message) {
		console.log(`[SERVER] Received: ${message}`)
		ws.send(`Server: ${message}`, (err) => {
			if (err) {
				console.log(`[SERVER] error: ${err}`)
			}
		})
	})
})
server.listen(3000)

// router.get('/*', async (ctx) => {
//     ctx.body = 'Hello World...'
// })

// app.use(router.routes())