const {Router} = require('express')
const router = Router()
const { isLoggedIn } = require('../lib/auth')

const 
{
    getGuilds,
    postGuild,
    getGuild,
    putGuild,
    deleteGuild
} = require('../controller/guild/guild-controller')

const 
{
    getUserRole
} = require('../controller/guild/guild-member-controller')

router.get('/', isLoggedIn, getGuilds)
router.get('/:id', getGuild)
router.post('/', isLoggedIn, postGuild)
router.put('/:id', isLoggedIn, putGuild)
router.delete('/:id', isLoggedIn, deleteGuild)


router.get('/:guildId/:userId/role', getUserRole)

module.exports = router