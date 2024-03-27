let Koa = require('koa')
let koaStatic = require('koa-static')
let router = require('./routes/router.js')
// let config = require('./config/config.json')
let app = new Koa()


app.use(router.routes())
app.use(router.allowedMethods())


app.use(koaStatic(__dirname + '/public'))


app.listen(8080,(err) => {
  if(err) {
    throw err
  } else {
    console.log(`服务开启在${8080}端口`)
  }
})