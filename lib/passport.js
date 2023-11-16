const passport =require('passport')
const localStrategy = require('passport-local').Strategy

const UserSchema = require('../database/schema/User')
const helpers = require('../lib/helpers')


passport.use('local.login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const userFound = await UserSchema.findOne({email})
    if (userFound) {
        const validPassword = await helpers.matchPassword(password, userFound.password)
        if (validPassword) {
           return done(null, userFound)
        } else {
            return done(null, false , req.flash('bad_password'))
        }
    } else {
        return done(null, false, req.flash('not_found'))
    }
}))

passport.use('local.register', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    try {
        const username = email;
        const newUser = {
        email,
        password,
        username
        }
        newUser.password = await helpers.encryptPassword(password)
        const returnedUser = await UserSchema.create(newUser)
        return done(null, returnedUser)
    } catch (error) {
        console.log(error)
        return done(null, false)
    }
    
}))

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (_id, done) => {
    const user = await UserSchema.findById(_id)
    done(null, user)
})