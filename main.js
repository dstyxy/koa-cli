let Koa = require('koa')
let koaStatic = require('koa-static')
let router = require('./routes/router.js')
let conf = require('./conf/conf.json')
let app = new Koa()


app.use(router.routes()).use(router.allowedMethods())


app.use(koaStatic(__dirname + '/public'))


app.listen(conf.port,(err) => {
  if(err) {
    throw err
  } else {
    console.log(`服务开启在${conf.port}端口`)
  }
})