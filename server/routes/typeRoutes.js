const Router = require('express')
const TypeController = require('../controllers/typeController')
const checkRole = require('../middleware/CheckRoleMiddleware')

const router = new Router()

router.post('/',checkRole('ADMIN'), TypeController.create)
router.get('/', TypeController.getAll)

module.exports = router