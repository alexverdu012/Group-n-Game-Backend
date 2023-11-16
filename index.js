//Express and library setup
const express = require('express')
const path = require('path');
const logger = require('morgan');
require('dotenv').config()
const cors = require('cors');
const passport = require('passport')
require('./lib/passport')
const flash = require('connect-flash')

//Routes
const videogameRouter = require('./routes/videogame-route');
const guildRouter = require('./routes/guild-route');
const eventRouter = require('./routes/event-route')
const authRouter = require('./routes/auth-route')
const userRouter = require('./routes/user-route')


//DB Requirements
require('./database/db')


const app = express()

var corsOptions = {
  credentials: true,
  origin: 'http://localhost:4200'
}

app.use(cors(corsOptions));

const cookieParser = require('cookie-parser')
const session = require('express-session')
app.use(cookieParser());
app.use(session({ 
  secret: process.env.PASSPORT_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: "auto",  // will set to true in https
    maxAge: 1000 * 60 * 60 * 2,
    httpOnly: false
  }
 }));
app.use(passport.initialize());
app.use(passport.session())

app.use(flash());

app.use(logger('dev'));
app.use(express.json());
app.enable('trust proxy')


//Route setup
app.use('/videogames', videogameRouter);
app.use('/guild', guildRouter);
app.use('/event', eventRouter);
app.use('/auth', authRouter)
app.use('/user', userRouter)


const PORT = 9999
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})



