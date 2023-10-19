const router = require('express').Router()
const controller = require('../controllers/MovieController')
const verify = require("../verifyToken");


router.put('/:id', verify, controller.updateMovie)
router.delete('/:id', verify, controller.deleteMovie)
router.get('/find/:id', verify, controller.getMovieById)
router.get('/random', verify, controller.getRandom)
router.get('/', verify, controller.getAllMovies)

router.post('/add', verify, controller.addMovie)


module.exports = router