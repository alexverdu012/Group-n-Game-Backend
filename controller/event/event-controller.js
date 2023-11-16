const EventSchema = require('../../database/schema/Event')

const getEvents = async (req, res) => {
    try {
        const response = await EventSchema.find()
        return res.send(response)
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        })
    }
}

const getEvent = async (req, res) => {
    try {
        const {id} = req.params
        const response = await EventSchema.findById(id)
        return res.send(response)
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        }) 
    }
}

const postEvent = async (req, res) => {
    try {
        const {name, description, organizer, startDate, endDate, attendants, image} = req.body
        const response = await EventSchema.create({name, description, organizer, startDate, endDate, attendants, image})
        return res.send(response)
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        })
    }
}

const putEvent = async (req, res) => {
    try {
        const {name, description, organizer, startDate, endDate, attendants, image} = req.body
        const {id} = req.params
        const response = await EventSchema.updateOne({_id: id}, {name, description, organizer, startDate, endDate, attendants, image})
        return res.send(response)
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        })  
    }
}

const deleteEvent = async (req, res) => {
    try {
        const {id} = req.params
        const response = await EventSchema.deleteOne({_id: id})
        return res.send(response)
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        })  
    }
    
}

module.exports = {
    getEvents,
    getEvent,
    postEvent,
    putEvent,
    deleteEvent
}