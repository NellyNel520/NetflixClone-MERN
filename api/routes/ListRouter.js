const router = require('express').Router()
const controller = require('../controllers/ListController')
const verify = require("../verifyToken");


router.put('/:id', verify, controller.updateList)
router.delete('/:id', verify, controller.deleteList)
router.get('/', verify, controller.getList)
router.post('/add', verify, controller.addList)


module.exports = router 