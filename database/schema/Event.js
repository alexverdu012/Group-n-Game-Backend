const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        require: true
    },
    description: {
        type: mongoose.SchemaTypes.String,
        require: true,
    },
    organizer: { // Id of the user that created it
        type: mongoose.SchemaTypes.String,
        require: true,
    },
    startDate: { 
        type: mongoose.SchemaTypes.Date,
        require: true,
    },
    endDate: { 
        type: mongoose.SchemaTypes.Date,
        require: true,
    },
    attendants: {
        type: mongoose.SchemaTypes.Array,
    },
    image: {
        type: mongoose.SchemaTypes.String,
    }
})

module.exports = mongoose.model('evemt', EventSchema)