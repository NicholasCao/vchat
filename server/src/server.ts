import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
import * as json from 'koa-json'
import * as http from 'http'
import * as WebSocket from 'ws'
import * as url from 'url'
import * as mongoose from 'mongoose'

import config from './config'
import api from './routes'
import msgWs from './ws/msgWs'
import userWs from './ws/userWs'

mongoose.connect(config.db, { useNewUrlParser: true })
mongoose.connection.on("error", console.error)
mongoose.connection.on("open", () => console.log("MongoDB connection successed"))

const app = new Koa(),
  router = api.prefix('/vchat')

app.use(bodyParser())
app.use(json())
app.use(router.routes())

const server = http.createServer(app.callback())

declare global {
	namespace NodeJS {
		interface Global {
      msgWsList: Map<string,any>,
      userWsList: Map<string,any>
		}
	}
}
global.msgWsList = new Map()
global.userWsList = new Map()

// ws router
server.on('upgrade', (request, socket, head) => {
  const pathname = url.parse(request.url).pathname
  if (pathname === '/vchat/msg') {
    msgWs.handleUpgrade(request, socket, head, (ws) => {
      msgWs.emit('connection', ws)
    })
  } else if (pathname === '/vchat/user') {
    userWs.handleUpgrade(request, socket, head, (ws) => {
      userWs.emit('connection', ws)
    })
  } else {
    socket.destroy()
  }
})
server.listen(3000)

