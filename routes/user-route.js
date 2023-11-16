const {Router} = require('express')
const router = Router()
const {getUsers, getUser} =  require('../controller/user/user-controller')

router.get('/', getUsers)
router.get('/:id', getUser)

module.exports = router