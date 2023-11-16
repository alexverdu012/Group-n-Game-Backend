const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        unique: true
    },
    email: {
        type: mongoose.SchemaTypes.String,
        require: true,
        unique: true
    },
    password: {
        type: mongoose.SchemaTypes.String,
        require: true
    },
    image: {
        type: mongoose.SchemaTypes.String
    },
    friends: {
        type: mongoose.SchemaTypes.Array
    },
    games: {
        type: mongoose.SchemaTypes.Array
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        require: true,
        default: new Date()
    }
})

module.exports = mongoose.model('user', UserSchema)