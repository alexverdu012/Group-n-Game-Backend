const mongoose = require('mongoose')

const GildSchema = mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        require: true,
        unique: true
    },
    description: {
        type: mongoose.SchemaTypes.String,
        require: true,
    },
    image: {
        type: mongoose.SchemaTypes.String,
    },
    members: {
        type: mongoose.SchemaTypes.Array,
        require: true
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        require: true,
        default: new Date()
    }
})

module.exports = mongoose.model('guild', GildSchema)