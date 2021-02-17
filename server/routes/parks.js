const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/api', (req, res) => {
    db.Parks.findOne({id: req.body.id}).then((response) => {
        if (!response){
            db.Parks.create(req.body).then((response) => {
                console.log(response)
            })
        }
    })
})

module.exports = router;