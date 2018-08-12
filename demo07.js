const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

let home = new Router()
home
  .get('/berial',async(ctx, next) => {
    ctx.body = 'hello berial'
  })
  .get('/todo',async(ctx,next) => {
    ctx.body = 'Todo page'
  })

let page = new Router()
page
  .get('/berial',async(ctx,next) => {
    ctx.body = 'page berial'
  })
  .get('/todo',async(ctx,next) => {
    ctx.body = 'page todo'
  })

let router = new Router()
router.use('/home',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, ()=>{
  console.log('starting at port 3000')
})

