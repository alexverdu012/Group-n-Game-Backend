const express = require('express');
const router = express.Router();
const passport = require('passport')


const { isLoggedIn, isNotLogged } = require('../lib/auth')

router.post('/register',isNotLogged, passport.authenticate('local.register', {failureRedirect: '/auth/error', failureFlash: true }),
function(req, res) {
  res.send(req.user._id)
}) 
 

  router.post('/login',isNotLogged, passport.authenticate('local.login', { failureRedirect: '/auth/error' }),
  function(req, res) {
    res.send({id: req.user._id})
  }) 



router.get('/error', (req, res) => {
  res.send(false)
})
 
  
router.get('/user', isLoggedIn, (req, res) => {
  res.send({username: req.user.username, id: req.user._id})
})

router.get('/logout',isLoggedIn, (req, res) => {  
    req.logOut(function(err){
      if (err) return next(err)
    })  
    res.sendStatus(200)
  })

module.exports = router;