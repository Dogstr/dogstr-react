module.exports = function(app){
    app.get("/checkAuthenticated", (req, res) => {
        console.log(req.isAuthenticated())
    })
}


