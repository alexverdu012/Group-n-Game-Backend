module.exports = {

    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()){
           return next()
        }
        return res.send(false)
    
    },


    isNotLogged(req, res, next) {
        if (!req.isAuthenticated()){
            return next()
        }
        return res.send(true)
    }


}