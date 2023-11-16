const UserSchema = require('../../database/schema/User')

const getUsers = async (req, res) => {
    try {
        const response = await UserSchema.find()
        return res.send(response)
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        })
    }
}

const getUser = async (req, res) => {
    try {
        const {id} = req.params
        const response = await UserSchema.findById(id)
        return res.send(response)
    } catch (error) {
        const errorLog = error.message
        return res.status(500).json({
            'Oh no!': errorLog
        }) 
    }
}

module.exports = {
    getUsers,
    getUser
}