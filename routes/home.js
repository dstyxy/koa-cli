let Router = require('koa-router')
let home = new Router()
let fs = require('fs')

home.get('/a',(ctx) => {
  ctx.body = 'i am home a'
})

module.exports = home