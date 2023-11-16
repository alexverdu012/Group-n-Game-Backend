const GuildShema = require('../../database/schema/Guild')

const getGuilds = async (req, res) => {
    try {
        const response = await GuildShema.find()
        return res.send(response)
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        })
    }
}

const getGuild = async (req, res) => {
    try {
        const {id} = req.params
        const response = await GuildShema.findById(id)
        return res.send(response)
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        }) 
    }
}

const postGuild = async (req, res) => {
    try {
        const {name, description, image, members} = req.body
        const response = await GuildShema.create({name, description, image, members})
        return res.send(response)
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        })
    }
}

const putGuild = async (req, res) => {
    try {
        const {name, description, image} = req.body
        const {id} = req.params
        const response = await GuildShema.updateOne({_id: id}, {name, description, image})
        return res.send(response)
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        })  
    }
}

const deleteGuild = async (req, res) => {
    try {
        const {id} = req.params
        const response = await GuildShema.deleteOne({_id: id})
        return res.send(response)
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        })  
    }
    
}

module.exports = {
    getGuilds,
    getGuild,
    postGuild,
    putGuild,
    deleteGuild
}