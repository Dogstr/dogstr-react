module.exports = function(app){
    app.get("/checkAuthenticated", (req, res) => {
        if (req.user){
            res.send(req.user)
        }else{
            res.send(false)
        }
    })
}


