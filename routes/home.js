let Router = require('koa-router')

let home = new Router()

home.get('/a',(ctx) => {
  ctx.body = 'i am home a'
})

module.exports = home