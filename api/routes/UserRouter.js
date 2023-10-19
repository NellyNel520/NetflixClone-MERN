const router = require('express').Router()
const controller = require('../controllers/UserController')
const verify = require("../verifyToken");

router.put('/:id', verify, controller.updateUser)
router.delete('/:id', verify, controller.deleteUser)
router.get('/find/:id', verify, controller.getUserById)
router.get('/', verify, controller.getAllUsers)
router.get('/stats', verify, controller.getUserStats)

module.exports = router