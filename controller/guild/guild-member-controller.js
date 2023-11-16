const GuildShema = require('../../database/schema/Guild')

const getUserRole = async (req, res) => {
    try {
        const {guildId, userId} = req.params
        await GuildShema.findById(guildId)
        .then((guild) => {
            const role = guild.members.find(member => member.id == userId).role
            return res.json({role})
        }).catch((error) => {
            const errorLog = error.message
            return res.status(500).json({
                'Oh no!': errorLog
            }) 
        })
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        })  
    }
}

const addUser = async (req, res) => {
    try {
        const {guildId} = req.params
        const {userId, role} = req.body
        await GuildShema.updateOne({_id: guildId}, {$push: { members: {userId, role}}})
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        })  
    }
}

module.exports = {
    getUserRole,
    addUser
}