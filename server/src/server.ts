import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as http from 'http'
import * as WebSocket from 'ws'
import * as url from 'url'

import router from './routes'
import msgWs from './ws/msgWs'
import userWs from './ws/userWs'

const app = new Koa()

app.use(router.routes())

const server = http.createServer(app.callback())

declare global {
	namespace NodeJS {
		interface Global {
			userList: any[]
		}
	}
}
global.userList = []

// ws router
server.on('upgrade', (request, socket, head) => {
  const pathname = url.parse(request.url).pathname
  if (pathname === '/msg') {
    msgWs.handleUpgrade(request, socket, head, (ws) => {
      msgWs.emit('connection', ws)
    })
  } else if (pathname === '/bar') {
    userWs.handleUpgrade(request, socket, head, (ws) => {
      userWs.emit('connection', ws)
    })
  } else {
    socket.destroy()
  }
})
server.listen(3000)

