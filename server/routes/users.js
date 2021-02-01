var express = require("express");
var router = express.Router();

router.post('/register', (req, res) => {
    console.log(req.body.name)
    res.json(req.body.name)
})

module.exports = router;