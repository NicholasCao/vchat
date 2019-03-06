import * as WebSocket from 'ws'

const userWs = new WebSocket.Server({ noServer: true })

export default userWs