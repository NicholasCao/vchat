import * as Router from 'koa-router'

import user from '../controllers/user'

const router = new Router()

router.get('/', (async (ctx) => { ctx.body = 'Hello World...' }))
  .get('/user/search/:username', user.search)
  .post('/user/signUp', user.signUp)
  .post('/user/login', user.login)

export default router
