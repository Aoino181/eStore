const Router = require('express')
const brandRouter = require('./brandRoutes')
const deviceRouter = require('./deviceRoutes')
const typeRouter = require('./typeRoutes')
const userRouter = require('./userRoutes')

const router = new Router()

router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)
router.use('/user', userRouter)

module.exports = router