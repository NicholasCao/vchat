import * as WebSocket from 'ws'

const userWs = new WebSocket.Server({ noServer: true })

userWs.on('connection', (ws) => {
	console.log(`[SERVER] connection()`)

  ws.on('message', (msg:string) => {
    const data = JSON.parse(msg)
  })
})
  
export default userWs