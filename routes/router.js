let Router = require('koa-router')

let home = require('./home.js')

let router = new Router()


router.use('/home', home.routes(), home.allowedMethods())


module.exports = router