const {Router} = require('express')
const router = Router()

const {getVideogames, getVideogame} = require('../controller/videogame/videogame-controller')


router.post('/', getVideogames)
router.get('/:id', getVideogame)


module.exports = router;