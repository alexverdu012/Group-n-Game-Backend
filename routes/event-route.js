const {Router} = require('express')
const router = Router()
const { isLoggedIn } = require('../lib/auth')

const 
{
    getEvents,
    getEvent,
    postEvent,
    putEvent,
    deleteEvent
} = require('../controller/event/event-controller')

router.get('/', getEvents)
router.get('/:id', getEvent)
router.post('/', isLoggedIn, postEvent)
router.put('/:id', isLoggedIn, putEvent)
router.delete('/:id', isLoggedIn, deleteEvent)

module.exports = router