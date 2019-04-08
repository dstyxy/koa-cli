let Koa = require('koa')
let koaStatic = require('koa-static')
let router = require('./routes/router.js')
let config = require('./config/config.json')
let app = new Koa()


app.use(router.routes())
app.use(router.allowedMethods())


app.use(koaStatic(__dirname + '/public'))


app.listen(config.port,(err) => {
  if(err) {
    throw err
  } else {
    console.log(`服务开启在${config.port}端口`)
  }
})