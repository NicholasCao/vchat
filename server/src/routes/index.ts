import * as Router from 'koa-router'

const router = new Router()

const test = function (ctx:any) {
  console.log(ctx.websocket)
  ctx.websocket.on('message'), function(msg:any) {
    ctx.ctx.websocket.send(msg)
  }
}

router.get('/', (async (ctx) => { ctx.body = 'Hello World...' }))
  .get('/test', test)
  .post('/user/signUp', () => {console.log('signUp')})

export default router
