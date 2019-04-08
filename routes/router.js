let Router = require('koa-router')

let home = require('./home.js')
let video = require('./video.js')
let router = new Router()


router.use('/home', home.routes(), home.allowedMethods())
router.use('/video', video.routes(), video.allowedMethods())


module.exports = router