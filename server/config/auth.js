const { truncate } = require("fs")

module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()){
            res.json(true)
        }
        res.json(false)
    }
}